import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    get products
// @route   GET /api/products/
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Get a product
// @route  GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  // const product = products.find((x) => x._id === req.params.id);

  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("resource not found");
  }
});

export { getProducts, getProductById };
