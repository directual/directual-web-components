import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import styles from './cards2.module.css'
import icon from './../../../../icons/fps-cards.svg'
import _ from 'lodash'
import Button from '../../button/button';
import Input, { InputRow } from '../../dataentry/input/input';
import { debounce } from 'lodash'
import { template } from '../../templating/template'
import InnerHTML from 'dangerously-set-html-content'

function FpsCards2({ auth, data, onEvent, callEndpoint, templateEngine, id, currentBP, locale, handleRoute }) {

    console.log("== FpsCards2 data ===")
    console.log(data)

    currentBP = currentBP || 'tablet' // костылек, чтобы хоть какой-то BP передавался
    //console.log("currentBP = " + currentBP)

    const title = _.get(data, "params.cards_title")
    const showCounter = _.get(data, "params.general.showObjCount")
    const cardsLayout = _.get(data, "params.cards_layout")
    const objects = _.get(data, "data", [])
    const card_border = _.get(data, "params.card_border", 1)
    const card_border_radius = _.get(data, "params.card_border_radius")

    const [error, setError] = useState("")

    // grid settings
    const breakPoints = {
        wideDesktop: _.get(data, "params.grid_layout__wideDesktop", 4),
        desktop: _.get(data, "params.grid_layout__desktop", 3),
        tablet: _.get(data, "params.grid_layout__tablet", 2),
        mobile: _.get(data, "params.grid_layout__mobile", 1),
    }
    const grid_layout__gap = _.get(data, "params.grid_layout__gap", 22)
    const field_quantity = _.get(data, "params.card_type_cart.quantity")

    // edit object from card

    const callEndpointPOST = (endpoint, body, finish) => {
        console.log('===> calling endpoint POST /' + endpoint)
        console.log(body)
        callEndpoint && callEndpoint(
            endpoint,
            "POST",
            body,
            undefined,
            (result, data) => {
                if (result == "ok") {
                    console.log('finish')
                    console.log(data)
                    finish && finish()
                    //   try {
                    //     console.log("response data")
                    //     console.log(data)
                    //     const response = JSON.parse(data)
                    //     // update state
                    //     if (!isEmpty(_.get(response, "state"))) {
                    //       const stateUpdate = _.get(response, "state")
                    //       setState({ ...state, ...stateUpdate })
                    //     }
                    //     // update model/object
                    //     if (!isEmpty(_.get(response, "object"))) {
                    //       const modelUpdate = _.get(response, "object")
                    //       setModel({ ...model, ...modelUpdate })
                    //     }
                    //     if (!isEmpty(_.get(response, "model"))) {
                    //       const modelUpdate = _.get(response, "model")
                    //       setModel({ ...model, ...modelUpdate })
                    //     }
                    //     if (!isEmpty(_.get(response, "redirect")) &&
                    //       !isEmpty(_.get(response, "redirect.target"))) {
                    //       let delay = 0
                    //       if (!isEmpty(_.get(response, "redirect.delay"))) {
                    //         delay = typeof _.get(response, "redirect.delay") == 'number' ? _.get(response, "redirect.delay") : parseInt(_.get(response, "redirect.delay"))
                    //       }
                    //       let target = _.get(response, "redirect.target")
                    //       setTimeout(() => {
                    //         if (target.startsWith("http")) {
                    //           window.location.href = target;
                    //         } else {
                    //           handleRoute(target)()
                    //         }
                    //       }, delay)
                    //     }
                    //     // refresh
                    //     if (_.get(response, "refresh")) {
                    //       refreshOptions()
                    //     }
                    //   } catch (err) {
                    //     console.log(err)
                    //   }
                } else {
                    console.log('callEndpoint result is not OK')
                }
            }
        )
    }

    const callEndpointGET = (endpoint, params, finish) => {
        console.log('===> calling endpoint GET /' + endpoint)
        callEndpoint && callEndpoint(
            endpoint,
            "GET",
            undefined,
            params,
            (result, data) => {
                if (result == "ok") {
                    finish && finish(data)
                }
                else {
                    setError && setError(data)
                    finish && finish([])
                }
            }
        )
    }

    return <div className={`FPS_CARDS2 ${styles.cards2}`}>

        {(title || showCounter) && <div className={`FPS_CARDS2__HEADER ${styles.cards2_header}`}>
            {title && <h2>{title}</h2>}
            {showCounter && <div className={`FPS_CARDS2__HEADER-counter ${styles.cards2_header_counter}`}>5 items</div>}
        </div>}

        {/* CSS GRID */}
        {cardsLayout == "grid" && <div className={`FPS_CARDS2__WRAPPER 
            ${styles.cards2_wrapper} 
            ${styles.layout_grid}`}
            style={{
                gap: grid_layout__gap,
                gridTemplateColumns: _.join(_.times(breakPoints[currentBP], _.constant('1fr')), ' ')
            }}
        >
            {objects
                .filter(object => !!_.get(object, field_quantity, 1)) // filter items with quantity == 0
                .map(object => <div
                    style={(!card_border_radius && card_border_radius !== 0) ? {
                        borderWidth: card_border,
                    } : {
                        borderWidth: card_border,
                        borderRadius: card_border_radius
                    }}
                    className={`FPS_CARDS2__CARD ${styles.cards2_card}`}>
                    <Card
                        key={object.id}
                        data={data}
                        callEndpointGET={callEndpointGET}
                        callEndpointPOST={callEndpointPOST}
                        object={object}
                        templateEngine={templateEngine}
                    />
                </div>)}

        </div>}
    </div>
}

