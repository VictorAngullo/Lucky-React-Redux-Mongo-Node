const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/final-project';
const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connect = () => {
    mongoose.connect(DB_URL, DB_CONFIG)
        .then((res) => {
            const { name, host } = res.connection;
            console.log(`Connected successfully to ${name} - ${host}`);
        })
        //En caso de error durante la conexion, mostrarlo por consola
        .catch((error) => {
            console.log("Error connecting to DB: ", error);
          });
      
};

module.exports = { DB_URL, DB_CONFIG, connect };