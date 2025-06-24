import React, { useEffect, useState, useRef } from 'react'
import styles from './fileupload.module.css'
import Dropzone from 'react-dropzone'
import Loader from '../../loader/loader'
import Input from '../input/input'
import Backdrop from '../../backdrop/backdrop'
import { relativeTimeRounding } from 'moment'
import Hint from '../../hint/hint'
import { dict } from '../../locale'
import _ from "lodash"
import { Tooltip } from 'react-tooltip'
import InnerHTML from 'dangerously-set-html-content'

export default function FileUpload(props) {

    const [uploading, setUploading] = useState(false)
    const lang = props.locale ? props.locale.length == 3 ? props.locale : 'ENG' : 'ENG'
    const tooltipId = "tooltip_" + Math.floor(Math.random() * 1000000000)

    function bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (!bytes) {
            return '0 Byte'
        }
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
        return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
    }

    const toArray = string => {
        // console.log('toArray')
        // console.log(string)
        // console.log(typeof string)
        if (!string) return []
        if (typeof string == 'string ') { return string.split(",") }
        else {
            return string
        }
    }

    const [files, setFiles] = useState(toArray(props.defaultValue))
    const [oldView, setOldView] = useState(!props.allowUpload)

    useEffect(() => setFiles(toArray(props.defaultValue)), [props.defaultValue])

    const updateFiles = newFiles => {
        console.log("updateFiles")
        console.log(newFiles)
        // console.log(Array.isArray(newFiles))

        const resultFileString = Array.isArray(newFiles) ? newFiles.join(",") : newFiles

        if (newFiles.length == 0) { props.onChange && props.onChange("") }
        if (Array.isArray(newFiles)) { setFiles(newFiles) } else { setFiles(newFiles.split(',')) }
        console.log(resultFileString)
        props.onChange && props.onChange(resultFileString)
    }

    const saveFiles = (newFiles) => {
        // console.log("files")
        // console.log(files)
        // console.log("newFiles")
        // console.log(newFiles)

        let resultFileList = Array.isArray(files) ? [...files] : files.split(",").length > 0 ? files.split(",") : [files]

        if (newFiles.length == 0) { props.onChange && props.onChange(null); return undefined }

        newFiles.forEach((file, i) => {
            resultFileList.push('https://api.directual.com/fileUploaded/' + (file.finalFileName || file.file))
        })
        const resultFileString = resultFileList.join(",")
        setFiles(resultFileList)
        console.log('=== resultFileList ===')
        console.log(resultFileList)
        props.onChange && props.onChange(resultFileString)
    }

    const [error, setError] = useState(null)

    const parseJson = (str) => {
        if (!str) return undefined
        try {
            return JSON.parse(str)
        } catch (e) {
            console.log(str)
            console.log(e)
            return str
        }
    }

    return (
        <React.Fragment>
            <Tooltip id={tooltipId} />
            {oldView && props.edit && <div className={styles.uploadWrapper}>
                {props.allowUpload && <a onClick={() => setOldView(!oldView)} className={styles.switchView}>upload to Directual storage</a>}
                <Input
                    label={props.label}
                    tip={props.tip}
                    disabled={props.disabled}
                    description={props.description}
                    height={48}
                    required={props.required}
                    nomargin
                    onChange={updateFiles}
                    placeholder={props.multiple ? "Files URLs, comma separated, no spaces" : "File URL"}
                    type='file' defaultValue={files} />
            </div>}
            <div className={styles.fileUpload} style={{ marginBottom: props.nomargin ? 0 : 22, maxWidth: '100%' }}>
                {(!oldView || !props.edit) && <React.Fragment>
                    {(props.multiple || files.length == 0) && props.edit && <a onClick={() => setOldView(!oldView)} className={styles.switchView}>paste file URL</a>}
                    {props.label && <label className={`${styles.input_label_tooltip} FPS_Input_label`}>{props.label}{props.required && '*'}
                        {props.tooltip && <span
                            data-tooltip-html={props.tooltip}
                            data-tooltip-id={tooltipId} className={`icon icon-help small ${styles.tooltip}`} />}
                    </label>}
                    {/* {props.description && <div className={styles.description}>{props.description}</div>} */}
                    {props.description &&
                        <div className={styles.description}>
                            {props.description && (typeof props.description == "string" ? <InnerHTML allowRerender={true} html={props.description} />
                                : props.description)}
                            {(props.multiple || props.maxFiles > 1 || files.length == 0) && props.edit && !props.disabled &&
                                <Dropzone
                                    multiple={props.multiple ? true : false}
                                    {...props}
                                    disabled={props.disabled}
                                    maxFiles={props.maxFiles || undefined}
                                    accept={props.images ? 'image/*' : parseJson(props.accept)}
                                    onDrop={(acceptedFiles, rej, event) => {
                                        setUploading(true)
                                        let counter = 0
                                        let uploadedFiles = []
                                        acceptedFiles.forEach(file => {
                                            const body = new FormData
                                            body.append("file", file)
                                            fetch(props.host, {
                                                method: 'POST',
                                                body,
                                            }).then(res => {
                                                if (res.status != 200) {
                                                    setUploading(false)
                                                    setError('Upload error: ' + res.status + ' ' + res.statusText)
                                                }
                                                console.log(res)
                                                res.json().then(result => {
                                                    counter = counter + 1
                                                    // console.log('uploadedFiles')
                                                    // console.log(uploadedFiles)
                                                    uploadedFiles.push(result.result)
                                                    if (counter == acceptedFiles.length) {
                                                        setUploading(false)
                                                        saveFiles(uploadedFiles)
                                                    }
                                                })
                                            })
                                                .catch(err => setError(err))
                                        })
                                    }}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            {!uploading && <div {...getRootProps({ className: styles.dropzone })}>
                                                <input {...getInputProps()} />
                                                <p className={`icon icon-upload`}>
                                                    {props.uploadText ||
                                                        props.multiple ? _.get(dict[lang], 'dropMany') || "Drop files here, or click to select files" :
                                                        _.get(dict[lang], 'dropOne') || "Drop a file here, or click to select one"
                                                    }
                                                </p>
                                            </div>}
                                            {uploading &&
                                                <div className={styles.progress}>
                                                    <Loader>{_.get(dict[lang], 'uploading') || "Uploading files..."}</Loader>
                                                </div>}

                                        </section>
                                    )
                                    }

                                </Dropzone >
                            }
                        </React.Fragment>}
                    <FileList
                        fileList={files}
                        images={props.images}
                        edit={props.edit}
                        disabled={props.disabled}
                        lang={lang}
                        onDelete={index => {
                            console.log('deleting file: ' + index)
                            console.log(files)
                            if (typeof files == 'string' && (!files || files.split(",").length <= 1)) {
                                updateFiles([])
                                return
                            }
                            const saveNewFiles = typeof files == 'string' ? [...files.split(",")] : [...files]
                            saveNewFiles.splice(index, 1)
                            updateFiles(saveNewFiles)
                        }}
                    />
                    {error && <Hint error margin={{ top: 12, bottom: 1 }}>{JSON.stringify(error)}</Hint>}
                </div >

        </React.Fragment >
    )
}

