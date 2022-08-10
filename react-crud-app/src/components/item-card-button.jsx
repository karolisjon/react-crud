import { Button, styled } from '@mui/material';

const ItemCardButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '40px',
  backgroundColor: theme.palette.error.main,
  color: '#fff',
  borderRadius: '0',
  letterSpacing: '0.1em',
  fontSize: '14px',
  transition: '0.3s ease-in-out',

  ':hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

export default ItemCardButton;
