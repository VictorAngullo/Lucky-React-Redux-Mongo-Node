const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true},
        password: { type: String, required: true },
        location: { type: String, required: true },
        pets: [{ type: mongoose.Types.ObjectId, ref: 'Pets' }],
        image: { type: String } 
            // Image, default: "https://image.flaticon.com/icons/png/512/16/16363.png" }
    },
    { timestamps: true }
);

const Shelter = mongoose.model('Shelters', shelterSchema);

module.exports = Shelter;