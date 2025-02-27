import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
import { useNavigate, useLocation } from 'react-router-dom';
import Colors from '../assets/Styles/Colors';
import Fonts from '../assets/Styles/Fonts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 240;

// Drawer styling
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: Colors.palette.general.color01, // Change the background color
  color: theme.palette.primary.dark, // Change the text/icon color
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  fontFamily: Fonts.Headers.Type1.fontFamily, // Add custom font family
  fontSize: Fonts.Headers.Type1.fontSize.md, // Use responsive font size
  fontWeight: Fonts.Headers.Type1.fontWeight, // Apply font weight
  lineHeight: Fonts.Headers.Type1.lineHeight, // Line height
  letterSpacing: Fonts.Headers.Type1.letterSpacing, // Letter spacing
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  // const [selectPage, setSellectPage] = React.useState();
  const [selectPage, setSelectPage] = React.useState(location.pathname);
  // console.log("selectPage",selectPage);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    // Clear session data, localStorage, or cookies
    localStorage.removeItem("userSession"); // Example for removing session data
    navigate("/"); // Redirect to the login page
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>

          {/* Logout Button */}
          <IconButton
            color="inherit"
            onClick={handleLogout} // Trigger the logout function
            sx={{ ml: 'auto' }} // Push to the right
          >
            <ExitToAppIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: Colors.palette.general.color02, // Custom background color
            color: '#FFFFFF', // Custom text/icon color (optional)
          },
        }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  backgroundColor: selectPage === '/dashboard' ? Colors.palette.general.color03 : Colors.palette.general.color02, // Highlight background
                  "&:hover": { backgroundColor: "#e0e0e0" },
                  fontFamily: Fonts.Headers.Type1.fontFamily, // Apply custom font
                  fontSize: Fonts.Headers.Type1.fontSize.md, // Apply responsive font size
                  fontWeight: Fonts.Headers.Type1.fontWeight, // Apply font weight
                  letterSpacing: Fonts.Headers.Type1.letterSpacing, // Apply letter spacing
                  color: selectPage === '/' ? Colors.palette.primary.contrastText : Fonts.Headers.Type1.color, // Font color
                },
                open
                  ? {
                    justifyContent: "initial",
                  }
                  : {
                    justifyContent: "center",
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                <InboxIcon />
              </ListItemIcon>

              <ListItemText
                primary="DashBoard"
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate("/Company");
              setSellectPage("Company");
            }}
          >
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  backgroundColor: selectPage === '/Company' ? Colors.palette.general.color03 : Colors.palette.general.color02, // Highlight background
                  "&:hover": { backgroundColor: "#e0e0e0" },
                  fontFamily: Fonts.Headers.Type1.fontFamily, // Apply custom font
                  fontSize: Fonts.Headers.Type1.fontSize.md, // Apply responsive font size
                  fontWeight: Fonts.Headers.Type1.fontWeight, // Apply font weight
                  letterSpacing: Fonts.Headers.Type1.letterSpacing, // Apply letter spacing
                  color: selectPage === '/Company' ? Colors.palette.primary.contrastText : Fonts.Headers.Type1.color, // Font color
                },
                open
                  ? {
                    justifyContent: "initial",
                  }
                  : {
                    justifyContent: "center",
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                <InboxIcon />
              </ListItemIcon>

              <ListItemText
                primary="Company"
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate("/Item");
              setSellectPage("Item");
            }}
          >
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  backgroundColor: selectPage === '/Item' ? Colors.palette.general.color03 : Colors.palette.general.color02, // Highlight background
                  "&:hover": { backgroundColor: "#e0e0e0" },
                  fontFamily: Fonts.Headers.Type1.fontFamily, // Apply custom font
                  fontSize: Fonts.Headers.Type1.fontSize.md, // Apply responsive font size
                  fontWeight: Fonts.Headers.Type1.fontWeight, // Apply font weight
                  letterSpacing: Fonts.Headers.Type1.letterSpacing, // Apply letter spacing
                  color: selectPage === '/Item' ? Colors.palette.primary.contrastText : Fonts.Headers.Type1.color, // Font color
                },
                open
                  ? {
                    justifyContent: "initial",
                  }
                  : {
                    justifyContent: "center",
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                <InboxIcon />
              </ListItemIcon>

              <ListItemText
                primary="Item"
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton>
          </ListItem>

        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */}
    </Box>
  );
}
