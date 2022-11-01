const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isStatus: { type: Number, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
