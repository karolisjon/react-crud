import * as React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

const AddProductForm = () => (
  <Container maxWidth="xl" sx={{ py: 4 }}>
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
      />
      <TextField
        label="Category"
        variant="standard"
        fullWidth
      />
      <TextField
        label="Image URL"
        variant="standard"
        fullWidth
      />
      <TextField
        label="Price"
        variant="standard"
        fullWidth
      />
    </Box>
    <Box sx={{ mb: 2 }}>
      <TextField
        label="Description"
        variant="standard"
        multiline
        fullWidth
      />
    </Box>
    <Button
      variant="contained"
      color="primary"
      sx={{ borderRadius: 0 }}
    >
      Add new product
    </Button>
  </Container>
);

export default AddProductForm;
