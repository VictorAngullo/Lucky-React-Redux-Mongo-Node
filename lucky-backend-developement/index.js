const express = require('express');
const cors = require('cors');
const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.use(cors({
    origin: ['http://localhost:3000', 'https://react-auth-upgrade.netlify.app'],
    credentials: true,
})); 

const db = require('./db');
db.connect();

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

require('./authentication/passportStrategies');//requirimos las strategias de registro y login para passport
require('./authentication/passportShelterStrategies'); // Requiero las estrategias de usuario-shelter

// Configuro la sesión (Cookie de sesión)
const session = require('express-session');
const MongoStore = require('connect-mongo');

server.use(
    session({
        secret: process.env.SESSION_SECRET || 'asfsadfdsaf3432',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, 
        },
        store: MongoStore.create({ mongoUrl: db.DB_URL }),
    })
);

const passport = require('passport');
server.use(passport.initialize());
server.use(passport.session());

server.use(express.json());
server.use(express.urlencoded({ extended: true })); 

// Rutas Requeridas
const authRoutes = require('./routes/auth.routes');//requerimos las rutas de authenticacion
server.use("/auth", authRoutes);//usamos las rutas de autenticacion 
const petRoutes = require('./routes/pets.routes');
server.use('/pets', petRoutes);
const shelterRoutes = require('./routes/shelter.routes');
server.use('/shelters', shelterRoutes);

// Error Handler
server.use("*", (req, res, next) => {
    const error = new Error ('Route not found');
    error.status = 404;
    return next(error);
});

server.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Unexpected Error";
    return res.status(errorStatus).json(errorMessage);
});

server.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});

