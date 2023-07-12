import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Flex from '../../../components/base/Flex';
import LocationSvg from '../../../components/svg/LocationSvg';

const Locations = () => {
  return (
    <Box mb={12} sx={{ mt: { xs: '12rem', sm: '12rem', md: '8rem' } }}>
      <Typography
        component={'h3'}
        sx={{
          lineHeight: { xs: '1.25', sm: '1.15', md: '1.2' },
          textAlign: { xs: 'center', sm: 'center', md: 'right' },
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: { xs: '1.4rem', sm: '1.4rem', md: '1.8rem' },
          color: '#FFFFFF',
          mb: 2,
        }}
      >
        Locations
      </Typography>
      <Flex
        sx={{
          alignItems: 'normal',
          background: 'url(/background.png) no-repeat center/cover',
          px: 6,
          pb: 6,
          pt: 12,
          width: '100%',
          height: { xs: '100%', sm: '100%', md: '75vh', lg: '85vh' },
          borderRadius: '8px',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          rowGap: 6,
        }}
        columnGap={4}
      >
        <Flex
          sx={{
            alignItems: 'normal',
            width: '100%',
            height: '100%',
            flex: '33.333%',
            position: 'relative',
          }}
        >
          <Box
            component={'img'}
            sx={{
              width: '100%',
              //   position: 'relative',
            }}
            src={'/yaba.png'}
            alt={'yaba_photo'}
          />
          <Flex
            sx={{
              position: 'absolute',
              left: '1px',
              bottom: 0,
              zIndex: 6,
            }}
          >
            <LocationSvg />
            <Typography
              color={'white'}
              fontWeight={500}
              sx={{ fontSize: { md: '1.5rem', lg: '1.8rem' } }}
            >
              Yaba
            </Typography>
          </Flex>
        </Flex>
        <Flex
          sx={{
            alignItems: 'normal',
            width: '100%',
            height: '100%',
            flex: '33.333%',
            position: 'relative',
          }}
        >
          <Box
            component={'img'}
            sx={{
              width: '100%',
            }}
            src={'/vi_1.png'}
            alt={'_photo'}
          />
          <Flex
            sx={{
              position: 'absolute',
              left: '1px',
              bottom: 0,
              zIndex: 6,
            }}
          >
            <LocationSvg />
            <Typography
              color={'white'}
              sx={{ fontSize: { md: '1.5rem', lg: '1.8rem' } }}
              fontWeight={500}
            >
              V.I
            </Typography>
          </Flex>
        </Flex>
        <Flex
          sx={{
            alignItems: 'normal',
            width: '100%',
            height: '100%',
            flex: '33.333%',
            position: 'relative',
          }}
        >
          <Box
            component={'img'}
            sx={{
              width: '100%',
            }}
            src={'/vi_2.png'}
            alt={'yaba_photo'}
          />
          <Flex
            sx={{
              position: 'absolute',
              left: '1px',
              bottom: 0,
              zIndex: 6,
            }}
          >
            <LocationSvg />
            <Typography
              color={'white'}
              sx={{ fontSize: { md: '1.5rem', lg: '1.8rem' } }}
              fontWeight={500}
            >
              V.I
            </Typography>
          </Flex>
        </Flex>
      </Flex>
      <Box
        sx={{
          width: '70%',
          mx: 'auto',
          height: { xs: '1rem', sm: '1rem', md: '1.7rem' },
          bgcolor: '#00A651',
          borderBottomRightRadius: '1rem',
          borderBottomLeftRadius: '1rem',
        }}
      />
    </Box>
  );
};

export default Locations;
