import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import ProductService from 'services/product-service';
import ItemCard from './components/item-card';

const App = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedProducts = await ProductService.fetchAllProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  const productDeletion = async (id) => {
    const productDeleted = await ProductService.deleteProduct(id);
    if (productDeleted) {
      const fetchedProducts = await ProductService.fetchAllProducts();
      setProducts(fetchedProducts);
    }
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ py: 4, px: 3 }}>
          {products.map(({
            id,
            title,
            img,
            description,
            price,
          }) => (
            <Grid
              id={id}
              key={id}
              item
              alignItems="stretch"
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              sx={{ mb: 1 }}
            >
              <ItemCard
                id={id}
                title={title}
                img={img}
                description={description}
                price={price}
                onProductDeletion={() => productDeletion(id)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
