import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';

const TextButton = ({ children, isLoading, sx, fullWidth, onClick, loadingProps, ...props }) => {
  return (
    <Button
      variant={'text'}
      size={'small'}
      sx={{
        minWidth: '80px',
        minHeight: '36px',
        width: fullWidth ? '100%' : 'auto',
        textTransform: 'uppercase',
        fontWeight: 400,
        fontSize: '12px',
        border: 'none',
        boxShadow: 'none',
        color: '#FFFFFF',
        py: 0,
        '&:hover': {
          boxShadow: 'none',
          color: '#00A651',
          ...(sx?.['&:hover'] || {})
        },
        ...sx
      }}
      onClick={isLoading ? undefined : onClick}
      {...props}>
      {isLoading ? <CircularProgress size={24} color={'inherit'} {...loadingProps} /> : children}
    </Button>
  );
};

export default TextButton;
