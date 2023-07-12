import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ContainedButton from '../base/ContainedButton';
import LogoSvg from '../svg/SpaceSvg';
import Flex from '../base/Flex';
import FacebookSvg from '../svg/FacebookSvg';
import TextButton from '../base/TextButton';
import LinkedInSvg from '../svg/LinkedInSvg';
import TwitterSvg from '../svg/TwitterSvg';
import { HashLink } from 'react-router-hash-link';

const navLinks = [
  { name: 'locations', path: '/locations' },
  { name: 'solutions', path: '/solutions' },
  { name: 'enterprise', path: '/enterprise' },
];

const _navLinks = [
  { name: 'contact us', path: '/enterprise#contact-us' },
  { name: 'terms of service', path: '.' },
  { name: 'privacy policy', path: '.' },
];

const Br = styled('br')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const Footer = () => {
  return (
    <Box
      mb={5}
      sx={{
        mx: { xs: 2, sm: 3, md: 0 },
        mt: { xs: 3, sm: 4, md: 6, lg: '10rem' },
      }}
    >
      <Flex
        sx={{
          justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
          alignItems: { xs: 'center', sm: 'center', md: 'center' },
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          gap: { xs: '3rem', sm: '3rem', md: 0 },
          mb: 8,
        }}
      >
        <Typography
          component={'h3'}
          sx={{
            lineHeight: { xs: '1.25', sm: '1.15', md: '1.2' },
            fontWeight: 600,
            fontSize: { sm: '1.4rem', md: '1.5rem', lg: '2rem' },
            color: '#FFFFFF',
            mb: { xs: 2, sm: 0, md: 0 },
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
          }}
        >
          Ready to <span style={{ fontStyle: 'italic' }}>explore</span> our
          workspaces?
        </Typography>
        <ContainedButton
          sx={{
            py: { xs: 1, sm: 1, md: 1, lg: 1.5 },
            px: { xs: 4, sm: 4, md: 4, lg: 5 },
            fontWeight: 600,
            fontSize: {
              xs: '1.3rem',
              sm: '1.3rem',
              md: '1.4rem',
              lg: '1.8rem',
            },
            color: '#00A651',
            borderRadius: '12px',
            bgcolor: 'rgba(250, 250, 250, 1)',
            '&:hover': {
              bgcolor: 'rgba(250, 250, 250, 0.9)',
            },
          }}
        >
          Sign up now
        </ContainedButton>
      </Flex>
      <Flex sx={{ justifyContent: 'center', mt: 4 }}>
        <LogoSvg
          sx={{
            width: { xs: 120, sm: 140, md: 160, lg: 180 },
            height: { xs: 40, sm: 90, md: 100, lg: 120 },
          }}
        />
      </Flex>
      <Typography
        component={'div'}
        textAlign={'center'}
        sx={{
          lineHeight: { xs: '1.25', sm: '1.5' },
          fontWeight: 300,
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.1rem' },
          color: '#FFFFFF',
          opacity: 0.8,
          mb: { xs: 4, sm: 4, md: 2, lg: 4 },
          mx: { xs: 4, sm: 4, md: 6 },
        }}
      >
        3Space is a revolutionary platform at the forefront of reshaping the way
        we work.
      </Typography>
      <Flex
        columnGap={0}
        width={'100%'}
        sx={{
          justifyContent: {
            xs: 'space-between',
            sm: 'center',
            md: 'center',
          },
          gap: { xs: 0, sm: 0, md: '1rem', lg: '1.8rem' },
        }}
      >
        <Flex
          columnGap={0}
          sx={{
            flexDirection: { xs: 'column', sm: 'row', md: 'row' },
            gap: { xs: 0, sm: 0, md: '1rem', lg: '1.8rem' },
          }}
        >
          {navLinks.map((link) => (
            <TextButton component={NavLink} to={link.path} key={link.name}>
              {link.name}
            </TextButton>
          ))}
        </Flex>
        <Flex
          columnGap={0}
          sx={{
            flexDirection: { xs: 'column', sm: 'row', md: 'row' },
            alignItems: { xs: 'flex-end', sm: 'center', md: 'center' },
            gap: { xs: 0, sm: 0, md: '1rem', lg: '1.8rem' },
          }}
        >
          {_navLinks.map((link, index) => (
            <TextButton
              component={index === 0 ? HashLink : NavLink}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </TextButton>
          ))}
        </Flex>
      </Flex>
      <Divider
        light
        sx={{ bgcolor: '#808080', my: 3, borderBottomWidth: '0.5px' }}
      />
      <Flex justifyContent={'space-between'}>
        <Flex>
          <Typography
            color={'white'}
            sx={{
              fontSize: {
                xs: '0.7rem',
                sm: '0.7rem',
                md: '0.8rem',
                lg: '1rem',
              },
              opacity: { xs: 0.7, sm: 0.7, md: 1 },
            }}
          >
            Copyright © {new Date().getFullYear()} 3Space | All Rights
            <Br /> Reserved | Powered by{' '}
            <span style={{ textDecoration: 'underline' }}>Yahshud</span>
          </Typography>
        </Flex>
        <Flex columnGap={0.5}>
          <Tooltip title={'Facebook'}>
            <Link
              sx={{ cursor: 'pointer' }}
              href={'https://www.facebook.com/3spaceafrica'}
              target={'_blank'}
            >
              <FacebookSvg
                sx={{
                  width: { xs: 25, sm: 26, md: 25, lg: 35 },
                  height: { xs: 25, sm: 26, md: 25, lg: 35 },
                }}
              />
            </Link>
          </Tooltip>
          <Tooltip
            title={'LinkedIn'}
            href={'https://www.linkedIn.com/3-spacealagos'}
            target={'_blank'}
          >
            <Link sx={{ cursor: 'pointer' }}>
              <LinkedInSvg
                sx={{
                  width: { xs: 25, sm: 26, md: 25, lg: 35 },
                  height: { xs: 25, sm: 26, md: 25, lg: 35 },
                }}
              />
            </Link>
          </Tooltip>
          <Tooltip title={'Twitter'}>
            <Link
              sx={{ cursor: 'pointer' }}
              href={'https://www.twitter.com/3Space_africa'}
              target={'_blank'}
            >
              <TwitterSvg
                sx={{
                  width: { xs: 25, sm: 26, md: 25, lg: 35 },
                  height: { xs: 25, sm: 26, md: 25, lg: 35 },
                }}
              />
            </Link>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
