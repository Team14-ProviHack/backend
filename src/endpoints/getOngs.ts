import { Request, Response } from "express";
import { selectOngs } from "../data/ongsData/selectOngs";
import { OngRequest } from "../types";


export const getOngs = async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string;
        const state = req.query.state as string;

        const ongs: OngRequest[] = await selectOngs(name, state);
        const formatingOngsList = ongs.map((ong: OngRequest) => {
            return {
                id: ong.id,
                name: ong.name,
                address: ong.address,
                state: ong.state,
                description: ong.description,
                namePrincipal: ong.name_principal,
                office: ong.office,
                socialMedia: ong.social_media,
                email: ong.email,
                telephone: ong.telephone,
                cause: [ong.cause]
            }
        });

        const ongsList = [...formatingOngsList];

        for (let i = 0; i < ongsList.length; i++) {
            if (
                i + 1 < ongsList.length &&
                ongsList[i].id === ongsList[i + 1].id
            ) {
                ongsList[i].cause.push(ongsList[i + 1].cause[0]);
                ongsList.splice(i + 1, 1);
                i -= 1;
            };
        };

        res.status(200).send({ongsList: ongsList});
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE")
            ? res.status(500).send({ message: "Database connection problem. Please, try again later or contact our company!" })
            : res.send({ message: error.message });
    };
};