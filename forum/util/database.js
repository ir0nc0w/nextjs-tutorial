import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://admin:vSaZeeO8eL7JxzQQ@cluster0.effdzld.mongodb.net/forum?retryWrites=true&w=majority'
const options = { useNewUrlParser:true }
let connectDB

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}

export { connectDB }