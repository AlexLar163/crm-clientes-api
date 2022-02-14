const mongoose = require("mongoose");

// const uri = "mongodb://localhost:27017/crm-clientes";
const uri = "mongodb+srv://alex163:Gg3YEV7trw4jwBx@curso-mongo-db.bmdid.mongodb.net/test/crm-clientes";
const DBConnection = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

module.exports = DBConnection;
