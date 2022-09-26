import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from './routes/route.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//app.get("/",(req,res)=>{
  //  res.json("server start");
//})

app.use('/', Routes);

const PORT = process.env.PORT || 8000;


Connection();

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "client/build", "index.html"));
      });
}

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));