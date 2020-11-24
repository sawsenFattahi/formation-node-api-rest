import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './src/routes';
import db from './src/models';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000; 
routes(app);
app.listen(PORT, () => {
    console.log("hello from: ", PORT);
    console.log('db.url', db.url)
    db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
});

