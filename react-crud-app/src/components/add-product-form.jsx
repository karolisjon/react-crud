import * as React from 'react';
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import ProductService from 'services/product-service';

const AddProductForm = ({ onSubmit }) => {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [categoriesOption, setCategoriesOption] = React.useState([]);

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
    <Container maxWidth="md" sx={{ px: 4, pt: 4 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1">New product details</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: 2,
          gap: 2,
        }}
        >
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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

          <TextField
            label="Image URL"
            variant="standard"
            fullWidth
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
          <TextField
            label="Price"
            variant="standard"
            fullWidth
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Box>
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
    </Container>
  );
};

export default AddProductForm;
