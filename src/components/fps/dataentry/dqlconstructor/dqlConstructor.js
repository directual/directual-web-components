import React, { useState, useEffect, useMemo } from "react";
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

export default function DqlConstructor(props) {
    const [structure, setStructure] = useState(
        props?.data?.jsonObject 
            ? JSON.parse(props.data.jsonObject).map(({sysName, name}) => ({ 
                key: sysName, 
                value: name 
              }))
            : []
    );

    const [groups, setGroups] = useState([
        {
            id: Date.now(),
            isAll: true, // true = AND (all), false = OR
            conditions: [
                { 
                    id: Date.now() + 1,
                    field: '', 
                    operator: '', 
                    value: '' 
                }
            ],
            children: []
        }
    ]);

    const debouncedOnChange = useMemo(() => 
        _.debounce(props.onChange, 300),
        [props.onChange]
    );

    useEffect(() => {
        if (debouncedOnChange) {
            const dql = generateDqlString();
            debouncedOnChange(dql);
        }
    }, [groups]);

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
                                onChange={(value) => handleFieldChange(group.id, condition.id, value)}
                            />
                            <Input 
                                type="select" 
                                nomargin={true}
                                options={expressions}
                                onChange={(value) => handleOperatorChange(group.id, condition.id, value)}
                            />
                            <Input 
                                type="string" 
                                nomargin={true}
                                onChange={(value) => handleValueChange(group.id, condition.id, value)}
                            />
                            <Button 
                                icon="delete" 
                                onClick={() => handleRemove(group.id, condition.id)}
                            />
                        </div>
                    ))}
                </div>
                
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
            
            <div className={styles.global_controls}>
                <Button 
                    accent={false} 
                    icon="plus"
                    onClick={() => handleAddGroup()}
                >
                    Add filter
                </Button>
            </div>
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