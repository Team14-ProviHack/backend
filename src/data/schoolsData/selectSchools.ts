import { connection } from "../connection";
import { showError } from "../migrations";


export const selectSchools = async (
    name?: string,
    state?: string
) => {
    if (name && state) {
        const result = await connection("hack_schools")
        .select(
            "hack_schools.*",
            "hack_causes.cause"
        ).leftJoin(
            "hack_relation_cause_school",
            "hack_schools.id",
            "=",
            "hack_relation_cause_school.school_id"
        ).leftJoin(
            "hack_causes",
            "hack_relation_cause_school.cause_id",
            "=",
            "hack_causes.id",           
        ).whereLike("name", `%${name}%`)
        .where({state})
        .orderBy("hack_schools.name", "asc")
        .then(res => console.log(res))
        .catch(showError);
    
        console.log(result);
    } else if (name) {
        const result = await connection("hack_schools")
        .select(
            "hack_schools.*",
            "hack_causes.cause"
        ).leftJoin(
            "hack_relation_cause_school",
            "hack_schools.id",
            "=",
            "hack_relation_cause_school.school_id"
        ).leftJoin(
            "hack_causes",
            "hack_relation_cause_school.cause_id",
            "=",
            "hack_causes.id",           
        ).whereLike("name", `%${name}%`)
        .orderBy("hack_schools.name", "asc")
        .then(res => console.log(res))
        .catch(showError);
    
        console.log(result);

    } else if (state) {
        const result = await connection("hack_schools")
        .select(
            "hack_schools.*",
            "hack_causes.cause"
        ).leftJoin(
            "hack_relation_cause_school",
            "hack_schools.id",
            "=",
            "hack_relation_cause_school.school_id"
        ).leftJoin(
            "hack_causes",
            "hack_relation_cause_school.cause_id",
            "=",
            "hack_causes.id",           
        ).where({state})
        .orderBy("hack_schools.name", "asc")
        .then(res => console.log(res))
        .catch(showError);
    
        console.log(result);

    } else {
        const result = await connection("hack_schools")
        .select(
            "hack_schools.*",
            "hack_causes.cause"
        ).leftJoin(
            "hack_relation_cause_school",
            "hack_schools.id",
            "=",
            "hack_relation_cause_school.school_id"
        ).leftJoin(
            "hack_causes",
            "hack_relation_cause_school.cause_id",
            "=",
            "hack_causes.id",           
        ).orderBy("hack_schools.name", "asc")
        .then(res => console.log(res))
        .catch(showError);
    
        console.log(result);
    }
};