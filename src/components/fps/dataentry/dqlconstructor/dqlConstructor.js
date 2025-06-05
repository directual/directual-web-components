import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./dqlConstructor.module.css";
import Input from "../input/input";
import Button from "../../button/button";
import _ from "lodash";

const expressions = [
    { key: 'equal', value: '='},
    { key: 'notEquals', value: '!='},
    { key: 'lessThan', value: '<'},
    { key: 'greaterThan', value: '>'},
    { key: 'lessOrEqual', value: '<='},
    { key: 'greaterOrEqual', value: '>='},
    { key: 'like', value: 'like'},
    { key: 'in', value: 'in'},
];

const defaultGroups = [{
        id: generateId(),
        isAll: true, // true = AND (all), false = OR
        conditions: [
            { 
                id: generateId(),
                field: '', 
                operator: '', 
                value: '' 
            }
        ],
        children: []
}];

function generateId() {
    return Date.now() + Math.floor(Math.random() * 1000);
};

export default function DqlConstructor(props) {
    const [groups, setGroups] = useState(defaultGroups);
    const [structure, setStructure] = useState(
        props.fields?.map(({sysName, name}) => ({ key: sysName, value: name }))
    );

    const isInitialMount = useRef(true);
    const prevValueRef = useRef(props.value);

    const isDisabled = props.disabled || false;

    const debouncedOnChange = useMemo(() => 
        _.debounce(props.onChange, 300),
        [props.onChange]
    );

    useEffect(() => {
        const value = props.value || props.defaultValue;

        if (isInitialMount.current) {
            isInitialMount.current = false;
            if (value) {
                try {
                    const parsedGroups = parseDqlString(value);
                    setGroups(parsedGroups);
                } catch (e) {
                    console.error("Failed to parse initial DQL string:", e);
                }
            }
        } else if (value !== prevValueRef.current) {
            try {
                const parsedGroups = value ? parseDqlString(value) : defaultGroups;
                setGroups(parsedGroups);
            } catch (e) {
                console.error("Failed to parse DQL string:", e);
            }
            prevValueRef.current = value;
        }
    }, []);

    useEffect(() => {
        if (!isInitialMount.current && debouncedOnChange) {
            const dql = generateDqlString();
            if (dql !== prevValueRef.current) {
                debouncedOnChange(dql);
                prevValueRef.current = dql;
                console.log(dql);
            }
        }
    }, [groups]);

    const parseDqlString = (dql) => {
        if (!dql || typeof dql !== 'string') return defaultGroups;

        const tokens = tokenize(dql);
        console.log("Tokens, ", tokens)
        const groups= parseTokens(tokens);
        console.log("Groups, ", groups)
        return groups.length ? groups : defaultGroups;
    };

    const tokenize = (str) => {
        const tokens = [];
        let current = 0;
        const patterns = [
            { type: 'whitespace', regex: /^\s+/ },
            { type: 'parent', regex: /^[()]/ },
            { type: 'operator', regex: /^(AND|OR)\b/i },
            { type: 'comparison', regex: new RegExp(`^(${expressions.map(e => e.value).join('|')})`) },
            { type: 'identifier', regex: /^[a-zA-Z_]\w*/ },
            { type: 'string', regex: /^"[^"]*"/ },
            { type: 'number', regex: /^\d+/ }
        ];

        while (current < str.length) {
            let matched = false;
            for (const { type, regex } of patterns) {
                const match = str.slice(current).match(regex);
                if (match) {
                    if (type !== 'whitespace') {
                        tokens.push({ type, value: match[0] });
                    }
                    current += match[0].length;
                    matched = true;
                    break;
                }
            }
            if (!matched) throw new Error(`Unexpected token at position ${current}`);
        }

        return tokens;
    };

    const parseTokens = (tokens) => {
        let index = 0;

        const parseGroup = () => {
            const group = {
                id: generateId(),
                isAll: true,
                conditions: [],
                children: []
            };

            let pendingOperator = null;

            while (index < tokens.length) {
                const token = tokens[index];

                if (token.type === 'operator') {
                    pendingOperator = token.value.toUpperCase();
                    index++;
                    continue;
                }

                if (token.type === 'parent' && token.value === '(') {
                    index++;
                    const childGroup = parseGroup();

                    if (pendingOperator !== null) {
                        group.isAll = pendingOperator === 'AND';
                    }

                    group.children.push(childGroup);
                    continue;
                }

                if (token.type === 'parent' && token.value === ')') {
                    index++;
                    return group;
                }

                // Условие: идентификатор, оператор, значение
                if (
                    token.type === 'identifier' &&
                    index + 2 < tokens.length &&
                    tokens[index + 1].type === 'comparison'
                ) {
                    const fieldToken = token;
                    const operatorToken = tokens[index + 1];
                    const valueToken = tokens[index + 2];

                    // field: ищем соответствие в structure
                    const field = _.find(structure, ({ key }) => key === fieldToken.value) || { key: fieldToken.value, value: fieldToken.value };

                    // operator: ищем по value
                    const operator = _.find(expressions, ({ value }) => value === operatorToken.value) || { key: operatorToken.value, value: operatorToken.value };

                    // value: чистим кавычки, если есть
                    let rawValue = valueToken.value;
                    if (/^".*"$/.test(rawValue)) {
                        rawValue = rawValue.slice(1, -1); // remove quotes
                    }

                    const condition = {
                        id: generateId(),
                        field,
                        operator,
                        value: rawValue
                    };

                    if (pendingOperator !== null) {
                        group.isAll = pendingOperator === 'AND';
                    }

                    group.conditions.push(condition);
                    index += 3;
                    continue;
                }

                index++;
            }

            return group;
        };

        return [parseGroup()];
    };

    
    // Добавление нового условия
    const handleAddCondition = (groupId) => {
        setGroups(updateGroups(groups, groupId, group => ({
            ...group,
            conditions: [
                ...group.conditions, 
                { 
                    id: Date.now(),
                    field: '', 
                    operator: '', 
                    value: '' 
                }
            ]
        })));
    };

    // Добавление новой группы (по умолчанию AND)
    const handleAddGroup = (parentId = null) => {
        const newGroup = {
            id: Date.now(),
            isAll: true,
            conditions: [{ 
                id: Date.now() + 1,
                field: '', 
                operator: '', 
                value: '' 
            }],
            children: []
        };

        if (parentId) {
            setGroups(updateGroups(groups, parentId, group => ({
                ...group,
                children: [...group.children, newGroup]
            })));
        } else {
            setGroups([...groups, newGroup]);
        }
    };

    // Удаление элемента
    const handleRemove = (groupId, conditionId) => {
        setGroups(removeItem(groups, groupId, conditionId));
    };

    // Изменение типа группы
    const handleGroupTypeChange = (groupId, isAll) => {
        setGroups(updateGroups(groups, groupId, group => ({
            ...group,
            isAll
        })));
    };

    const handleFieldChange = (groupId, conditionId, field) => {
        setGroups(updateGroups(groups, groupId, group => ({
            ...group,
            conditions: group.conditions.map(cond => 
                cond.id === conditionId ? { ...cond, field } : cond
            )
        })));
    };

    const handleOperatorChange = (groupId, conditionId, operator) => {
        const operatorValue = _.find(expressions, ({ key }) => key === operator).value; 
        setGroups(updateGroups(groups, groupId, group => ({
            ...group,
            conditions: group.conditions.map(cond => 
                cond.id === conditionId ? { ...cond, operator: operatorValue } : cond
            )
        })));
    };

    const handleValueChange = (groupId, conditionId, value) => {
        const processedValue = (() => {
            // Если уже в кавычках или это число/boolean/null/undefined
            if (/^".*"$/.test(value) || 
                /^(true|false|null|undefined)$/i.test(value) || 
                /^-?\d+\.?\d*$/.test(value)) {
                return value;
            }
            return `"${value}"`;
        })();

        setGroups(updateGroups(groups, groupId, group => ({
            ...group,
            conditions: group.conditions.map(cond => 
                cond.id === conditionId ? { ...cond, value: processedValue } : cond
            )
        })));
    };

    // Рекурсивный рендеринг групп
    const renderGroups = (groups, level = 0) => {
        return groups.map((group) => (
            <div 
                key={group.id} 
                className={`${styles.dqlConstructor_group} ${group.isAll ? styles.all : styles.or}`}
                style={{ marginLeft: `${12}px` }}
            >
                <div className={styles.group_header}>
                    <div className={styles.group_type_selector}>
                        <label className={`${styles.radio_option} ${styles.all}`}>
                            <input 
                                type="radio"
                                name={`group-type-${group.id}`}
                                checked={group.isAll}
                                disabled={isDisabled}
                                onChange={() => handleGroupTypeChange(group.id, true)}
                            />
                            <span className={styles.radio_circle}></span>
                            AND
                        </label>
                        <label className={`${styles.radio_option} ${styles.or}`}>
                            <input 
                                type="radio"
                                name={`group-type-${group.id}`}
                                checked={!group.isAll}
                                disabled={isDisabled}
                                onChange={() => handleGroupTypeChange(group.id, false)}
                            />
                            <span className={styles.radio_circle}></span>
                            OR
                        </label>
                    </div>
                </div>

                <div className={styles.group_content}>
                    {group.conditions.map((condition) => (
                        <div key={condition.id} className={styles.dqlConstructor_line}>
                            <Input 
                                type="select" 
                                nomargin={true}
                                displayKey={true}
                                options={structure}
                                disabled={isDisabled}
                                onChange={(value) => handleFieldChange(group.id, condition.id, value)}
                                defaultValue={_.get(_.find(structure, ( { key } ) => key === condition.field.key), 'key', '')}
                            />
                            <Input 
                                type="select" 
                                nomargin={true}
                                options={expressions}
                                disabled={isDisabled}
                                onChange={(value) => handleOperatorChange(group.id, condition.id, value)}
                                defaultValue={_.get(_.find(expressions, ( { value } ) => value === condition.operator.value), 'key', '')}
                            />
                            <Input 
                                type="string" 
                                nomargin={true}
                                disabled={isDisabled}
                                onChange={(value) => handleValueChange(group.id, condition.id, value)}
                                defaultValue={condition.value || ""}
                            />
                            <Button 
                                icon="delete" 
                                disabled={isDisabled}
                                onClick={() => handleRemove(group.id, condition.id)}
                            />
                        </div>
                    ))}
                </div>
                
                {
                    !isDisabled && (
                        <div className={styles.group_controls}>
                            <Button 
                                accent={false} 
                                icon="plus"
                                onClick={() => handleAddCondition(group.id)}
                            >
                                Add filter
                            </Button>
                            <Button 
                                accent={false} 
                                icon="bracketsArray"
                                onClick={() => handleAddGroup(group.id)}
                            >
                                Add filters group
                            </Button>
                        </div>
                    )
                }

                {group.children.length > 0 && renderGroups(group.children, level + 1)}
            </div>
        ));
    };

    const generateDqlString = () => {
        const processGroup = (group) => {
            const conditionsStr = group.conditions
                .filter(cond => cond.field && cond.operator && cond.value !== undefined)
                .map(cond => {
                    const field = cond.field.key || cond.field;
                    const operator = cond.operator.value || cond.operator;

                    let value = cond.value;
                    if (typeof value === 'string') {
                        if (!/^".*"$/.test(value) && !/^(true|false|null|undefined|\d+)$/.test(value)) {
                            value = `"${value}"`; // добавляем кавычки только если это не число/boolean/null
                        }
                    }

                    return `${field} ${operator} ${value}`;
                });

            const childrenStr = group.children.map(processGroup);
            const allParts = [...conditionsStr, ...childrenStr].filter(Boolean);

            if (allParts.length === 0) return '';

            const joiner = group.isAll ? ' AND ' : ' OR ';
            let result = allParts.join(joiner);

            if (allParts.length > 1 || group.children.length > 0) {
                result = `(${result})`;
            }

            return result;
        };

        // Обрабатываем все корневые группы
        const result = groups.map(processGroup).filter(Boolean).join(' AND ');
        return result || '';
    };

    return (
        <div className={`${styles.dqlConstructor_wrapper} ${props.className}`}>
            {renderGroups(groups)}
            {
                !isDisabled && (
                    <div className={styles.global_controls}>
                        <Button 
                            accent={false} 
                            icon="plus"
                            onClick={() => handleAddGroup()}
                        >
                            Add filter
                        </Button>
                    </div>
                )
            }
        </div>
    );
};

// Вспомогательные функции для работы с вложенной структурой
function updateGroups(groups, targetId, updater) {
    return groups.map(group => {
        if (group.id === targetId) {
            return updater(group);
        }
        if (group.children.length > 0) {
            return {
                ...group,
                children: updateGroups(group.children, targetId, updater)
            };
        }
        return group;
    });
};

function removeItem(groups, groupId, conditionId) {
    return groups.map(group => {
        if (group.id === groupId) {
            const newConditions = group.conditions.filter(c => c.id !== conditionId);
            if (newConditions.length === 0 && group.children.length === 0) {
                return null;
            }
            return {
                ...group,
                conditions: newConditions
            };
        }
        
        if (group.children.length > 0) {
            const newChildren = removeItem(group.children, groupId, conditionId);

            if (newChildren.length === 0 && group.conditions.length === 0) {
                return null;
            }
            
            return {
                ...group,
                children: newChildren.filter(Boolean)
            };
        }
        
        return group;
    }).filter(Boolean);
};