import useDocumentTitle from '../../hooks/useDocumentTitle';
import Cards from './components/Cards';
import HeroBanner from './components/HeroBanner';
import Box from '@mui/material/Box';

const Solutions = () => {
  useDocumentTitle('3Space - Solutions');

  return (
    <Box sx={{ mx: { xs: 2, sm: 2, md: 0 }}}>
      <HeroBanner />
      <Cards />
    </Box>
  );
};

export default Solutions;
