import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Flex from '../../../components/base/Flex';
import Tick1Svg from '../../../components/svg/Tick1Svg';
import Tick2Svg from '../../../components/svg/Tick2Svg';
import Tick3Svg from '../../../components/svg/Tick3Svg';

const Why3Space = () => {
  return (
    <Box sx={{ mb: 6, mt: { xs: 12, sm: 0, md: 0 } }}>
      <Typography
        component={'h3'}
        sx={{
          textAlign: { xs: 'center', sm: 'center', md: 'left' },
          lineHeight: { xs: '1.25', sm: '1.15', md: '1.2' },
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: { xs: '1.4rem', sm: '1.4rem', md: '1.8rem' },
          color: '#FFFFFF',
          mb: 2,
        }}
      >
        Why 3Space?
      </Typography>
      <Typography
        component={'p'}
        sx={{
          textAlign: { xs: 'center', sm: 'center' },
          display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
          lineHeight: { xs: '1.25', sm: '1.5' },
          fontWeight: 300,
          fontSize: '1.1rem',
          color: 'rgba(250, 250, 250, 0.7)',
          pt: { xs: 2, sm: 2 },
          mx: { xs: 'auto', sm: 'auto', },
          mb: { xs: 4, sm: 4 },
        }}
      >
        In today&apos;s ever-changing business landscape, modern businesses
        require dynamic and adaptable workspaces that can cater to their
        evolving needs. 3Space is an innovative solution that offers flexible
        and affordable office space solution for businesses of all sizes.
      </Typography>
      <Flex
        sx={{
          alignItems: 'normal',
          justifyContent: 'flex-start',
          width: '100%',
          height: { xs: '100vh', sm: '100vh', md: '65vh', lg: '70vh'},
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          gap: '4rem',
        }}
      >
        <Flex
          sx={{
            alignItems: 'normal',
            justifyContent: 'flex-start',
            flex: '70%',
            height: '100%',
          }}
        >
          <Box
            component={'img'}
            sx={{
              width: '100%',
              // height: '20%',
            }}
            src={'/why3space.png'}
            alt={'why3space_photo'}
          />
        </Flex>
        <Flex
          sx={{
            alignItems: 'normal',
            justifyContent: 'space-between',
            flex: '30%',
            height: '100%',
            flexDirection: 'column',
            rowGap: { xs: 4, sm: 4, md: 0 }
          }}
        >
          <Box>
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                background: 'url(/background_2.png) no-repeat center/cover',
                pr: 5,
                pl: 6,
                py: 4,
                mx: 'auto',
                width: '100%',
                borderRadius: '10px',
              }}
              columnGap={3}
            >
              <Tick1Svg width={65} height={65} />
              <Typography
                component={'h3'}
                sx={{
                  color: 'rgba(250, 250, 250, 0.9)',
                  lineHeight: { xs: '1', sm: '1', md: '1' },
                  fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.1rem' },
                  fontWeight: 500,
                }}
              >
                Office as a service <span style={{ fontStyle: 'italic'}}>(fully equipped office)</span>
              </Typography>
            </Flex>
            <Box
              sx={{
                width: '70%',
                mx: 'auto',
                height: '0.4rem',
                bgcolor: '#00A651',
                borderBottomRightRadius: '8px',
                borderBottomLeftRadius: '8px',
              }}
            />
          </Box>
          <Box>
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                background: 'url(/background_2.png) no-repeat center/cover',
                pr: 5,
                pl: 6,
                py: 4,
                mx: 'auto',
                width: '100%',
                borderRadius: '10px',
              }}
              columnGap={3}
            >
              <Tick2Svg width={65} height={65} />
              <Typography
                component={'h3'}
                sx={{
                  color: 'rgba(250, 250, 250, 0.9)',
                  lineHeight: { xs: '1', sm: '1', md: '1' },
                  fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.1rem' },
                  fontWeight: 500,
                }}
              >
                One subscription, multiple locations
              </Typography>
            </Flex>
            <Box
              sx={{
                width: '70%',
                mx: 'auto',
                height: '0.4rem',
                bgcolor: '#00A651',
                borderBottomRightRadius: '8px',
                borderBottomLeftRadius: '8px',
              }}
            />
          </Box>
          <Box>
            <Flex
              sx={{
                // alignItems: 'center',
                // justifyContent: 'center',
                background: 'url(/background_2.png) no-repeat center/cover',
                pr: 5,
                pl: 6,
                py: 4,
                mx: 'auto',
                width: '100%',
                borderRadius: '10px',
              }}
              columnGap={3}
            >
              <Tick3Svg width={65} height={65} />
              <Typography
                component={'h3'}
                sx={{
                  color: 'rgba(250, 250, 250, 0.9)',
                  lineHeight: { xs: '1', sm: '1', md: '1' },
                  fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.1rem' },
                  fontWeight: 500,
                }}
              >
                Pay as you<br /> use solution
              </Typography>
            </Flex>
            <Box
              sx={{
                width: '70%',
                mx: 'auto',
                height: '0.4rem',
                bgcolor: '#00A651',
                borderBottomRightRadius: '8px',
                borderBottomLeftRadius: '8px',
              }}
            />
          </Box>
        </Flex>
      </Flex>
      <Typography
        component={'p'}
        sx={{
          textAlign: 'center',
          display: { xs: 'none', sm: 'none', md: 'block' },
          lineHeight: { xs: '1.25', sm: '1.5' },
          fontWeight: 400,
          fontSize: '1.1rem',
          color: 'rgba(250, 250, 250, 0.7)',
          pt: { xs: 0, sm: 2 },
          mx: 10,
          mt: 5
        }}
      >
        In today&apos;s ever-changing business landscape, modern businesses
        require dynamic and adaptable workspaces that can cater to their
        evolving needs. 3Space is an innovative solution that offers flexible
        and affordable office space solution for businesses of all sizes.
      </Typography>
    </Box>
  );
};

export default Why3Space;