function Card(props) {

    const { object, data, templateEngine, callEndpointPOST, callEndpointGET } = props

    const cardType = _.get(data, "params.card_layout_type")
    const card_padding = _.get(data, "params.card_padding", 12)
    const image_shape = _.get(data, "params.card_type_cart.image_shape")
    const image_padding = _.get(data, "params.card_type_cart.image_padding", 0)
    const image_border_radius = _.get(data, "params.card_type_cart.image_border_radius", 0)

    const field_header = _.get(data, "params.card_type_cart.header")
    const field_image = "{{" + _.get(data, "params.card_type_cart.image") + "}}"
    const field_description = _.get(data, "params.card_type_cart.description")
    const field_price = _.get(data, "params.card_type_cart.price")
    const field_quantity = _.get(data, "params.card_type_cart.quantity")

    const dir_image_field = "{{" + _.get(data, "params.card_type_dir.image") + "}}"
    const dir_image_height = _.get(data, "params.card_type_dir.image_height", 50)
    const dir_image_radius = _.get(data, "params.card_type_dir.image_border_radius", 0)
    const dir_image_padding = _.get(data, "params.card_type_dir.image_padding", 0)
    const dir_cardBody = _.get(data, "params.card_type_dir.body", "")

    const favoritesOn = _.get(data, "params.card_type_dir.favoritesOn", false)
    const favoritesEndpoint = _.get(data, "params.card_type_dir.favoritesEndpoint", "")
    const favoritesField = _.get(data, "params.card_type_dir.favoritesField", "")
    const favoritesIconOn = _.get(data, "params.card_type_dir.favoritesIconOn", "starFill")
    const favoritesIconOff = _.get(data, "params.card_type_dir.favoritesIconOff", "star")

    const [description, setDescription] = useState("loading...")
    const [cardBody, setCardBody] = useState("loading...")

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const fetchData = async (payload, setValue) => {
            const templValue = templateEngine ? await templateEngine(payload, object) : "Templating error";
            setValue(templValue);
        };
        fetchData(field_description, setDescription);
        fetchData(dir_cardBody, setCardBody);
        favoritesOn && favoritesEndpoint && callEndpointGET(favoritesEndpoint, {}, data => {
            console.log("favorites")
            console.log(data)
            setFavorites(data)
        })
    }, [])

    const changeQuantity = (count) => {
        callEndpointPOST(_.get(data, "sl"), { id: object.id, [field_quantity]: count })
    }

    const cx = null
    const onChangeQuantity = debounce(changeQuantity, 500);

    if (cardType == "cart") return <div
        className={`Cards2_typeCart ${styles.cards2_typeCart}`}>
        {image_shape !== "no_image" && <div
            className={`Cards2_typeCart__imageWrapper ${styles.cards2_typeCart__imageWrapper}`}>
            <div
                className={`Cards2_typeCart__image ${styles.cards2_typeCart__image}`}
                style={{
                    width: _.get(data, "params.card_type_cart.image_width", 50),
                    height: _.get(data, "params.card_type_cart.image_height", 50),
                    overflow: "hidden",
                    margin: image_padding,
                    borderRadius: image_shape == "circle" ? "100%" : image_border_radius,
                    backgroundImage: `url(${template(field_image, object)})`
                }}
            />
        </div>}
        <div
            style={{
                padding: card_padding,
            }}
            className={`Cards2_typeCart__bodyWrapper ${styles.cards2_typeCart__bodyWrapper}`}>
            <div className={`Cards2_typeCart__header ${styles.cards2_typeCart__header}`}>
                <InnerHTML allowRerender={true} html={template(field_header, object)} />
            </div>
            <div className={`Cards2_typeCart__description ${styles.cards2_typeCart__description}`}>
                <InnerHTML allowRerender={true} html={description} />
            </div>
            <div className={`Cards2_typeCart__price ${styles.cards2_typeCart__price}`}>
                <InnerHTML allowRerender={true} html={template(field_price, object)} />
            </div>
            <CartControls
                object={object}
                quantity={_.get(object, field_quantity, 1)}
                changeQuantity={onChangeQuantity} />
        </div>
    </div>

    if (cardType == "regular") return <div
        className={`Cards2_typeRegular ${styles.cards2_typeRegular}`}>
        <div
            className={`Cards2_typeRegular__image ${styles.cards2_typeRegular__image}`}
            style={{
                height: dir_image_height,
                overflow: "hidden",
                margin: dir_image_padding,
                borderRadius: dir_image_radius,
                backgroundImage: `url(${template(dir_image_field, object)})`,
                backgroundColor: 'red'
            }} />
        {favoritesOn && <div
            className={`Cards2_typeRegular__favButton ${styles.cards2_typeRegular__favButton}`}>
                <div className={`${styles.cards2_typeRegular__favButton__icon} icon icon-${favoritesIconOn}`}/>
        </div>}
        <div style={{ padding: card_padding }}>
            <InnerHTML allowRerender={true} html={cardBody} />
        </div>
    </div>

    return <div >
        —
    </div>
}

