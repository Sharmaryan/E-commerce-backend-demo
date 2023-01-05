const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI).then((data) => console.log(`mongodb connected with server ${data.connection.host}`))
}

module.exports = connectDb; 