const databaseAddress = 'http://localhost:8000';

const fetchAllProducts = async () => {
  const response = await fetch(`${databaseAddress}/items`);
  const items = await response.json();

  return items;
};

const ProductService = {
  fetchAllProducts,
};

export default ProductService;