function FileList({ fileList, images, onDelete, edit, lang, disabled }) {

    // console.log("fileList1")
    // console.log(fileList)

    fileList = fileList ?
        fileList
        : []
    fileList = Array.isArray(fileList) ? fileList : fileList.split(',')

    // console.log("fileList2")
    // console.log(fileList)

    const [largeView, setLargeView] = useState(null)

    if (fileList.length == 0) return <div />

    return <React.Fragment>

        {(largeView || largeView == 0) && <React.Fragment>
            <ShowImage
                imageUrl={fileList[largeView]}
                close={() => { setLargeView(null) }}
                lang={lang}
                swipable={fileList.length > 1}
                swipe={i => {
                    let saveIndex = largeView + i
                    if (saveIndex > fileList.length - 1) { saveIndex = 0 }
                    if (saveIndex < 0) { saveIndex = fileList.length - 1 }
                    setLargeView(saveIndex)
                }}
            />
            <Backdrop top onClick={() => { setLargeView(null) }} />
        </React.Fragment>}

        {images ? <div className={styles.imageList}>
            {fileList.length > 0 && Array.isArray(fileList) ? fileList.map((image, i) => <ImagePreview
                key={i}
                edit={edit}
                disabled={disabled}
                imageUrl={image}
                openImage={() => setLargeView(i)}
                onDelete={() => !disabled && onDelete(i)}
            />) : fileList && fileList.split(",").map((image, i) => <ImagePreview
                key={i}
                disabled={disabled}
                edit={edit}
                imageUrl={image}
                openImage={() => setLargeView(i)}
                onDelete={() => !disabled && onDelete(i)}
            />)
            }
        </div> :
            <div className={styles.fileList}>
                {fileList.length > 0 && Array.isArray(fileList) ? fileList.map((file, i) => <FilePreview
                    key={i}
                    edit={edit}
                    disabled={disabled}
                    fileUrl={file}
                    onDelete={() => !disabled && onDelete(i)}
                />) : fileList && fileList.split(",").map((image, i) => <ImagePreview
                    key={i}
                    edit={edit}
                    imageUrl={image}
                    disabled={disabled}
                    openImage={() => setLargeView(i)}
                    onDelete={() => !disabled && onDelete(i)}
                />)}
            </div>}

    </React.Fragment>
}

