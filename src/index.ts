import { app } from "./app";
import { getOngs } from "./endpoints/getOngs";
import { getSchools } from "./endpoints/getSchools";

app.get("/schools", getSchools);
app.get("/ongs", getOngs);