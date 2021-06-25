const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema(
    {
        personalInfo: {
            name: { type: String, required: true },
            location: { type: String, required: true },
            species: { type: String, required: true },
            birthday: { type: String, required:true },
            age: { type: String },
            sex: { type: String, required: true },
            size: { type: String, required: true },
            weight: { type: Number, required: true },
            personality: { type: String },
            history: { type: String },
            image: { type: String }
        },
        health: {
            vaccinated: { type: Boolean, required: true },
            healthy: { type: Boolean, required: true },
            dewormed: { type: Boolean, required: true },
            sterilized: { type: Boolean, required: true },
            identify: { type: Boolean, required: true },
            microchip: { type: Boolean, required: true },
            needToKnow: { type: String },
        },
        adoption: {
            requires: { type: String },
            taxesOfAdoption: { type: Number, required: true },
            shipment: { type: Boolean, required: true },
        },
        adopt: { type: mongoose.Types.ObjectId, ref: 'Adopts' },
        accepted: { type: Boolean }
    },
    {
        timestamp: true,
    }
);

const Pet = mongoose.model('Pets', petSchema);

module.exports = Pet;