function ShowImage({ imageUrl, swipe, swipable, close, lang }) {
    const leftButton = useRef(null);
    const rightButton = useRef(null);
    const image = useRef(null);
    const imageName = useRef(null);

    // press 'Esc' for closing a popup:
    const handleUserKeyPress = (e) => {
        e.key == 'Escape' && close()
        e.key == 'ArrowLeft' && swipe(-1)
        e.key == 'ArrowRight' && swipe(1)
    }

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => { window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    //----------------------

    useOutsideAlerter(image);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (!leftButton.current.contains(event.target) &&
                    !rightButton.current.contains(event.target) &&
                    !ref.current.contains(event.target)
                    //&& !imageName.current.contains(event.target)
                ) {
                    close()
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return <div className={styles.showImage}>
        {swipable ? <div className={`${styles.toLeft} icon icon-back`} ref={leftButton} onClick={() => swipe(-1)} /> : <div ref={leftButton} />}
        <div className={styles.imageWrapper}>
            <img ref={image} src={imageUrl} />
            {/* <span ref={imageName} className={styles.imageName}>{imageUrl}</span> */}
        </div>
        {swipable ? <div className={`${styles.toRight} icon icon-forward`} ref={rightButton} onClick={() => swipe(1)} /> : <div ref={rightButton} />}
    </div>
}

function ImagePreview({ imageUrl, onDelete, openImage, edit, disabled }) {
    return <div className={styles.imagePreview}>
        <img src={imageUrl}
            onClick={() => openImage()}
        />
        {edit && !disabled && <div className={`icon icon-close ${styles.deleteImage}`}
            onClick={e => {
                e.stopPropagation()
                onDelete()
            }}
        />}
    </div>
}

function FilePreview({ fileUrl, onDelete, edit, disabled }) {

    const getResolution = line => {
        if (!line) return null
        const regex = /\....?.?.?$/g;
        const found = line.match(regex);
        return found ? found[0].substring(1) : '?'
    }

    return <div className={styles.fileWrapper}>
        <div className={styles.resolutionWrapper}>
            {getResolution(fileUrl)}
        </div>
        <div className={styles.fileUrl}>
            <a href={fileUrl} target="_blank">{fileUrl}</a>
        </div>
        {edit && !disabled && <div className={`${styles.delete} icon icon-delete`} onClick={onDelete} />}
    </div>
}

export function DropFiles(props) {
    return (
        <React.Fragment>
            <div className={styles.fileUpload} style={{ marginBottom: props.nomargin ? 0 : 22 }}>
                <label>{props.label}{props.required && '*'}</label>
                {props.description && <div className={styles.description}>{props.description}</div>}
                <Dropzone
                    // multiple={props.multiple ? true : false}
                    // accept={props.accept}
                    // onDrop={props.onDrop}
                    {...props}
                >
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            {!props.uploading && <div {...getRootProps({ className: styles.dropzone })}>
                                <input {...getInputProps()} />
                                <p className={`icon icon-upload`}>
                                    {props.uploadText || "Drop a file here, or click to select one"}
                                </p>
                            </div>}
                            {props.uploading &&
                                <div className={styles.progress}>
                                    <Loader>Uploading files...</Loader>
                                </div>}
                        </section>
                    )
                    }
                </Dropzone >
            </div>

        </React.Fragment>
    )
}