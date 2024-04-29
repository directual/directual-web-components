import _ from 'lodash'
import styles from './form2.module.css'
import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import { dict } from '../../locale'
import { locale } from 'moment';


export default function FormSteps(props) {
    const { type, formStepsSettings, filter } = props
    if (!formStepsSettings || _.isEqual(formStepsSettings,{})) return <div />
    const formSteps = { steps: Object.keys(formStepsSettings.stepSettings || {}).map(i => {
        return {
            sysName: i,
            ...formStepsSettings.stepSettings[i]
        }
    })}
    const lang = props.lang ? props.lang : props.locale ? props.locale.length == 3 ? props.locale : 'ENG' : 'ENG'
    const currentStepSysName = props.currentStep || _.get(_.get(formSteps,"steps"), "[0].sysName")
    const currentStep = _.find(_.get(formSteps,"steps"), { sysName: currentStepSysName })
    let availableSteps = (_.get(formSteps,"steps") || [])
        .filter(step => {
            if (!step.hideFor && !step.showFor) return true;
            if (step.hideFor && filter) {
                let value = step.hideFor.split(",")
                let field = filter ? filter.split(",") : []
                if (_.intersection(value, field).length > 0) {
                    return false
                }
            }
            if (step.showFor && filter) {
                let value = step.showFor.split(",")
                let field = filter ? filter.split(",") : []
                if (_.intersection(value, field).length > 0) {
                    return true
                } else return false
            }
            if (step.showFor && !filter) {
                return false
            }
            return true
        })
    availableSteps = _.orderBy(availableSteps, item => (formStepsSettings.stepsOrder || []).indexOf(item.sysName));
    availableSteps = _.filter(availableSteps, item => (formStepsSettings.stepsOrder || []).includes(item.sysName));
    const current = _.findIndex(availableSteps, currentStep) + 1 // index starts from 0
    const total = availableSteps.length


    // type == 'progress'
    return <div className={`${styles.formStepProgress} FPS_FORM_STEPS_PROGRESS`}>
        <div className={styles.stepsHeader}>
            <div className={styles.setpNumber}>{current}</div>
            <div className={styles.setpName}>{currentStep.title}</div>
        </div>
        <div className={styles.progressBar}>
            <div className={styles.progressBarBackground} />
            <div className={styles.progressBarFilled} style={{ width: `${(100 * current/total)}%` }} />
        </div>
        <div className={styles.stepsNofM}>{dict[lang].form.step} {current} {dict[lang].form.of} {total}</div>
        <div className={styles.stepDescription}>{currentStep.description}</div>
    </div>
}

FormSteps.propTypes = {
    type: PropTypes.string,
    formSteps: PropTypes.object,
    currentStep: PropTypes.string,
    locale: PropTypes.string,
    filter: PropTypes.string,
};

FormSteps.defaultProps = {
    type: 'progress',
    formSteps: {},
    currentStep: "",
    locale: "ENG",
    filter: ""
};