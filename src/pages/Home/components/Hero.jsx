// import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Flex from '../../../components/base/Flex';
import ContainedButton from '../../../components/base/ContainedButton';

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

const Hero = () => {
  return (
    <Flex
      sx={{
        alignItems: 'normal',
        justifyContent: 'flex-start',
        width: '100%',
        height: { xs: '80vh', sm: '90vh', md: '90vh'}, 
        flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' },
        pt: { xs: 3, sm: 5 },
        mt: { xs: 3, sm: 3, md: 3 },
      }}
    >
      <Flex
        sx={{
          alignItems: 'normal',
          justifyContent: { xs: 'center', sm: 'flex-start' },
          flex: { xs: '50%', sm: '50%', md: '50', lg: '48%' },
          height: '100%',
          flexDirection: 'column',
          gap: { xs: '1.1rem', sm: '1.2rem', md: '1.2rem', lg: '1.1rem' },
        }}
      >
        <Typography
          component="div"
          sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            lineHeight: { xs: '1', sm: '1.15', md: '1.2' },
            fontWeight: 500,
            fontStyle: 'italic',
            fontSize: { xs: '1.4rem', sm: '1.4rem', md: '1.4rem', lg: '1.8rem'},
            color: '#FFFFFF',
            pt: { xs: 0, sm: 2 },
            mt: { xs: 2, sm: 1, md: 0 }
          }}
        >
          Join the future of work
        </Typography>
        <Typography
          component={'h1'}
          sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            lineHeight: { xs: '1.3', sm: '1.15', md: '1.1' },
            fontWeight: 500,
            fontFamily: 'monument-extended',
            fontSize: {xs: '2.2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem'},
            textTransform: 'uppercase',
            color: '#FFFFFF',
            pt: { xs: 0, sm: 2 },
          }}
        >
          Revolutionize your productivity
        </Typography>
        <Typography
          component="div"
          sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            lineHeight: { xs: '1.25', sm: '1.5' },
            fontWeight: 300,
            fontSize: {xs: '1.1rem', sm: '1.1rem', md: '1.1rem', lg: '1.15rem'},
            color: 'rgba(250, 250, 250, 0.8)',
            pt: { xs: 2, sm: 2 },
            mx: { xs: 4, sm: 4, md: 0}
          }}
        >
          Discover inspiring and innovative workspaces for individuals, <Br />{' '}
          startups, and businesses.
        </Typography>
        <ContainedButton
          sx={{
            py: { xs: 1, sm: 1 },
            mt: 2,
            px: 4,
            fontWeight: 500,
            fontSize: '1.3rem',
            alignSelf: { xs: 'center', sm: 'center', md: 'flex-start' }
          }}
        >
          Discover
        </ContainedButton>
      </Flex>
      <Flex
        sx={{
          alignItems: 'normal',
          justifyContent: 'flex-start',
          flex: { xs: '50%', sm: '50%', md: '50', lg: '52%' },
          height: { xs: '40%', sm: '50%', md: '70%' },
        }}
      >
        <Box
          component={'img'}
          sx={{
            width: '100%',
            height: '100%',
          }}
          src={'/heroImage.png'}
          alt={'hero banner'}
          lazy
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
