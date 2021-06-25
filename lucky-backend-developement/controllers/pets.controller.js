const Pet = require("../models/Pets.model");
const Shelter = require("../models/Shelters.model");
const Adopt = require("../models/Adopt.model");
const User = require("../models/User.model");

// const allPetsGet = async (req, res, next) => {
//     try {
//         const pets = await Pet.find();

//         return res.json(pets);
//     }
//     catch (error) {
//         return next(error);
//     };
// };

const petByIdGet = async (req, res, next) => {
    const { id } = req.params;

    try {
        const pet = await Pet.findById(id);
        return res.json(pet);
    } catch (error) {
        return next(error);
    }
};

const createPetPost = async (req, res, next) => {
    try {
        const {
            name,
            location,
            species,
            birthday,
            age,
            sex,
            size,
            weight,
            personality,
            history,
            vaccinated,
            healthy,
            dewormed,
            sterilized,
            identify,
            microchip,
            needToKnow,
            requires,
            taxesOfAdoption,
            shipment,
        } = req.body;
        const image = req.image._url;
        const shelterId = req.user._id;

        const newPet = new Pet({
            name,
            location,
            species,
            birthday,
            age,
            sex,
            size,
            weight,
            personality,
            history,
            vaccinated,
            healthy,
            dewormed,
            sterilized,
            identify,
            microchip,
            needToKnow,
            requires,
            taxesOfAdoption,
            shipment,
            image,
        });

        await Shelter.findByIdAndUpdate(
            shelterId,
            { $addToSet: { pets: newPet._id } },
            { new: true }
        );

        const createdPet = await newPet.save();

        return res.json(createdPet);
    } catch (error) {
        return next(error);
    }
};

const petDeleteByIdPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const shelterId = req.user._id;

        await Pet.findByIdAndDelete(id);

        await Shelter.findByIdAndUpdate(shelterId, { $pull: { pets: id } });
    } catch (error) {
        return next(error);
    }
};

const petFindByQueryGet = async (req, res, next) => {
    try {
        const location = req.query.location;
        const species = req.query.species;
        console.log(location, species);

        if (!location && !species) {
            const pets = await Pet.find();
            console.log("pets", pets);
            return res.json(pets);
        } else if (!species) {
            const petLocation = await Pet.find({
                "personalInfo.location": location,
            });
            console.log("petLocation", petLocation);
            return res.json(petLocation);
        } else if (!location) {
            const petSpecies = await Pet.find({
                "personalInfo.species": species,
            });
            console.log("petSpecies", petSpecies);
            return res.json(petSpecies);
        } else {
            const PetsFound = await Pet.find({
                "personalInfo.location": location,
                "personalInfo.species": species,
            });
            console.log("PetsFound", PetsFound);
            return res.json(PetsFound);
        }
    } catch (error) {
        return next(error);
    }
};

const adoptPet = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { userId } = req.user._id;

        const {
            name,
            email,
            movil,
            dni,
            address,
            pedegree,
            specie,
            another,
            howMany,
            why,
            necessities,
            cost,
            diet,
            rent,
            allow,
            move,
            garden,
            people,
            agree,
            visit, } = req.body;

        const newAdopt = new Adopt({
            form: {
                name,
                email,
                movil,
                dni,
                address,
                pedegree,
                specie,
                another,
                howMany,
                why,
                necessities,
                cost,
                diet,
                rent,
                allow,
                move,
                garden,
                people,
                agree,
                visit,
            },
            pets: id,
        });
        
        await Pet.findByIdAndUpdate(
            id,
            { $addToSet: { adopt: newAdopt._id, accepted: false } },
            { new: true }   
        )

        await User.findByIdAndUpdate(
            userId,
            { $addtoSet: { pets: id } },
            { new: true }
        )

    } catch (error) {
        return next(error);
    }
};

module.exports = {
    // allPetsGet,
    petByIdGet,
    createPetPost,
    petDeleteByIdPost,
    petFindByQueryGet,
    adoptPet
};
