const mongoose = require("mongoose");

export const Address = mongoose.model(
  "addresses",
  new mongoose.Schema({
    address: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
