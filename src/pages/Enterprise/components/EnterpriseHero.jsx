import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

const EnterpriseHero = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(10, 1fr)',
          sm: 'repeat(10, 1fr)',
          md: 'repeat(16, 1fr)',
        },
        gridTemplateRows: 'repeat(8, 1fr)',
        height: { xs: '70vh', sm: '30vh', md: '70vh', lg: '70vh' },
        width: '100%',
        mb: { xs: 0, sm: 1, md: 8 },
        mt: { xs: 4, sm: 4, md: 4 },
        // bgcolor: 'white'
      }}
    >
      <Box
        sx={{
          gridColumn: { xs: '2 / 10', sm: '1 / 6', md: '1 / 6', lg: '1 / 9' },
          gridRow: { xs: '5 / 8', sm: '2 / 8', md: '2 / 8', lg: '2 / 8' },
          bgcolor: '#00A651',
          zIndex: 1,
          px: { xs: 2, sm: 2, md: 4, lg: 8 },
          py: { xs: 2, sm: 2, md: 4, lg: 4 },
          pt: { xs: 2, sm: 2, md: 4, lg: 6 },
          color: '#FFF',
          borderRadius: '1rem',
        }}
      >
        <Typography
          component={'h3'}
          textAlign={'left'}
          sx={{
            lineHeight: { xs: '1.1', sm: '1.15', md: '1.4', lg: '1.4' },
            textAlign: { xs: 'center', sm: 'left', md: 'left' },
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem', lg: '3rem' },
            color: '#FFFFFF',
            mb: { xs: 1, sm: 1, md: 2 },
          }}
        >
          At 3Space, we <Br />
          redefine how work <Br />
          is <span style={{ fontStyle: 'italic' }}>accomplished</span>.
        </Typography>
        <Typography
          component={'h3'}
          sx={{
            textAlign: { xs: 'center', sm: 'left', md: 'left' },
            lineHeight: { xs: '1', sm: '1.15', md: '1.4' },
            fontWeight: 300,
            textTransform: 'none',
            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.3rem' },
            width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
            color: '#FFFFFF',
            mt: { xs: 0, sm: 1, md: 1, lg: 3 },
            opacity: 0.9,
          }}
        >
          Welcome customizable workspaces that ignite motivation, remove
          barriers, and nurture talent.
        </Typography>
      </Box>
      <Box
        component={'img'}
        sx={{
          gridColumn: {
            xs: '1 / 11',
            sm: '5 / 11',
            md: '5 / 11',
            lg: '8 / 17',
          },
          gridRow: { xs: '1 / 7', sm: '1 / 9', md: '1 / 9' },
          width: '100%',
          height: '100%',
        }}
        src={'/enterprise.png'}
        alt={'enterprise hero banner'}
      />
    </Box>
  );
};

export default EnterpriseHero;
