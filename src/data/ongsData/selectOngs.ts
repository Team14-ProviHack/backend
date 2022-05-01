import { OngRequest } from "../../types";
import { connection } from "../connection";
import { showError } from "../migrations";


export const selectOngs = async (
    name?: string,
    state?: string
): Promise<OngRequest[]> => {
    if (name && state) {
        const result = await connection("hack_ongs")
        .select(
            "hack_ongs.*",
            "hack_causes.cause"
        ).leftJoin(
            "hack_relation_cause_ong",
            "hack_ongs.id",
            "=",
            "hack_relation_cause_ong.ong_id"
        ).leftJoin(
            "hack_causes",
            "hack_relation_cause_ong.cause_id",
            "=",
            "hack_causes.id",           
        ).whereLike("name", `%${name}%`)
        .where({state})
        .orderBy("hack_ongs.name", "asc")
        .then(res => res)
        .catch(showError);

        return result as OngRequest[];
    
    } else if (name) {
        const result = await connection("hack_ongs")
        .select(
            "hack_ongs.*",
            "hack_causes.cause"
        ).leftJoin(
            "hack_relation_cause_ong",
            "hack_ongs.id",
            "=",
            "hack_relation_cause_ong.ong_id"
        ).leftJoin(
            "hack_causes",
            "hack_relation_cause_ong.cause_id",
            "=",
            "hack_causes.id",           
        ).whereLike("name", `%${name}%`)
        .orderBy("hack_ongs.name", "asc")
        .then(res => res)
        .catch(showError);
    
        return result as OngRequest[];

    } else if (state) {
        const result = await connection("hack_ongs")
        .select(
            "hack_ongs.*",
            "hack_causes.cause"
        ).leftJoin(
            "hack_relation_cause_ong",
            "hack_ongs.id",
            "=",
            "hack_relation_cause_ong.ong_id"
        ).leftJoin(
            "hack_causes",
            "hack_relation_cause_ong.cause_id",
            "=",
            "hack_causes.id",           
        ).where({state})
        .orderBy("hack_ongs.name", "asc")
        .then(res => res)
        .catch(showError);
    
        return result as OngRequest[];

    } else {
        const result = await connection("hack_ongs")
        .select(
            "hack_ongs.*",
            "hack_causes.cause"
        ).leftJoin(
            "hack_relation_cause_ong",
            "hack_ongs.id",
            "=",
            "hack_relation_cause_ong.ong_id"
        ).leftJoin(
            "hack_causes",
            "hack_relation_cause_ong.cause_id",
            "=",
            "hack_causes.id",           
        ).orderBy("hack_ongs.name", "asc")
        .then(res => res)
        .catch(showError);

        return result as OngRequest[];
    
    };
};