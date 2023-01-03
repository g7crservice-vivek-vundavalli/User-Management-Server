import cors from "cors";
import { config } from "dotenv";
import  express ,{ json } from "express";
import diTokens from "./constants/di-tokens";
import { EcommerceControllerContract } from "./controller/ecommerce-controller-contract";
import connectToDb from "./db/db";
import diContainer from "./Ioc/inversify.config";
import { Approutes } from "./routes/approutes";


config()
const PORT = process.env.PORT || 4000
const USER_BASE_URL = process.env.USER_BASE_URL || '/api/userdetails'


const MONGODB_CONSTR = "mongodb+srv://VivekVundavalli:9182533500@cluster0.mqqehcn.mongodb.net/?retryWrites=true&w=majority"
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'mydb'


const app = express()
app.use(cors())
app.use(json())

const UsersControllerObj = diContainer.get<EcommerceControllerContract>(diTokens.USER_CONTROLLER_TOKEN)

const appRoutes = new Approutes(UsersControllerObj)
app.use(appRoutes.userRoutes())

app.listen(
    PORT, ()=>{
    connectToDb(MONGODB_CONSTR, MONGODB_DATABASE)
    console.log(`ecommerce server is running at http://localhost:${PORT}${USER_BASE_URL}`)}  
)