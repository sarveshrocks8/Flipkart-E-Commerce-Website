import express from 'express';
import dotenv from 'dotenv';
import {Connection} from './database/db.js'
import DefaultData from './default.js'

const app = express();
dotenv.config();

const PORT = 8000;

const DB_USERNAME = process.env.DB_USERNAME;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;

Connection(DB_USERNAME, DB_USER_PASSWORD);

app.listen(PORT, ()=>console.log(`Server is running on port http://localhost:${PORT}`))

DefaultData();