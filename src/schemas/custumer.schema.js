const { Schema, model } = require("mongoose");
const CustumerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  enterprise: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
});

module.exports = model("Client", CustumerSchema, "Clients");
