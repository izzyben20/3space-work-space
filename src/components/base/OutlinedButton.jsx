import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const OutlinedButton = ({
  children,
  isLoading,
  sx,
  fullWidth,
  onClick,
  loadingProps,
  ...props
}) => {
  return (
    <Button
      variant={'outlined'}
      sx={{
        borderRadius: '6px',
        minWidth: '80px',
        color: '#FFFFFF',
        textDecoration: 'none',
        maxHeight: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        textTransform: { xs: 'none' },
        fontWeight: 500,
        fontSize: '1.2rem',
        borderColor: '#808080',
        boxShadow: 'none',
        py: 0,
        '&:hover': {
          boxShadow: 'none',
          borderColor: '#FFFFFF',
          ...(sx?.['&:hover'] || {}),
        },
        ...sx,
      }}
      onClick={isLoading ? undefined : onClick}
      {...props}
    >
      {isLoading ? (
        <CircularProgress size={24} color={'inherit'} {...loadingProps} />
      ) : (
        children
      )}
    </Button>
  );
};

export default OutlinedButton;
