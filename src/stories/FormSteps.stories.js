import 'mapbox-gl/dist/mapbox-gl.css'
import FormSteps from '../components/fps/dataentry/form/FormSteps'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
    title: 'FPS/Design System/Form Steps',
    component: FormSteps,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'left',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        type: { control: 'select', options: ["progress"] },
    },
};

let exampleSteps = {
    settings: {
        hideProgress: false
    },
    steps: [
        { 
            id: "step_123",
            sysName: "step1",
            iconType: "directual",
            icon: "babai",
            title: "Create your account",
            description: "To clain your student discount, sign up using your .edu address",
            hideFor: "",
            showFor: "",
        },
        { 
            id: "step_124",
            sysName: "step2",
            iconType: "directual",
            icon: "actions",
            title: "Finish eba",
            description: "To clain your student discount, sign up using your .edu address",
            hideFor: "",
            showFor: "",
        },
        { 
            id: "step_1",
            sysName: "step3",
            iconType: "directual",
            icon: "actions",
            title: "Finish eba",
            description: null,
            hideFor: "",
            showFor: "",
        }
    ]
}

let newExampleSteps = {
    "stepsOrder": [
        "step 1",
        "step 2"
    ],
    "settings": {
        "steps": {
            "step 1": true,
            "Step 2": true,
            "step 2": true
        }
    },
    "stepSettings": {
        "step 1": {
            "description": ""
        }
    }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProgressBar = {
    args: {
        type: 'progress',
        formStepsSettings: newExampleSteps,
        currentStep: "2",
        locale: "ESP",
        filter: ""
    },
};
