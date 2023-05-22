import express,{ Application } from "express";
import personRouter from "./modules/adapters/person.controller";
const app:Application = express();
app.use(express.json())

app.use('/person', personRouter)

app.listen(3001)
console.log('ya jaloooo', 3001)