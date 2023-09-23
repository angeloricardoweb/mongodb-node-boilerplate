const mongoose = require("mongoose");

export const User = mongoose.model(
  "users",
  new mongoose.Schema({
    name: String,
  })
);
