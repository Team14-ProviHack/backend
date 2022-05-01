import { Request, Response } from "express";
import { selectSchools } from "../data/schoolsData/selectSchools";
import { SchoolRequest, SchoolResponse } from "../types";


export const getSchools = async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string;
        const state = req.query.state as string;

        const schools: SchoolRequest[] = await selectSchools(name, state);
        const formatingSchoolsList: SchoolResponse[] = schools.map(
            (school: SchoolRequest): SchoolResponse => {
                return {
                    id: school.id,
                    name: school.name,
                    address: school.address,
                    state: school.state,
                    description: school.description,
                    namePrincipal: school.name_principal,
                    office: school.office,
                    socialMedia: school.social_media,
                    email: school.email,
                    telephone: school.telephone,
                    cause: [school.cause]
                }
            })

            const schoolsList = [...formatingSchoolsList];

            for (let i = 0; i < schoolsList.length; i++) {
                if (
                    i+1 < schoolsList.length && 
                    schoolsList[i].id === schoolsList[i+1].id
                ) {
                    schoolsList[i].cause.push(schoolsList[i+1].cause[0]);
                    schoolsList.splice(i+1, 1);
                    i -= 1;
                };
            };

        res.status(200).send({schoolsList: schoolsList});
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE")
            ? res.status(500).send({ message: "Database connection problem. Please, try again later or contact our company!" })
            : res.send({ message: error.message });
    };
};