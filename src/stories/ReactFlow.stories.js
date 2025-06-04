import ReactFlowComponent from "../components/fps/reactFlow/reactFlow";

export default {
    title: 'FPS/Components/ReactFlow',
    component: ReactFlowComponent,
    parameters: {
        layout: 'left',
    },
    tags: ['autodocs']
};

const defaultNodes = [
  {
    id: "1",
    data: { label: "Original Node" },
    position: { x: 0, y: 0 },
    type: "default",
  },
  {
    id: "2",
    data: {},
    position: { x: 0, y: 150 },
    type: "placeholderNode",
  },
];
 
const defaultEdges = [
  {
    id: "1=>2",
    source: "1",
    target: "2",
    type: "default",
    animated: true,
  },
];

export const Regular = {
    args: {
      data: { ...defaultNodes, ...defaultEdges },
      auth: {},
      locale: 'ENG'
    },
};