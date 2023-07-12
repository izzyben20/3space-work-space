import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Flex from '../../../components/base/Flex';
import FlexibleSvg from '../../../components/svg/FlexibleSvg';
import DynamicSvg from '../../../components/svg/DynamicSvg';
import RateSvg from '../../../components/svg/RateSvg';

const Features = () => {
  return (
    <Box sx={{ mt: { sm: '4rem', md: '14rem'}, mb: { sm: '5rem', md: '14rem'}}}>
      <Typography
        component={'h3'}
        textAlign={'center'}
        sx={{
          lineHeight: { xs: '1.25', sm: '1.15', md: '1.2' },
          fontWeight: 400,
          fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem', lg: '2.2rem'},
          color: '#FFFFFF',
          mb: 5,
        }}
      >
        Key features & amenities
      </Typography>
      <Flex
        sx={{
          justifyContent: 'center',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row'}
        }}
        columnGap={3}
        rowGap={3}
      >
        <Flex
          sx={{
            justifyContent: 'center',
            bgcolor: '#474747',
            borderRadius: '100%',
            flexDirection: 'column',
            p: { xs: 4, sm: 4, md: 5},
            gap: {md: '1rem', lg: '1.2rem'},
            height: { xs: '12rem', sm: '12rem', md: '15rem', lg: '20rem'},
            width: { xs: '12rem', sm: '12rem', md: '15rem', lg: '20rem'}
          }}
        >
          <FlexibleSvg width={80} height={80} />
          <Typography
            component={'h3'}
            textAlign={'center'}
            sx={{
              color: '#FFFFFF',
              fontSize: {xs: '1rem', sm: '1rem', md: '1rem', lg: '1.2rem'},
              opacity: 0.7,
            }}
          >
            Flexible lease <br /> agreements
          </Typography>
        </Flex>
        <Flex
          sx={{
            justifyContent: 'center',
            bgcolor: '#474747',
            borderRadius: '100%',
            flexDirection: 'column',
            p: { xs: 4, sm: 4, md: 5},
            gap: {md: '2rem', lg: '2.2rem'},
            height: { xs: '12rem', sm: '12rem', md: '15rem', lg: '20rem'},
            width: { xs: '12rem', sm: '12rem', md: '15rem', lg: '20rem'}
          }}
        >
          <DynamicSvg width={80} height={80}/>
          <Typography
            component={'h3'}
            textAlign={'center'}
            sx={{
              color: '#FFFFFF',
              fontSize: {xs: '1rem', sm: '1rem', md: '1rem', lg: '1.2rem'},
              opacity: 0.7,
            }}
          >
            Dynamic &<br /> adaptable spaces
          </Typography>
        </Flex>
        <Flex
          sx={{
            justifyContent: 'center',
            bgcolor: '#474747',
            borderRadius: '100%',
            flexDirection: 'column',
            p: { xs: 4, sm: 4, md: 5},
            gap: {md: '2rem', lg: '2.2rem'},
            height: { xs: '12rem', sm: '12rem', md: '15rem', lg: '20rem'},
            width: { xs: '12rem', sm: '12rem', md: '15rem', lg: '20rem'}
          }}
        >
          <RateSvg width={80} height={80} />
          <Typography
            component={'h3'}
            textAlign={'center'}
            sx={{
              color: '#FFFFFF',
              fontSize: {xs: '1rem', sm: '1rem', md: '1rem', lg: '1.2rem'},
              opacity: 0.7,
            }}
          >
            <br />{' '}
            Affordable rates
          </Typography>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Features;
