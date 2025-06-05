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
}

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
        if (isInitialMount.current) {
            isInitialMount.current = false;
            if (props.value) {
                try {
                    const parsedGroups = parseDqlString(props.value);
                    setGroups(parsedGroups);
                } catch (e) {
                    console.error("Failed to parse initial DQL string:", e);
                }
            }
        } else if (props.value !== prevValueRef.current) {
            try {
                const parsedGroups = props.value ? parseDqlString(props.value) : defaultGroups;
                setGroups(parsedGroups);
            } catch (e) {
                console.error("Failed to parse DQL string:", e);
            }
            prevValueRef.current = props.value;
        }
    }, [props.value]);

    useEffect(() => {
        if (debouncedOnChange) {
            const dql = generateDqlString();
            debouncedOnChange(dql);
        }
    }, [groups]);

    const parseDqlString = (dql) => {
        if (!dql || typeof dql !== 'string') return defaultGroups;

        const tokens = tokenize(dql);
        const { groups: parsedGroups } = parseTokens(tokens);
        return parsedGroups.length ? parsedGroups : defaultGroups;
    };

    const tokenize = (str) => {
        const tokens = [];
        let current = 0;
        const patterns = [
            { type: 'whitespace', regex: /^\s+/ },
            { type: 'paren', regex: /^[()]/ },
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

    const parseTokens = (tokens, index = 0) => {
        const groups = [];
        let currentGroup = {
            id: generateId(),
            isAll: true,
            conditions: [],
            children: []
        };

        while (index < tokens.length) {
            const token = tokens[index];

            if (token.type === 'paren' && token.value === '(') {
                const { groups: childGroups, index: newIndex } = parseTokens(tokens, index + 1);
                currentGroup.children.push(...childGroups);
                index = newIndex;
            } else if (token.type === 'paren' && token.value === ')') {
                groups.push(currentGroup);
                return { groups, index: index + 1 };
            } else if (token.type === 'operator') {
                if (token.value.toUpperCase() === 'OR') {
                    groups.push(currentGroup);
                    currentGroup = {
                        id: generateId(),
                        isAll: false,
                        conditions: [],
                        children: []
                    };
                }
                index++;
            } else if (token.type === 'identifier') {
                if (index + 2 < tokens.length && 
                    tokens[index + 1].type === 'comparison') {
                    const field = token.value;
                    const operator = tokens[index + 1].value;
                    const valueToken = tokens[index + 2];
                    let value = valueToken.value;

                    if (valueToken.type === 'string') {
                        value = value.slice(1, -1); // Remove quotes
                    }

                    currentGroup.conditions.push({
                        id: generateId(),
                        field: structure.find(f => f.key === field) || field,
                        operator: expressions.find(e => e.value === operator)?.key || operator,
                        value
                    });
                    index += 3;
                } else {
                    index++;
                }
            } else {
                index++;
            }
        }

        if (currentGroup.conditions.length > 0 || currentGroup.children.length > 0) {
            groups.push(currentGroup);
        }

        return { groups, index };
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
        if (typeof(value) === 'string') value = `"${value}"`;
        setGroups(updateGroups(groups, groupId, group => ({
            ...group,
            conditions: group.conditions.map(cond => 
                cond.id === conditionId ? { ...cond, value } : cond
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
                                defaultValue={_.get(_.find(expressions, ( { key } ) => key === condition.operator), 'key', '')}
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
            // Обрабатываем условия текущей группы
            const conditionsStr = group.conditions
                .filter(cond => cond.field && cond.operator && cond.value !== undefined)
                .map(cond => {
                    const field = cond.field.value || cond.field;
                    const operator = cond.operator.value || cond.operator;
                    const value = cond.value === '' ? '""' : cond.value;
                    return `${field} ${operator} ${value}`;
            });

            // Обрабатываем дочерние группы
            const childrenStr = group.children.map(processGroup);

            // Объединяем все части
            const allParts = [...conditionsStr, ...childrenStr].filter(Boolean);

            if (allParts.length === 0) return '';

            const joiner = group.isAll ? ' AND ' : ' OR ';
            let result = allParts.join(joiner);

            if (allParts.length > 1 || childrenStr.length > 0) {
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