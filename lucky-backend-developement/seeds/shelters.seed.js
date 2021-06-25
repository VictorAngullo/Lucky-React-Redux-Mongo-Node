const mongoose = require('mongoose');
const Shelter = require('../models/Shelters.model');
const Pet = require('../models/Pets.model');
const { DB_URL, DB_CONFIG } = require('../db');

const sheltersArray = [
    {
        name: "Aprenda a quererlos",
        email: "aprenda@aprenda.es",
        password: "1234Asd",
        location: "Madrid",
        pets: [],
        image: ""
    },
    {
        name: "Mejores compañeros",
        email: "comp@comp.es",
        password: "1234Asd",
        location: "Valencia",
        pets: [],
        image: ""
    }
]

mongoose.connect( DB_URL, DB_CONFIG )

    .then(async () => {

        console.log('Ejecutando seed Shelters.js');

        const allShelters = await Shelter.find();

        if (allShelters) {
            await Shelter.collection.drop();
            console.log('Colección de Shelters borrada con éxito');
        };
    })

    .catch(error => {

        console.log('error buscando en la BD:', error);
    })

    .then(async () => {

        const allPets = await Pet.find();
        sheltersArray[0].pets = [allPets[0]._id, allPets[2]._id, allPets[4]._id];
        sheltersArray[1].pets = [allPets[1]._id, allPets[3]._id];

        await Shelter.insertMany(sheltersArray);
        console.log('Añadidas nuevas Shelters a BD');
    })

    .catch((error) => {

        console.log('Error insertando Shelters', error);
    })

    .finally(() => {

        mongoose.disconnect()
    });
