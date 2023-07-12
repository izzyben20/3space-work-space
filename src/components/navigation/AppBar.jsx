import * as React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Popover from '@mui/material/Popover';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { AppRoutes } from '../../routes';
import LogoSvg from '../svg/SpaceSvg';
import OutlinedButton from '../base/OutlinedButton';
import Flex from '../base/Flex';
import Footer from './Footer';
import ExpandMore from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import LocationSvg from '../svg/LocationSvg';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import TextButton from '../base/TextButton';
import LogoDarkSvg from '../svg/LogoDarkSvg';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';

const _navItems = [
  AppRoutes.locations,
  AppRoutes.solutions,
  AppRoutes.enterprise,
];

const __navItems = [AppRoutes.solutions, AppRoutes.enterprise];

const nonActiveClassName = {
  color: '#FFFFFF',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '12px',
};

const activeClassName = {
  color: '#00A651',
  textDecoration: 'none',
  fontSize: '12px',
  textAlign: 'center',
  fontWeight: 600,
};

const navButtonSx = {
  typography: { sm: 'b7', md: 'body1' },
  textAlign: 'center',
  color: 'inherit',
  gap: '8px',
  fontSize: '0.5rem',
  display: 'flex',
  textDecoration: 'none',
  width: '100%',
  fontWeight: 'inherit',
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function ResponsiveAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expand, setExpand] = React.useState(true);
  const isLocationsPopoverOpen = Boolean(anchorEl);
  const ref = React.useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function ScrollTop() {
    const trigger = useScrollTrigger({
      threshold: 100,
    });

    const scrollToTop = () => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={scrollToTop}
          role={'presentation'}
          sx={{ position: 'fixed', bottom: 50, right: 16 }}
        >
          <Fab color={'primary'} size={'small'} aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Fade>
    );
  }

  const drawer = (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'rgba(250, 250, 250, 0.9)',
        height: '100vh',
      }}
    >
      <Flex justifyContent={'space-between'} sx={{ px: 2 }}>
        <Box component={NavLink} to={'/'} onClick={handleDrawerToggle}>
          <LogoDarkSvg />
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: '#000', fontSize: '2.5rem' }} />
        </IconButton>
      </Flex>
      <Box>
        <MuiAccordion
          sx={{
            '& .MuiAccordionSummary-root': {
              mx: 2,
              py: 0,
              px: 0,
              bgcolor: 'rgba(250, 250, 250, 0.9)',
              color: '#000',
            },
            '& .MuiAccordionDetails-root': {
              mx: 0,
              py: 0,
              m: 0,
              bgcolor: 'rgba(250, 250, 250, 0.9)',
            },
            borderBottom: 0,
            boxShadow: 'none',
          }}
          onClick={() => setExpand((s) => !s)}
        >
          <MuiAccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Flex
              sx={{
                fontSize: '1rem',
                color: '#000',
                textTransform: 'uppercase',
              }}
            >
              Locations {expand ? <ExpandMore /> : <KeyboardArrowUpIcon />}
            </Flex>
          </MuiAccordionSummary>
          <MuiAccordionDetails sx={{ my: 0, py: 0 }}>
            <Flex columnGap={4}>
              <Box>
                <Button
                  as={Link}
                  to={'/locations/yaba'}
                  sx={{
                    ...navButtonSx,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    ZIndex: 2,
                    gap: '1.5rem',
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#000',
                    fontSize: '1rem',
                  }}
                  onClick={handleDrawerToggle}
                >
                  <LocationSvg width={25} height={25} /> Yaba
                </Button>
              </Box>
              <Box>
                <Button
                  as={Link}
                  to={'/locations/victoria-island'}
                  sx={{
                    ...navButtonSx,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    ZIndex: 2,
                    gap: '1rem',
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#000',
                    fontSize: '1rem',
                  }}
                  onClick={handleDrawerToggle}
                >
                  <LocationSvg width={25} height={25} /> V.I
                </Button>
              </Box>
              <Box>
                <Button
                  as={Link}
                  to={'/locations/victoria-island'}
                  sx={{
                    ...navButtonSx,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    ZIndex: 2,
                    gap: '0.7rem',
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#000',
                    fontSize: '1rem',
                  }}
                  onClick={handleDrawerToggle}
                >
                  <LocationSvg width={25} height={25} /> V.I
                </Button>
              </Box>
            </Flex>
          </MuiAccordionDetails>
        </MuiAccordion>
      </Box>
      <Divider sx={{ mx: 2 }} />
      <List sx={{ mx: 2 }}>
        {__navItems.map((item, index) => (
          <ListItem key={item.name} disablePadding mb={1}>
            <NavLink
              to={item.path}
              onClick={handleDrawerToggle}
              style={{ ...nonActiveClassName, width: '100%' }}
            >
              <ListItemButton
                sx={{
                  textAlign: 'left',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#000',
                  textTransform: 'uppercase',
                  borderBottom:
                    index === 0
                      ? '0.1px solid rgba(207, 207, 207, 0.8)'
                      : 'none',
                  px: 0,
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </NavLink>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const LocationsPopover = () => (
    <Popover
      anchorEl={anchorEl}
      open={isLocationsPopoverOpen}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Box
        as={'ul'}
        role={'listbox'}
        sx={{
          px: 2,
          py: 1,
          my: 0,
          backgroundColor: '#F6F6F6',
          listStyle: 'none',
          maxWidth: '150px',
          borderRadius: '16px',
        }}
      >
        <Box as={'li'}>
          <Button
            as={Link}
            to={'/locations/yaba'}
            sx={{
              ...navButtonSx,
              justifyContent: 'flex-start',
              alignItems: 'center',
              ZIndex: 2,
              gap: '1.5rem',
              textTransform: 'none',
              fontWeight: 600,
              color: '#000',
            }}
            onClick={() => {
              setAnchorEl(null);
            }}
          >
            <LocationSvg width={25} height={25} /> Yaba
          </Button>
          <Divider />
        </Box>
        <Box as={'li'}>
          <Button
            as={Link}
            to={'/locations/victoria-island'}
            sx={{
              ...navButtonSx,
              justifyContent: 'flex-start',
              alignItems: 'center',
              ZIndex: 2,
              gap: '1.5rem',
              fontWeight: 600,
            }}
            onClick={() => {
              setAnchorEl(null);
            }}
          >
            <LocationSvg width={25} height={25} /> V.I
          </Button>
          <Divider />
        </Box>
        <Box as={'li'}>
          <Button
            as={Link}
            to={'/locations/victoria-island'}
            sx={{
              ...navButtonSx,
              justifyContent: 'flex-start',
              alignItems: 'center',
              ZIndex: 2,
              gap: '1.5rem',
              fontWeight: 600,
            }}
            onClick={() => {
              setAnchorEl(null);
            }}
          >
            <LocationSvg width={25} height={25} /> V.I
          </Button>
        </Box>
      </Box>
    </Popover>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: '#2F2F2F',
        px: { xs: 2, sm: 8, md: 10, lg: '7.5rem' },
        mx: 'auto'
      }}
      ref={ref}
    >
      <HideOnScroll {...props}>
        <AppBar
          component={'nav'}
          sx={{
            bgcolor: 'inherit',
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'100%'}
              sx={{
                width: '100%',
                height: '100%',
                borderBottom: '0.7px solid #FFFFFF',
                mx: { xs: 0, sm: 8, md: 10 },
                pb: { xs: 0, sm: 1, mb: 2 }
              }}
            >
              <Flex
                sx={{
                  display: { xs: 'none', sm: 'none', md: 'flex' },
                  alignSelf: 'flex-end',
                  gap: '2.5rem',
                  flex: '45%',
                  mb: 1,
                }}
              >
                <LocationsPopover />
                {_navItems.map((item, index) => (
                  <TextButton
                    as={NavLink}
                    key={item.name}
                    style={({ isActive }) =>
                      isActive ? activeClassName : nonActiveClassName
                    }
                    to={item.path}
                    onClick={(e) =>
                      index === 0 ? setAnchorEl(e.currentTarget) : null
                    }
                    sx={{
                      ...navButtonSx,
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      alignSelf: 'flex-start',
                      width: 'max-content',
                      gap: '0px',
                      px: 0,
                      fontSize: '12px',
                      '&.hover': {
                        color: '#00A651',
                      },
                    }}
                  >
                    {item.name}{' '}
                    {index === 0 &&
                      (anchorEl ? (
                        <KeyboardArrowUpIcon color={'inherit'} />
                      ) : (
                        <ExpandMore color={'inherit'} />
                      ))}
                  </TextButton>
                ))}
              </Flex>
              <Flex
                sx={{
                  flex: {xs: '100%', sm: '100%', md: '100%', lg: '55%'},
                  justifyContent: 'space-between',
                }}
              >
                <Box component={NavLink} to={'/'}>
                  <LogoSvg
                    sx={{
                      width: { xs: 100, sm: 120, md: 120, lg: 160 },
                      height: { xs: 40, sm: 40, md: 40, lg: 65 },
                    }}
                  />
                </Box>
                <OutlinedButton
                  sx={{
                    display: { xs: 'none', sm: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: '1.5rem',
                    py: '1rem',
                    borderRadius: '6px',
                    '&:hover': {
                      borderColor: '#FFF',
                    },
                  }}
                >
                  Sign In
                </OutlinedButton>
                <IconButton
                  aria-label={'open drawer'}
                  edge={'start'}
                  onClick={handleDrawerToggle}
                  sx={{
                    display: { sm: 'block', md: 'none' },
                    color: '#FFF',
                    fontSize: '6rem'
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Flex>
            </Flex>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component={'nav'}>
        <Drawer
          container={container}
          anchor={'top'}
          variant={'temporary'}
          open={mobileOpen}
          PaperProps={{
            sx: {
              backgroundColor: '#F6F6F6',
            },
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              height: '40vh',
              backgroundColor: '#F6F6F6',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component={'main'}
        width={'100%'}
        sx={{ bgcolor: '#2F2F2F', mt: { sm: 4, md: 4 }, px: 0 }}
        id="back-to-top-anchor"
      >
        <Toolbar />
        <Outlet />
        <ScrollTop />
        <Footer />
      </Box>
    </Box>
  );
}

export default ResponsiveAppBar;
