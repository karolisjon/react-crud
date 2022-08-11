import * as React from 'react';
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';

const categories = [
  {
    id: 1,
    label: 'Category 1',
  },
  {
    id: 2,
    label: 'Category 2',
  },
  {
    id: 3,
    label: 'Category 3',
  },
];

const AddProductForm = () => {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      title,
      category,
      imageURL,
      price,
      description,
    });
  };

  return (
    <Container maxWidth="xl" sx={{ px: 4, pt: 4 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1">New product details</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          mb: 2,
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
            id="standard-select-currency"
            select
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            variant="standard"
            fullWidth
          >
            {categories.map(({ id, label }) => (
              <MenuItem key={id} value={id}>
                {label}
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
