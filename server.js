const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// config

dotenv.config({ path: './config/config.env' })
console.log(process.env.MONGO_URI)
// connecting to db

connectDatabase(); 

app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
})