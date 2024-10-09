const mongoose = require('mongoose');

const connectMongoDb=(url)=>{
    return mongoose.connect(url).then(()=>console.log('Database successfully connected 😍')).catch((e)=>console.log('MongoDb Not connected🤤'));
}

module.exports = {
    connectMongoDb
}