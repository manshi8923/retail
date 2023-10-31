import express from "express";
import colors from "colors";
import dotenv from "dotenv";


//rest object
const app=express();

//config dotenv
dotenv.config();


//middlewares
app.use(express.json());

//rest api
app.get("/",(req,res)=>{
    res.send("<h1>Welcome</h1>");
});

const PORT=process.env.PORT;
//run listen
app.listen(PORT,()=>{
   console.log(`Server is listening to the port ${PORT}`.bgCyan.white);
})

