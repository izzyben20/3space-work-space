import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContainedButton from '../../../components/base/ContainedButton';
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
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

const Passive = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(20, 1fr)',
        height: { xs: '100vh', sm: '100vh', md: '65vh', lg: '80vh'},
        width: '100%',
        mb: { xs: 3, sm: 4, md: '12rem' },
        mt: { xs: 4, sm: 4, md: 4 },
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '1.5rem', lg: '2.4rem'},
          color: '#FFFFFF',
          mb: 2,
          bgcolor: '#F47C35',
          borderRadius: '14px',
          textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'left'},
          p: { xs: 2, sm: 2, md: 5, lg: 6},
          px: { xs: 2, sm: 2, md: 5, lg: 10},
          py: { xs: 2, sm: 2, md: 5, lg: 4},
          mt: 4,
          zIndex: 4,
          gridColumn: { xs: '2 / 12', sm: '2 / 12', md: '1 / 6', lg: '1 / 7' },
          gridRow: { xs: '7 / 12', sm: '7 / 11', md: '2 / 13' },
        }}
      >
        Unlock <span style={{ fontStyle: 'italic' }}>Passive Income</span><Br /> with
        Our Partnership<Br /> Program
      </Typography>
      
      <Box
        sx={{
          mt: { xs: 2, sm: 5 },
          alignSelf: 'flex-start',
          gridColumn: { xs: '3 / 11', sm: '3 / 11', md: '1 / 3', lg: '1 / 5' },
          gridRow: { xs: '15 / 18', sm: '14 / 17', md: '20 / 21', lg: '19 / 20' },
          mb: { xs: 0, sm: 0, md: 1 },
        }}
      >
        <ContainedButton
          sx={{
            py: { xs: 1, sm: 1, md: 1.5 },
            px: 7,
            fontWeight: 600,
            borderRadius: '0.8rem',
            fontSize: { sm: '1.2rem', md: '1.6rem', lg: '1.8rem'},
            alignSelf: 'flex-start',
          }}
        >
          Learn more
        </ContainedButton>
      </Box>

      <Typography
        component={'div'}
        sx={{
          textAlign: { xs: 'center', sm: 'center', md: 'left' },
          lineHeight: { xs: '1.25', sm: '1.5' },
          fontWeight: 300,
          fontSize: { xs: '1.1rem', sm: '1.5rem', md: '1.05rem', lg: '1.1rem' },
          color: 'rgba(250, 250, 250, 0.7)',
          pt: { xs: 0, sm: 3, md: 4 },
          maxWidth: { md: '80%', lg: '80%' },
          gridColumn: { xs: '2 / 12', sm: '2 / 12', md: '1 / 5', lg: '1 / 7' },
          gridRow: { xs: '12 / 16', sm: '11 / 14', md: '12 / 18', lg: '13 / 20' },
          // bgcolor: 'red'
        }}
      >
        Join 3Space&apos;s exclusive partnership program to <Br /> generate passive
        income. Earn consistent returns<Br /> through a variety of lucrative deals
        that align with <Br /> your financial goals.
      </Typography>

      <Box
        component={'img'}
        sx={{
          gridColumn: { xs: '1 / 13', sm: '1 / 13', md: '5 / 13', lg: '6 / 13' },
          gridRow: { xs: '1 / 10', sm: '1 / 10', md: '1 / 21' },
          width: '100%',
          height: '100%',
        }}
        src={'/hands.png'}
        alt={'enterprise hero banner'}
      />
    </Box>
  );
};

export default Passive;
