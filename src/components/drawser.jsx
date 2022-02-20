import * as React from 'react';
import { Routes, Route, Outlet, Link, useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeProvider, createTheme } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ArticleIcon from '@mui/icons-material/Article';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  let history = useHistory();

  const tabs = ['见', '闻', '思', '感']
  const iconList = [<PhotoIcon className='link' />, <VideoLibraryIcon className='link' />, <ArticleIcon className='link' />, <MenuBookIcon className='link' />]

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    history.push("/video");
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {tabs.map((text, index) => (
          <React.Fragment>
            <ListItem button key={text}>

              <div className='list-icon link'> <ListItemIcon >
                
                <Link to='/video'>{iconList[index]}</Link>
              </ListItemIcon></div>
              <div className='list-separation link'><span style={{ 'fontWeight': '800' }}>·</span> </div>
              <ListItemText primary={text} className='link' />
            </ListItem>
            <Divider />
          </React.Fragment>

        ))}
      </List>

    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment key={'top'}>
        <span className='nav-item link' onClick={toggleDrawer('top', true)}>
          <a >启 航</a>
          {/* <FormatListBulletedIcon /> */}
        </span>
        <Drawer
          anchor={'top'}
          open={state['top']}
          onClose={toggleDrawer('top', false)}
        >
          {list('top')}
        </Drawer>
      </React.Fragment>
    </ThemeProvider>
  );
}