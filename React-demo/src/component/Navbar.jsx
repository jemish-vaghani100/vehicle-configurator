//import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FeedbackIcon from '@mui/icons-material/Feedback';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(
    localStorage.getItem('drawerOpen') === 'true' || false);
  const navigate = useNavigate();
  const handleItemClick = (route) => {
    setOpen(false); // Close the drawer on item click
    navigate(route); // Navigate to the specified route // Navigate to the specified route
  };

  useEffect(() => {
    localStorage.setItem('drawerOpen', open);
  }, [open]);

  const items = [
    { key: '/', text: 'Home', icon: <HomeIcon /> },
    { key: '/register', text: 'Register', icon: <PersonIcon /> },
    { key: '/login', text: 'Login', icon: <LoginIcon /> },
    { key: '/about', text: 'About', icon: <InfoIcon /> },
    { key: '/contact', text: 'Contact Us', icon: <CallIcon /> },
    { key: '/feedback', text: 'Feedback', icon: <FeedbackIcon /> }
  ];

  const username = sessionStorage.getItem('username');

if (username) {
  // If username exists, change "Login" to "Logout" in the items array
  const loginItemIndex = items.findIndex(item => item.key === '/login');
  
  if (loginItemIndex !== -1) {
    items[loginItemIndex].text = 'Logout';
    items[loginItemIndex].icon = <LogoutIcon />;

    // You can also add a key for the logout route if needed
    // items[loginItemIndex].key = '/logout';
  }
}

  const toggleDrawer = () => {
  setOpen((prevOpen) => !prevOpen);
  };



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton onClick={toggleDrawer}>
            {open ? (
              theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )
            ) : (
              <MenuIcon /> 
            )}
          </IconButton>
        </DrawerHeader>
       <Divider />
        <List>
          {items.map((item, index) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton onClick={() => handleItemClick(item.key)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

    </Box>
  );
}