function CartControls(props) {

    const { object, changeQuantity, quantity } = props

    const [count, setCount] = useState(quantity)

    const saveCount = val => {
        setCount(val)
    }

    const addCount = () => {
        setCount(count + 1)
    }

    const deleteItem = () => {
        setCount(0)
    }

    const substrCount = () => {
        count > 0 && setCount(count - 1)
    }

    useEffect(() => {
        count !== quantity && changeQuantity(count)
    }, [count])

    return <div className={`Cards2_typeCart__controls ${styles.cards2_typeCart__controls}`}>
        <div onClick={substrCount}
            className={`icon icon-minus small 
                ${count < 1 && styles.disabled}
                ${styles.cards2_typeCart__controls__button}`} />
        <div className={`${styles.cards2_typeCart__controls__count}`}>{count || 0}</div>
        <div onClick={addCount}
            className={`icon icon-plus small ${styles.cards2_typeCart__controls__button}`} />
        <div className={`Cards2_typeCart__controls__delete ${styles.cards2_typeCart__controls__delete}`}>
            <div onClick={deleteItem}
                className={`icon icon-delete ${styles.cards2_typeCart__controls__button}`} />
        </div>

    </div>
}

FpsCards2.propTypes = {
    data: PropTypes.object.isRequired,
    auth: PropTypes.object,
    locale: PropTypes.string,
    onChange: PropTypes.func,
    handleRoute: PropTypes.func
};

FpsCards2.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG",
    onChange: undefined,
    handleRoute: undefined
};

FpsCards2.settings = {
    icon: icon,
    name: 'Cards view (2024)',
    sysName: 'FpsCards2',
    isLegacy: false,
    isMarketplace: false,
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Page size', sysName: 'pageSize', type: 'number' },
        { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
        { name: 'Component comment', sysName: 'comment', type: 'comment' },
    ]
}
export default FpsCards2
