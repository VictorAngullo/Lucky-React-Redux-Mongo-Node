const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      enum: ["admin", "basic"],
      type: String,
      default: "basic",
      required: true,
    },
    image: { type: String },
    pets: [{ type: mongoose.Types.ObjectId, ref: 'Pets' }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
