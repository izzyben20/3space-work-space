import useDocumentTitle from '../../hooks/useDocumentTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOverview from './components/LocationOverview';
import { styled } from '@mui/material/styles';

const Br = styled('br')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

const Locations = () => {
  useDocumentTitle('3Space - Locations');

  return (
    <Box>
      <Box
        sx={{
          background: { xs: 'url(/location_mobile.png) no-repeat center', sm: 'url(/location_background.png) no-repeat center'},
          height: { xs: '60vh', sm: '60vh', md: '80vh' },
          width: '100%',
          position: 'absolute',
          left: 0,
          right: 0,
          top: { xs: 30, sm: 30, md: 40, lg: 60 },
          pt: '5rem',
          zIndex: 1
        }}
      >
        <Typography
          component={'h3'}
          sx={{
            textAlign: { xs: 'center', sm: 'center' },
            lineHeight: { xs: '1.25', sm: '1.15', md: '1.8', lg: '1.5' },
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: { xs: '1.8rem', sm: '1.5rem', md: '2rem', lg: '3.3rem' },
            color: '#FFFFFF',
          }}
        >
          Our Locations
        </Typography>
        <Typography
          component="div"
          sx={{
            textAlign: 'center',
            fontWeight: 300,
            display: 'flex',
            justifyContent: 'center',
            fontSize:{ xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.1rem' },
            color: 'rgba(250, 250, 250, 0.6)',
            mx: { xs: 4, sm: 2, md: 0 }
          }}
        >
          We are located strategically around the cities of Lagos <Br /> for easy of
          accessibility of our users
        </Typography>
      </Box>
      <LocationOverview />
    </Box>
  );
};

export default Locations;
