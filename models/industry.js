const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema(
  {
    iname: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

exports.model = mongoose.model("industry", industrySchema);
