import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Flex from '../../../components/base/Flex';
import { styled } from '@mui/material/styles';

const Br = styled('br')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

const EnterprisePlan = () => {
  return (
    <Flex
      sx={{
        alignItems: { xs: 'center', sm: 'center', md: 'normal'},
        justifyContent: { xs: 'center', sm: 'center', md: 'flex-start'},
        width: '100%',
        height: { xs: '100%', sm: '100%', md: '100%', lg: '80vh' },
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        gap: { xs: '0rem', sm: '0rem', md: '3rem', lg: '10rem' },
        my: { xs: 2, sm: 10, md: 10, lg: 12 },
      }}
      columnGap={0}
    >
      <Flex
        sx={{
          alignItems: { xs: 'center', sm: 'center', md: 'normal'},
          justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start'},
          width: '100%',
          height: '100%',
          mx: 'auto',
          flex: '50%',
        }}
      >
        <Box
          component={'img'}
          sx={{
            width: '100%',
          }}
          src={'/enterprise_2.png'}
          alt={'enterprise'}
        />
      </Flex>
      <Flex
        sx={{
          alignItems: { xs: 'center', sm: 'normal', md: 'normal' },
          justifyContent: { xs: 'center', sm: 'flex-end', md: 'flex-end', lg: 'flex-end' },
          height: '100%',
          flex: '50%',
          flexDirection: 'column',
          pb: { xs: 0, sm: 4 },
        }}
      >
        <Typography
          component={'h3'}
          sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
            lineHeight: { xs: '1.25', sm: '1.15', md: '1.2' },
            fontWeight: 600,
            textTransform: 'none',
            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '2rem' },
            color: '#FFFFFF',
            mt: { xs: 2, sm: 2, md: 0 },
            mb: { xs: 2, sm: 2, md: 2, lg: 4 },
          }}
        >
          Our Enterprise Plan offers<Br /> tailored <span style={{ fontStyle: 'italic' }}>corporate solutions</span>
        </Typography>
        <Typography
          component={'h3'}
          sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            lineHeight: { xs: '1.4', sm: '1.15', md: '1.4' },
            fontWeight: 300,
            textTransform: 'none',
            fontSize: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.3rem' },
            color: '#FFFFFF',
            mt: { xs: 1, sm: 1, md: 1 },
            opacity: 0.9,
            width: { xs: '100%', sm: '100%', md: '100%', lg: '95%'}
          }}
        >
          By choosing 3Space, you can expect reduced operating costs, increased
          employee happiness, and enhanced flexibility for your team. Our
          comprehensive amenities, including conference rooms, premium coffee,
          and high-speed internet, cater to the needs of today&apos;s workforce.
        </Typography>
      </Flex>
    </Flex>
  );
};

export default EnterprisePlan;
