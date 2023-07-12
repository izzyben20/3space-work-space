import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const ContainedButton = ({
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
      variant={'contained'}
      disabled={isLoading}
      sx={{
        borderRadius: '6px',
        minWidth: '80px',
        minHeight: '36px',
        width: fullWidth ? '100%' : 'auto',
        textTransform: { xs: 'none' },
        fontWeight: { xs: 500 },
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
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

export default ContainedButton;
