import DqlConstructor from "../components/fps/dataentry/dqlconstructor/dqlConstructor";
import dqlConstructor from "../components/fps/dataentry/dqlconstructor/dqlConstructor";

export default {
    title: 'FPS/Components/DQLConstructor',
    component: DqlConstructor,
    parameters: {
        layout: 'left',
    },
    tags: ['autodocs']
};

const fields = [
    {"sysName":"id","name":"id","dataType":"id"},
    {"sysName":"title","name":"Title","dataType":"string"},
    {"sysName":"content","name":"Content","dataType":"string"},
    {"sysName":"description","name":"Description","dataType":"string"},
    {"sysName":"price","name":"Price","dataType":"decimal"},
    {"sysName":"amount","name":"Amount","dataType":"number"},
    {"sysName":"isEnable","name":"Is enable","dataType":"boolean"},
    {"sysName":"date","name":"Date","dataType":"date"},
    {"sysName":"@who","name":"who changed","dataType":"string"},
    {"sysName":"@dateCreated","name":"date created","dataType":"date"},
    {"sysName":"@dateChanged","name":"date changed","dataType":"date"}
];

export const Regular = {
    args: {
      fields: fields,
      onChange: (dql) => console.log('DQL changed:', dql),
      locale: 'ENG'
    },
};