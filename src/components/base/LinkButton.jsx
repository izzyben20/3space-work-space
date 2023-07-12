import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const LinkButton = ({ children, ...props }) => {
  return (
    <Box
      as={Link}
      sx={{
        px: 2,
        py: 1,
        borderRadius: '24px',
        textDecoration: 'none',
        backgroundColor: '#DEEAFD',
        fontSize: '0.8rem',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default LinkButton;
