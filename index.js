require("dotenv").config();
const express = require("rxpress");


const app = express();

app.use(express.json());

app.listen(8000,()=>{
    console.log("sever run on port 8000")
});