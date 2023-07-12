import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Flex from '../../../components/base/Flex';
import ContainedButton from '../../../components/base/ContainedButton';
import LocationSvg from '../../../components/svg/LocationSvg';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import { styled } from '@mui/material/styles';
import { HashLink } from 'react-router-hash-link';

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

const Yaba = () => {
  useDocumentTitle('3Space | Location - Yaba');
  return (
    <Box
      sx={{
        mx: { xs: 2, sm: 2, md: 0 },
        mb: { xs: '7rem', sm: '7rem', md: '12rem' },
        mt: { xs: 4, sm: 4, md: 4, lg: 12 },
      }}
    >
      <Flex
        sx={{
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
          mt: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'center', md: 'normal' },
          }}
        >
          <Flex
            sx={{
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              gap: { xs: '1rem', sm: '2rem', md: '1.5rem' },
            }}
          >
            <LocationSvg width={80} height={80} />
            <Typography
              component={'h3'}
              sx={{
                textAlign: { xs: 'center', sm: 'center' },
                lineHeight: { xs: '1.25', sm: '1.15', md: '1' },
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: {
                  xs: '1.5rem',
                  sm: '1.5rem',
                  md: '1.6rem',
                  lg: '3rem',
                },
                color: '#FFFFFF',
                mb: { xs: 2, sm: 2, md: 0 },
              }}
            >
              Yaba
            </Typography>
          </Flex>
          <Typography
            component={'h3'}
            sx={{
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              lineHeight: { xs: '1.25', sm: '1.15', md: '1.4' },
              fontWeight: 300,
              textTransform: 'none',
              display: { xs: 'none', sm: 'none', md: 'block' },
              fontSize: '1.05rem',
              color: '#FFFFFF',
              mt: { xs: 1, sm: 1, md: 1, lg: 5 },
              mb: { xs: 4, sm: 4, md: 0 },
              opacity: 0.7,
              pr: { xs: 0, sm: 2, md: 6, lg: 12 },
            }}
          >
            Zulikat Wuraola House, 362 Herbert Macaulay Way,
            <Br /> Yaba, Lagos. |{' '}
            <span style={{ fontStyle: 'italic' }}>+1-800-456-478-23</span>
          </Typography>
        </Flex>
        <Flex>
          <Box
            component={'img'}
            sx={{
              width: '100%',
            }}
            src={'/map.png'}
            alt={'Yaba'}
          />
        </Flex>
        <Typography
          component={'h3'}
          sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            lineHeight: { xs: '1.25', sm: '1.15', md: '1.4' },
            fontWeight: 300,
            textTransform: 'none',
            display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
            fontSize: '1.05rem',
            color: '#FFFFFF',
            my: { xs: 2, sm: 2, md: 0 },
            opacity: 0.7,
            pr: { xs: 0, sm: 2, md: 6, lg: 12 },
          }}
        >
          Zulikat Wuraola House, 362 Herbert Macaulay Way,
          <Br /> Yaba, Lagos. |{' '}
          <span style={{ fontStyle: 'italic' }}>+1-800-456-478-23</span>
        </Typography>
      </Flex>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gridTemplateRows: {
            xs: 'repeat(2, 8rem)',
            sm: 'repeat(2, 10rem)',
            md: 'repeat(8, 18rem)',
          },
          gap: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.1rem' },
          width: '100%',
          mb: { xs: 3, sm: 4, md: 4 },
          mt: { xs: 4, sm: 4, md: 7, lg: '9rem' },
        }}
      >
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '1 / 2', sm: '1 / 2', md: '1 / 2' },
            gridRow: { xs: '3 / 5', sm: '3 / 5', md: '1 / 3' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_1.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '1 / 3', sm: '1 / 3', md: '2 / 4' },
            gridRow: { xs: '1 / 3', sm: '1 / 3', md: '1 / 3' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_2.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '2 / 3', sm: '2 / 3', md: '1 / 2' },
            gridRow: { xs: '3 / 5', sm: '3 / 5', md: '3 / 5' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_3.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '1 / 3', sm: '1 / 3', md: '2 / 3' },
            gridRow: { xs: '5 / 7', sm: '5 / 7', md: '3 / 4' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_4.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '1 / 3', sm: '1 / 3', md: '2 / 3' },
            gridRow: { xs: '7 / 9', sm: '7 / 9', md: '4 / 5' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_5.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '1 / 2', sm: '1 / 2', md: '3 / 4' },
            gridRow: { xs: '9 / 11', sm: '9 / 11', md: '3 / 5' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_6.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '1 / 3', sm: '1 / 3', md: '1 / 3' },
            gridRow: { xs: '11 / 13', sm: '11 / 13', md: '5 / 7' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_7.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '2 / 3', sm: '2 / 3', md: '3 / 4' },
            gridRow: { xs: '9 / 11', sm: '9 / 11', md: '5 / 7' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_8.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '1 / 3', sm: '1 / 3', md: '1 / 2' },
            gridRow: { xs: '15 / 18', sm: '15 / 18', md: '7 / 9' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_9.png'}
          alt={'Yaba'}
        />
        <Box
          component={'img'}
          sx={{
            gridColumn: { xs: '1 / 3', sm: '1 / 3', md: '2 / 4' },
            gridRow: { xs: '13 / 15', sm: '13 / 15', md: '7 / 9' },
            width: '100%',
            height: '100%',
          }}
          src={'/yaba/yaba_10.png'}
          alt={'Yaba'}
        />
      </Box>

      <Flex justifyContent={'center'}>
        <ContainedButton
          sx={{
            mt: { xs: 2, sm: 4, md: 4, lg: 5 },
            py: { xs: 1, sm: 1, md: 1, lg: 1.5 },
            px: { xs: 4, sm: 4, md: 4, lg: 6 },
            fontWeight: 500,
            fontSize: {
              xs: '1.2rem',
              sm: '1.2rem',
              md: '1.2rem',
              lg: '1.8rem',
            },
            alignSelf: { xs: 'center', sm: 'center', md: 'flex-start' },
            borderRadius: { xs: 2, sm: 2, md: 3, lg: 3 },
          }}
          component={HashLink}
          to={'/enterprise#contact-us'}
        >
          Schedule a visit
        </ContainedButton>
      </Flex>
    </Box>
  );
};

export default Yaba;
