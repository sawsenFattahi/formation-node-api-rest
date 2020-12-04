import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './user';

dotenv.config();
const HOST = process.env.DBHOST;
const PORT = process.env.DBPORT;
const NAME = process.env.DBNAME;

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = `mongodb://${HOST}:${PORT}/${NAME}`;
db.User = User;

export default db;
