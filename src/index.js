const express = require("express");
const createProduct = require("./routes/product.route");
const createCustumer = require("./routes/custumer.route");
const morgan = require("morgan");
const cors = require("cors");

const DBConnection = require("./database/DBConnection");

const PORT = process.env.PORT || 3000;

const startExpressServer = async () => {
  const app = express();
  const baseUrl = "/api/v1";

  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());

  app.use(`${baseUrl}/products`, createProduct);
  app.use(`${baseUrl}/custumer`, createCustumer);

  await DBConnection();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startExpressServer();
