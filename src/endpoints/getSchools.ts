import { Request, Response } from "express";
import { selectSchools } from "../data/schoolsData/selectSchools";


export const getSchools = async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string;
        const state = req.query.state as string;

        await selectSchools();

        res.status(200).send();
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE") 
        ? res.status(500).send({message: "Database connection problem. Please, try again later or contact our company!"})
        : res.send({message: error.message});
    };
};