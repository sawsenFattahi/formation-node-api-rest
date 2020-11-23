import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './src/routes';
import db from './src/infrastructur'

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
app.listen(port, () => {
    console.log("hello from: ", port);
    db.initialize();
});

