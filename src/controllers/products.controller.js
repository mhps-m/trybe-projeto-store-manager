const { productsService } = require('../services/index');

const findAll = async (_req, res) => {
  const products = await productsService.findAll();
  res.status(200).json(products);
};

const findById = async (req, res) => {
  const productId = req.params.id;

  const product = await productsService.findById(productId);

  res.status(200).json(product);
};

const insert = async (req, res) => {
  const productName = req.body.name;

  const newProduct = await productsService.insert(productName);

  res.status(201).json(newProduct);
};

module.exports = {
  findAll,
  findById,
  insert,
};