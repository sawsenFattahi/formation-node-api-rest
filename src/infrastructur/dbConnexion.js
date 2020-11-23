import mongodb from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const { MongoClient } = mongodb;
dotenv.config();

const host = process.env.DBHOST;
const port = process.env.DBPORT;
const name = process.env.DBNAME;

mongoose.Promise = global.Promise;
function initializeDb() {
  MongoClient.connect(`mongodb://${host}:${port}/${name}`, (err, db)=> {
   
    if(err) throw err;

    //Write databse Insert/Update/Query code here..*
    console.log('connected to: ', name)
               
});
}

function disconnectDb() {
  mongoose.disconnect();
}

export default {
  initialize: initializeDb,
  disconnect: disconnectDb,
};