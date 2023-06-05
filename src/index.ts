import express,{ Application } from "express";
import personRouter from "./modules/person/adapters/person.controller";
import enterpriceRouter  from "./modules/enterprise/adapters/enterprise.controller";
const app:Application = express();
app.use(express.json())

app.use('/person', personRouter)
app.use('/enterprice', enterpriceRouter)

app.listen(3001)
console.log('ya jaloooo', 3001)