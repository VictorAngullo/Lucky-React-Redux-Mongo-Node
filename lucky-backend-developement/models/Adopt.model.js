const mongoose = require("mongoose");

const adoptSchema = new mongoose.Schema(
    {
        form: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: Number, required: true},
            DNI: { type: String, required: true },
            adress: { type: String, required: true },
            pedegree : { type: Boolean, required: true },
            specie: { type: String, required: true },
            another: { type: Boolean, required: true },
            howMany: { type: Number, required: true },
            why: { type: String, required: true },
            necessities: { type: String, required: true },
            cost: { type: Number, required: true },
            diet: { type: String, required: true },
            rent: { type: Boolean, required: true },
            allow: { type: Boolean, required: true },
            move: { type: Boolean, required: true },
            garden: { type: Boolean, required: true },
            people: { type: Boolean, required: true },
            agree: { type: Boolean, required: true },
            visit: { type: Boolean, required: true },
        },
        pets: { type: mongoose.Types.ObjectId, ref: 'Pets' },
    },
    { timestamps: true }
);

const Adopt = mongoose.model("Adopts", adoptSchema);

module.exports = Adopt;
