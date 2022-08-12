import * as React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import ProductService from 'services/product-service';
import AddIcon from '@mui/icons-material/Add';

const ProductFormDrawer = ({ onSubmit }) => {
  const [formDrawerOpen, setFormDrawerOpen] = React.useState(false);
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

    setTitle('');
    setCategory('');
    setImageURL('');
    setPrice('');
    setDescription('');
    setCategoriesOption([]);

    setFormDrawerOpen(false);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedProductCategories = await ProductService.fetchProductCategories();
      setCategoriesOption(fetchedProductCategories);
    })();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', my: 3,
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 0 }}
            onClick={() => setFormDrawerOpen(!formDrawerOpen)}
          >
            <AddIcon fontSize="small" />
            Create new product
          </Button>
        </Box>
        <Divider />
      </Container>
      <Drawer
        anchor="left"
        variant={formDrawerOpen ? 'permanent' : 'temporary'}
        onClose={() => setFormDrawerOpen(false)}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '500px',
            p: 4,
          }}
        >
          <Typography variant="h4" component="h1">New product details</Typography>
          <Divider />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
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
              fullWidth
              sx={{ borderRadius: 0 }}
            >
              <AddIcon fontSize="small" />
              Create
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ProductFormDrawer;
