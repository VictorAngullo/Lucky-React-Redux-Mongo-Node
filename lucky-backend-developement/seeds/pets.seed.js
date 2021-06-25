const mongoose = require('mongoose');
const Pet = require('../models/Pets.model');
const { DB_URL, DB_CONFIG } = require('../db');

const petsArray = [
    {
        personalInfo: {
            name: "Misifuz",
            location: "Madrid",
            species: "Cat",
            birthday: "03/11/2020",
            sex: "Male",
            size: "Big",
            weight: 2,
            personality: "Juguetón",
            history: "Una chica lo encontró, pero no puede hacerse cargo de él",
            image: "https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg",
        },
        health: {
            vaccinated: true,
            healthy: true,
            dewormed: true, 
            sterilized: true, 
            identify: true, 
            microchip: false, 
            needToKnow: "No le gusta el agua!",
        },
        adoption: {
            requires: "Visitas durante el primer año", 
            taxesOfAdoption: "120", 
            shipment: true,
        }
    },
    {
        personalInfo: {
            name: "Mila",
            location: "Valencia",
            species: "Rabbit",
            birthday: "03/11/2019",
            sex: "Female",
            size: "Small",
            weight: 0.5,
            personality: "Revoltosa",
            history: "Todos sus hermanos ya encontraron familia, ¿a qué esperas para darle una mejor vida?",
            image: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/593938475bafe8ad873c986b/conejo-orejas-caidas-jardin_1.jpg"
        },
        health: {
            vaccinated: true,
            healthy: true,
            dewormed: true, 
            sterilized: true, 
            identify: true, 
            microchip: true, 
            needToKnow: "No le gusta el agua!",
        },
        adoption: {
            requires: "Visitas durante el primer año", 
            taxesOfAdoption: "50", 
            shipment: true,
        }
    },
    {
        personalInfo: {
            name: "Pickachu",
            location: "Madrid",
            species: "Cat",
            birthday: "05/03/2018",
            sex: "Male",
            size: "Normal",
            weight: 4,
            personality: "Tranquilo",
            history: "Viene de una familia muy cariñosa, debido a una alergia de uno de los convivientes, no pueden hacerse cargo de él",
            image: "https://www.enelradar.com/__export/1598641122358/sites/elimparcial/img/2020/08/28/118254456_108233251001906_6905231726242264790_o.jpg_673822677.jpg"
        },
        health: {
            vaccinated: true,
            healthy: true,
            dewormed: true, 
            sterilized: false, 
            identify: true, 
            microchip: false, 
            needToKnow: "Maulla por las noches y le cuesta dormir."
        },
        adoption: {
            requires: "Arena para gatos especial",
            taxesOfAdoption: "70", 
            shipment: false,
        }
    },
    {
        personalInfo: {
            name: "Doge",
            location: "Valencia",
            species: "Dog",
            birthday: "01/06/2017",
            sex: "Male",
            size: "Small",
            weight: 6,
            personality: "Cariñoso",
            image: "https://i.pinimg.com/originals/49/8b/8f/498b8f01f68650651ed2986399376617.jpg"
        },
        health: {
            vaccinated: true,
            healthy: true,
            dewormed: true, 
            sterilized: false, 
            identify: true, 
            microchip: true, 
            needToKnow: "No es una cripto!",
        },
        adoption: {
            requires: "Casa que disponga de jardín",
            taxesOfAdoption: "85", 
            shipment: false,
        }        
    },
    {
        personalInfo: {
            name: "Piticli",
            location: "Madrid",
            species: "Bird",
            birthday: "15/30/2020",
            sex: "Female",
            size: "Big",
            weight: 0.2,
            personality: "Simpático",
            history: "Se escapó de su antigua vivienda y no hemos conseguido encontrar al dueño",
            image: "https://demascotas.info/wp-content/uploads/2019/01/Agapornis_Personata_Cobalt.jpg"   
        },
        health: {
            vaccinated: true,
            healthy: true,
            dewormed: true, 
            sterilized: true, 
            identify: true, 
            microchip: false, 
            needToKnow: "Le gusta cantar y jugar al escondite",
        },
        adoption: {
            requires: "Jaula de gran tamaño",
            taxesOfAdoption: "40", 
            shipment: true,    
        },
    },
]

mongoose.connect( DB_URL, DB_CONFIG )

    .then(async () => {

        console.log('Ejecutando seed Pets.js');

        const allPets = await Pet.find();

        if (allPets) {
            await Pet.collection.drop()
            console.log('Colección de Pets borrada con éxito');
        };
    })

    .catch(error => {

        console.log('error buscando en la BD:', error);
    })

    .then(async () => {

        await Pet.insertMany(petsArray);
        console.log('Añadidas nuevas Pets a BD');
    })

    .catch((error) => {

        console.log('Error insertando Pets', error);
    })

    .finally(() => {

        mongoose.disconnect()
    });
