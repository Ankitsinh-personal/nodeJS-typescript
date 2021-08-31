import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express ,{Request , Response} from "express";
import { router } from "./routes/loginRoutes";

const app = express();

// app.get('/',(req:Request, res:Response)=>{
//     res.send(`
//         <div>
//             <h1>Hiiii</h1>
//         </div>
//     `);
// })

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieSession({keys: ['dhsjhfhdskd']}))
app.use(router)

app.listen(3000, ()=>{
    console.log('port listen at port 3000');
})