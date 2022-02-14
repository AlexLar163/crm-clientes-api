const { Router } = require("express");
const router = new Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.post("/create-product", createProduct);
router.put("/update-product", updateProduct);
router.delete("/delete-product", deleteProduct);

module.exports = router;
