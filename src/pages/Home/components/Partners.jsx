import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Partners = () => {
  return (
    <Box>
      <Typography
        component={'h3'}
        textAlign={'center'}
        sx={{
          lineHeight: { xs: '1.25', sm: '1.15', md: '1.2' },
          fontWeight: 400,
          fontSize: { xs: '1.4rem', sm: '1.4rem', md: '1.8rem', lg: '2rem' },
          color: '#FFFFFF',
          mb: 9,
        }}
      >
        Our partners
      </Typography>
      <Box
        component={'img'}
        sx={{
          width: '100%',
          mb: 10,
          display: { xs: 'none', sm: 'none', md: 'block', lg: 'block'}
        }}
        src={'/partners.png'}
        alt={'our partners'}
      />
      <Box
        component={'img'}
        sx={{
          width: '100%',
          mb: 10,
          display: { xs: 'block', sm: 'block', md: 'none', lg: 'none'}
        }}
        src={'/partners_2.png'}
        alt={'our partners'}
      />
    </Box>
  );
};

export default Partners;
