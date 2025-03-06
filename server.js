const express=require("express");
const app=express();
const cors=require("cors");
//const database=require("./database/dataconnection");
const router=require("./route");
app.use(express.json());

const corOption={
    origin:"http://localhost:5173",
    method:"POST,GET,PUT,DELETE,PATCH,HEAD",
    Credential:true,
}


app.use(cors(corOption));
app.use("/router",router);


// database().then(()=>{
//     app.listen(500,()=>{
//         console.log("server is star after database connectinn");
//     })
// })


app.listen(500,()=>{
    console.log("server is  on ")
})


