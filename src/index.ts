import { app } from "./app";
import { getSchools } from "./endpoints/getSchools";

app.get("/schools", getSchools);