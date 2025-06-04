import React from "react";
import { ReactFlow, Background } from "@xyflow/react";
import styles from './reactFlow.module.css';

export default function ReactFlowComponent(props) {

    const defaultNodes = [
        {
            id: "1",
            data: { label: "Original Node" },
            position: { x: 20, y: 20 },
            type: "default",
        },
        {
            id: "2",
            data: {},
            position: { x: 0, y: 40 },
            type: "placeholderNode",
        },
    ];

    return (
        <div className={`${styles.reactFlow_wrapper}`}>
            <ReactFlow
                nodes={defaultNodes}
                defaultEdges={props?.data?.defaultEdges}
                nodeTypes={{}}
                fitView
            >
                <Background />
            </ReactFlow>
        </div>
    );
};