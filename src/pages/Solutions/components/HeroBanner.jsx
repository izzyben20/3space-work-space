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

const Brr = styled('br')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

const HeroBanner = () => {
  return (
    <Flex
      sx={{
        alignItems: 'normal',
        justifyContent: 'flex-start',
        width: '100%',
        height: { xs: '80vh', sm: '80vh', md: '60vh', lg: '65vh' },
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row'
        },
        gap: { xs: '2rem', sm: '2rem', md: '0rem' },
        bgcolor: '#353535',
        mt: { xs: 2, sm: 2, md: 3, lg: 6 },
        mb: { xs: 2, sm: 4, md: 7, lg: 10 },
        pl: { xs: 0, sm: 4, md: 5,  lg: 8 },
        pr: { xs: 0, sm: 4, md: 5,  lg: 6 },
        borderRadius: '1rem',
      }}
    >
      <Flex
        sx={{
          alignItems: { xs: 'center', sm: 'center', md: 'normal' },
          justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
          width: '100%',
          height: '100%',
          flex: '47%',
          mt: { xs: 2, sm: 4, md: 7 },
          flexDirection: 'column',
        }}
      >
        <Typography
          component={'h3'}
          textAlign={'left'}
          sx={{
            lineHeight: { xs: '1.25', sm: '1.15', md: '1.4' },
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            fontWeight: 600,
            fontSize: { xs: '1.8rem', sm: '2.3rem', md: '2.4rem', lg: '3rem'},
            color: '#FFFFFF',
            mb: 2,
            mx: { xs: 4, sm: 0, md: 0 }
          }}
        >
          Get the <span style={{ fontStyle: 'italic' }}>privacy</span> & <Brr />
          <span style={{ fontStyle: 'italic' }}>personalisation</span> you{' '}
          <Brr />
          expect from your own <Brr /> space
        </Typography>
        <Typography
          component={'h3'}
          sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            lineHeight: { xs: '1.25', sm: '1.15', md: '1.4' },
            fontWeight: 300,
            textTransform: 'none',
            fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.4rem', lg: '1.3rem' },
            color: '#FFFFFF',
            mt: { xs: 0, sm: 1, md: 1, lg: 2 },
            opacity: 0.8,
            mx: { xs: 3, sm: 3, md: 0 }
          }}
        >
          With the flexibility you deserve. Find a solution for all <Br /> the
          ways you and your team work.
        </Typography>
      </Flex>
      <Flex
        sx={{
          alignItems: 'normal',
          width: '100%',
          height: '100%',
          flex: '53%',
          position: 'relative',
        }}
      >
        <Box
          component={'img'}
          sx={{
            width: '103%',
            // objectFit: 'contain',
            // height: '105%',
            position: 'absolute',
            top: 0,
            bottom: { xs: '-1.9rem', sm: '-2rem', md: '-3rem', lg: '-10.3rem' },
          }}
          src={'/solutions_hero.png'}
          alt={'solutions hero banner'}
        />
      </Flex>
    </Flex>
  );
};

export default HeroBanner;
