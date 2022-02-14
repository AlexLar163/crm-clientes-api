const Product = require("../schemas/product.schema");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      ok: true,
      message: "Get Product",
      data: products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: "Error get product",
    });
  }
};
const createProduct = async (req, res) => {
  try {
    const { name, stock, price } = req.body;
    const product = new Product({ name, stock, price });
    const productSaved = await product.save();

    return res.status(200).json({
      ok: true,
      message: "Product created",
      data: productSaved,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: "Error creating product",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id, name, stock, price } = req.body;
    const productExists = await Product.exists({ _id: id });
    if (!productExists)
      return res.status(404).json({
        ok: false,
        message: "Product not found",
      });
    const productUpdated = await Product.findOneAndUpdate(
      { _id: id },
      { name, stock, price },
      { new: true }
    );
    return res.status(200).json({
      ok: true,
      message: "Product updated",
      data: productUpdated,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: "Error updating product",
    });
  }
};
const deleteProduct = (req, res) => {
  try {
    const { id } = req.body;
    Product.findOneAndDelete({ _id: id }, (err, productDeleted) => {
      if (err)
        return res.status(500).json({
          ok: false,
          message: "Error deleting product",
        });
      if (!productDeleted)
        return res.status(404).json({
          ok: false,
          message: "Product not found",
        });
      return res.status(200).json({
        ok: true,
        message: "Product deleted",
        data: productDeleted,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      message: "Error deleting product",
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
