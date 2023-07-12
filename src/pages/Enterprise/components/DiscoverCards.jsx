import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Flex from '../../../components/base/Flex';
import Tick1Svg from '../../../components/svg/Tick1Svg';
import Tick2Svg from '../../../components/svg/Tick2Svg';

const data = [
  {
    id: 1,
    text: 'Leverage our exceptional brand and event platform to amplify your presence.',
  },
  {
    id: 2,
    text: "Create customized workplace experiences that align with your company's mission.",
  },
  {
    id: 3,
    text: 'Establish a strong and extensive network presence through our digital member network.',
  },
  {
    id: 4,
    text: 'Save time with our hassle-free, all-inclusive, and flexible solutions.',
  },
  {
    id: 5,
    text: 'Cut expenses by taking advantage of our cost-effective facilities.',
  },
];

const DiscoverCards = () => {
  return (
    <Box sx={{ mb: { xs: 6, sm: 6, md: 8 } }}>
      <Typography
        component={'h3'}
        sx={{
          textAlign: { xs: 'center' },
          lineHeight: { xs: '1.25', sm: '1.15', md: '1.4' },
          fontWeight: 600,
          textTransform: 'none',
          fontSize: { xs: '1.4rem', sm: '1.4rem', md: '1.6rem', lg: '2rem' },
          color: '#FFFFFF',
          mt: { xs: 6, sm: 2, md: 8, lg: '10rem' },
          mb: { xs: 3, sm: 3, md: 7 },
          mx: { xs: '2rem', sm: '6rem', md: '12rem', lg: '15rem' },
        }}
      >
        Discover the{' '}
        <span style={{ fontStyle: 'italic' }}>power of partnering</span> with us
        & unlock a range of benefits for your organization
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          mx: { xs: 5, sm: 1, md: 0 },
          pb: { xs: 5, sm: 1, md: 0 },
        }}
      >
        {data.map((card) => (
          <Flex
            key={card.id}
            sx={{
              alignItems: 'normal',
              flexDirection: 'column',
              bgcolor: 'rgba(250, 250, 250, 1)',
              px: { xs: 3, sm: 3, md: 3, lg: 3 },
              py: { xs: 5, sm: 5, md: 4, lg: 4 },
              gap: '2rem',
              borderRadius: '1.2rem',
            }}
          >
            <Flex
              sx={{
                justifyContent: 'center',
              }}
            >
              {card.id % 2 !== 0 ? (
                <Tick1Svg width={90} height={90} />
              ) : (
                <Tick2Svg width={90} height={90} />
              )}
            </Flex>
            <Typography
              component={'h3'}
              textAlign={'left'}
              sx={{
                color: '#434343',
                fontSize: { xs: '1rem', sm: '1rem', md: '1.1rem', lg: '1.2rem' },
                fontWeight: 500,
              }}
            >
              {card.text}
            </Typography>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default DiscoverCards;
