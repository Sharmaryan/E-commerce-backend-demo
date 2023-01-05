const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

// config

dotenv.config({ path: './config/config.env' })
console.log(process.env.MONGO_URI)
// connecting to db

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
});

process.on('unhandledRejection', (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    })
})