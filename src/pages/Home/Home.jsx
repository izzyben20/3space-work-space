import Box from '@mui/material/Box';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Features from './components/Features';
import Hero from './components/Hero'
import Locations from './components/Locations';
import Partners from './components/Partners';
import Passive from './components/Passive';
import Why3Space from './components/Why3Space';

const Home = () => {
  useDocumentTitle('3-Space | Official Website')

  return (
    <Box sx={{ mx: { xs: 2, sm: 3, md: 0 }}}>
      <Hero />
      <Why3Space />
      <Locations />
      <Features />
      <Passive />
      <Partners />
    </Box>
  )
}

export default Home