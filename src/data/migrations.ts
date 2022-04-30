import { connection } from "./connection";
import schools from "./mockData/schools.json";
import ongs from "./mockData/ongs.json";
import causes from "./mockData/causes.json";
import schoolsCause from "./mockData/relationSchoolCauses.json";
import ongsCause from "./mockData/relationOngCauses.json";


export const showError = (error: any): void => { 
    console.log(error.sqlMessage || error.message);
    if (error.sqlMessage) {
        throw new Error(`SQLMESSAGE:${error.sqlMessage}`);
    };
};


const createSchoolsTable = (): Promise<void> => connection
    .raw(`
        CREATE TABLE IF NOT EXISTS hack_schools(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            description VARCHAR(n) NOT NULL,
            email VARCHAR(255) UNIQUE,
            telephone VARCHAR(255) UNIQUE,
            social_media VARCHAR(255)
        );
    `)
    .then(()=> console.log("Created School's Table"))
    .catch(showError);

const createOngsTable = (): Promise<void> => connection
    .raw(`
        CREATE TABLE IF NOT EXISTS hack_ongs(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            description VARCHAR(n) NOT NULL,
            email VARCHAR(255) UNIQUE,
            telephone VARCHAR(255) UNIQUE,
            social_media VARCHAR(255)
        );
    `)
    .then(()=> console.log("Created ONG's Table"))
    .catch(showError);

const createCausesTable = (): Promise<void> => connection
    .raw(`
        CREATE TABLE IF NOT EXISTS hack_causes(
            id VARCHAR(255) PRIMARY KEY,
            cause VARCHAR(255) UNIQUE NOT NULL
        );
    `)
    .then(()=> console.log("Created Causes's Table"))
    .catch(showError);

const createRelationCauseSchool = (): Promise<void> => connection
    .raw(`
        CREATE TABLE IF NOT EXISTS hack_relation_cause_school(
            id VARCHAR(255) PRIMARY KEY,
            cause_id VARCHAR(255) NOT NULL,
            school_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (cause_id) REFERENCES hack_causes(id),
            FOREIGN KEY (school_id) REFERENCES hack_schools(id),
        );
    `)
    .then(()=> console.log("Created School's Causes Table"))
    .catch(showError);

const createRelationCauseOng = (): Promise<void> => connection
    .raw(`
        CREATE TABLE IF NOT EXISTS hack_relation_cause_school(
            id VARCHAR(255) PRIMARY KEY,
            cause_id VARCHAR(255) NOT NULL,
            ong_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (cause_id) REFERENCES hack_causes(id),
            FOREIGN KEY (ong_id) REFERENCES hack_ongs(id),
        );
    `)
    .then(()=> console.log("Created ONG's Causes Table"))
    .catch(showError);

const insertSchools = () => connection("hack_schools")
    .insert(schools)
    .then(() => console.log("hack_schools was populated"))
    .catch(showError);

const insertOngs = () => connection("hack_ongs")
    .insert(ongs)
    .then(() => console.log("hack_ongs was populated"))
    .catch(showError);

const insertCauses = () => connection("hack_causes")
    .insert(causes)
    .then(() => console.log("hack_causes was populated"))
    .catch(showError);

const insertSchoolsCause = () => connection("hack_relation_cause_school")
    .insert(schoolsCause)
    .then(() => console.log("hack_relation_cause_school was populated"))
    .catch(showError);

const insertOngsCause = () => connection("hack_relation_cause_school")
    .insert(schoolsCause)
    .then(() => console.log("hack_relation_cause_school was populated"))
    .catch(showError);

createSchoolsTable()
    .then(insertSchools);

createOngsTable()
    .then(insertOngs);

createCausesTable()
    .then(insertCauses);

createRelationCauseSchool()
    .then(insertSchoolsCause);

createRelationCauseOng()
    .then(insertOngsCause);