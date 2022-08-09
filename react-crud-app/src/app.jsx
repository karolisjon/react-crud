import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import ItemCard from './components/item-card';

const App = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/items')
      .then((res) => res.json())
      .then((fetchedItems) => setItems(fetchedItems));
  }, []);

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ py: 4, px: 3 }}>
          {items.map((item) => (
            <Grid
              id={item.id}
              key={item.id}
              item
              alignItems="stretch"
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              sx={{ mb: 1 }}
            >
              <ItemCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
