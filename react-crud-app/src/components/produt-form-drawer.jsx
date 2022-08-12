import {
  Box,
  Button,
  Divider,
  Drawer,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import * as React from 'react';
import ProductService from 'services/product-service';

const ProductFormDrawer = ({ onSubmit }) => {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [categoriesOption, setCategoriesOption] = React.useState([]);
  const formDrawerWidth = '600px';

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title,
      categoryId: category,
      img: imageURL,
      price: Number(price),
      description,
    });
  };

  React.useEffect(() => {
    (async () => {
      const fetchedProductCategories = await ProductService.fetchProductCategories();
      setCategoriesOption(fetchedProductCategories);
    })();
  }, []);

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      width={formDrawerWidth}
      open="true"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: 2 }}
      >
        <Typography variant="h4" component="h1">New product details</Typography>
        <Divider />
        <Box>
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            label="Image URL"
            variant="standard"
            fullWidth
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
          <TextField
            select
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            variant="standard"
            fullWidth
          >
            {categoriesOption.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Description"
              variant="standard"
              multiline
              fullWidth
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Box>
          <TextField
            label="Price"
            variant="standard"
            fullWidth
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 0 }}
          >
            Add new product
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProductFormDrawer;