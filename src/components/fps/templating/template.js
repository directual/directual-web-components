import React from 'react'
import _ from 'lodash'

export function template(input, model) {
    if (!input || input == "{{undefined}}" || input == "{{null}}") { return "" }
    

    let templateData = { ...model };
    const fields = (input.match(/{{(.*?)}}/g) || []).map(x => x.replace(/[{}]/g, ''));
    templateData = _.merge({}, _.zipObject(fields, _.fill(Array(fields.length), "")), templateData);

    const replaceNullWithEmptyString = obj => _.mapValues(obj, value => value === null ? "" : value);

    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    if (!templateData) return "";

    // TODO. апи в плагинах не отдает информацию о структуре. Надо поправить.
    // templateData = _.mapValues(templateData, (value, key) => {
    //   if (getDateFields().hasOwnProperty(key)) {
    //     return formatDate(value, getDateFields()[key])
    //   }
    //   return value;
    // });

    // Function to convert object references to their desired string representation paths
    const preprocessTemplate = (str, data) => {
        const regex = /{{\s*([\w.]+)\s*}}/g;
        return str.replace(regex, (match, p1) => {
            const keys = p1.split('.');
            let value = data;
            keys.forEach(key => {
                if (value && value[key]) {
                    value = value[key];
                }
            });
            // Check if the value is an object and replace it with the id property if it exists
            if (typeof value === 'object' && value !== null && value.id) {
                return `{{${p1}.id}}`;
            }
            return match;
        });
    };
    templateData = replaceNullWithEmptyString(templateData)

    const preprocessedInput = preprocessTemplate(input, templateData);

    const renderTemplate = (template) => {
        return _.template(template, {
            interpolate: /{{([\s\S]+?)}}/g
        })(templateData, {
            variable: '',
            evaluate: /<%([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        });
    };

    try {
        const result = renderTemplate(preprocessedInput);
        return result;
    } catch (error) {
        console.error(input);
        console.error(templateData);
        console.error('Error rendering template:', error);
        return 'templating error (front-end engine)';
    }
}