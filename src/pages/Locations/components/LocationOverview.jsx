import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Flex from '../../../components/base/Flex';
import ContainedButton from '../../../components/base/ContainedButton';
import LocationSvg from '../../../components/svg/LocationSvg';
import { NavLink } from 'react-router-dom';

const data = [
  {
    location: 'yaba',
    text: 'Click view details to explore more details about this modern facility, flexible membership options, and thriving community.',
    imgRight: true,
    img: '/yaba_2.png',
    path: '/locations/yaba',
  },
  {
    location: 'victoria<br /> island',
    text: 'Click view details to explore more details about this modern facility, flexible membership options, and thriving community.',
    imgRight: false,
    img: '/victoria_island.png',
    path: '/locations/victoria-island',
  },
  {
    location: 'victoria<br/> island',
    text: 'Click view details to explore more details about this modern facility, flexible membership options, and thriving community.',
    imgRight: true,
    img: '/victoria_island2.png',
    path: '/locations/victoria-island',
  },
];

const LocationOverview = () => {
  return (
    <Box
      sx={{
        bgcolor: '#353535',
        p: { xs: 3, sm: 4, md: 8 },
        py: { xs: 6, sm: 6, md: 12 },
        mb: { xs: 6, sm: 8, md: 12 },
        mt: { xs: '20rem', sm: '25rem', md: '30rem' },
        mx: { xs: 2, sm: 2, md: 0 },
        backgroundImage: 'none',
        zIndex: 10,
        borderRadius: '1rem'
      }}
    >
      {data.map((item, index) => (
        <Box key={index}>
          <Flex
            sx={{
              alignItems: 'normal',
              justifyContent: 'flex-start',
              width: '100%',
              height: { xs: '100%', sm: '100%', md: '70vh', lg: '85vh' },
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: item.imgRight ? 'row' : 'row-reverse',
              },
              gap: { xs: '1rem', sm: '2rem', md: '10rem' },
            }}
          >
            <Flex
              sx={{
                alignItems: 'normal',
                width: '100%',
                height: '100%',
                flex: '50%',
              }}
            >
              <Box
                component={'img'}
                sx={{
                  width: '100%',
                }}
                src={item.img}
                alt={'yaba_photo'}
              />
            </Flex>
            <Flex
              sx={{
                alignItems: { xs: 'center', sm: 'center', md: 'normal' },
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start',
                },
                width: { xs: '100%', sm: '100%', md: '80%' },
                height: '100%',
                flex: '50%',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ mt: { xs: 4, sm: 4, md: 10 } }}>
                <LocationSvg width={120} height={120} />
              </Box>
              <Typography
                component={'h3'}
                sx={{
                  textAlign: { xs: 'center', sm: 'left' },
                  lineHeight: { xs: '1.25', sm: '1.15', md: '1.2' },
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: { xs: '1.3rem', sm: '1.3rem', md: '1.6rem', lg: '2.2rem' },
                  color: '#FFFFFF',
                  my: { xs: 2, sm: 2, md: 2 },
                }}
                dangerouslySetInnerHTML={{ __html: item.location}}
              >
              </Typography>
              <Typography
                component={'h3'}
                sx={{
                  textAlign: { xs: 'center', sm: 'center', md: 'left' },
                  lineHeight: { xs: '1.25', sm: '1.15', md: '1.6' },
                  fontWeight: 300,
                  textTransform: 'none',
                  fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.25rem' },
                  color: 'rgba(250, 250, 250, 1)',
                  mt: { xs: 1, sm: 1, md: 1 },
                }}
              >
                {item.text}
              </Typography>
              <ContainedButton
                component={NavLink}
                to={item.path}
                sx={{
                  mt: { xs: 2, sm: 4, md: 4, lg: 6 },
                  py: { xs: 1, sm: 1, md: 1, lg: 1.5 },
                  px: { xs: 4, sm: 4, md: 4, lg: 6 },
                  fontWeight: 500,
                  fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.8rem' },
                  alignSelf: { xs: 'center', sm: 'center', md: 'flex-start' },
                  borderRadius: { xs: 2, sm: 2, md: 3, lg: 3 },
                }}
              >
                View details
              </ContainedButton>
            </Flex>
          </Flex>
          {data.indexOf(item) !== data.length - 1 && (
            <Divider
              light
              sx={{ bgcolor: '#808080', my: 5, borderBottomWidth: '0.5px' }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default LocationOverview;
