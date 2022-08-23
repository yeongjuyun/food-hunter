import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Divider,
  IconButton,
  Typography,
  Stack,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // 햄버거 버튼 클릭 시, nav Drawer 화면에 나옴.
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer 내부 리스트 스타일링
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Food Hunter
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href='/'>
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href='/store'>
              <ListItemText>Store</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href='/about'>
              <ListItemText>About</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar position='static' component='nav' style={{ background: '#2E3B55' }}>
      <Toolbar
        expand='lg'
        variant='light'
        bg='light'
        sx={{
          height: 60,
        }}
      >
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'unset' } }}
        >
          <Link className='navbar-brand' href='/'>
            Food Hunter
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Stack direction='row' spacing={2}>
            <Button color='inherit'>
              <Link href='/'>Home</Link>
            </Button>
            <Button color='inherit'>
              <Link href='/store'>Store</Link>
            </Button>
            <Button color='inherit'>
              <Link href='/about'>About</Link>
            </Button>
          </Stack>
        </Box>
      </Toolbar>

      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </AppBar>
  );
}
