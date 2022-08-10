const databaseAddress = 'http://localhost:8000';

const fetchAllProducts = async () => {
  const response = await fetch(`${databaseAddress}/products`);
  const products = await response.json();

  return products;
};

const ProductService = {
  fetchAllProducts,
};

export default ProductService;
