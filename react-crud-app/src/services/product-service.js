const databaseAddress = 'http://localhost:8000';

// const formatProduct = ({
//   id,
//   title,
//   img,
//   description,
//   price,
//   category,
// }) => ({
//   id,
//   title,
//   img,
//   description,
//   price,
//   category: category.title,
// });

const fetchAllProducts = async () => {
  const response = await fetch(`${databaseAddress}/products/?_expand=category`);
  const items = await response.json();

  // return items.map(formatProduct);
  return items;
};

const ProductService = {
  fetchAllProducts,
};

export default ProductService;
