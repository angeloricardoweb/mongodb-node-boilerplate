const mongoose = require("mongoose");

export const User = mongoose.model(
  "users",
  new mongoose.Schema({
    name: String,
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "addresses",
    },
  })
);
