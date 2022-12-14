const databaseAddress = 'http://localhost:8000';

const formatProduct = ({
  id,
  title,
  img,
  description,
  price,
  category,
}) => ({
  id,
  title,
  img,
  description,
  price,
  category: category.title,
});

const fetchAllProducts = async () => {
  const response = await fetch(`${databaseAddress}/products/?_expand=category`);
  const items = await response.json();

  return items.map(formatProduct);
};

const fetchProductCategories = async () => {
  const response = await fetch(`${databaseAddress}/categories`);
  const productCategories = await response.json();

  return productCategories;
};

const createProduct = async (productProps) => {
  await fetch(`${databaseAddress}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productProps),
  });
};

const deleteProduct = async (id) => {
  await fetch(`${databaseAddress}/products/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const ProductService = {
  fetchAllProducts,
  fetchProductCategories,
  createProduct,
  deleteProduct,
};

export default ProductService;
