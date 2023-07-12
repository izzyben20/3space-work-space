import Box from '@mui/material/Box';

const Flex = ({
  alignItems = 'center',
  justifyContent,
  columnGap = 1,
  styles,
  children,
  sx = {},
  ...props
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems,
        justifyContent,
        columnGap,
        ...sx,
        ...styles,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Flex;
