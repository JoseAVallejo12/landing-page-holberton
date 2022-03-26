import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { menu } from '../../utils/constants/menu';
import { IconsApp } from '../../utils/icons/Icons';
import { HashLink as Link } from 'react-router-hash-link';

function buildRouteName(route) {
  if (typeof route === 'string') {
    return `#${route.slice(1)}`;
  }
}

export const drawerMenu = (anchor, toggleDrawer) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      {menu.options.map((option, index) => (
        <Link smooth key={index} to={buildRouteName(option.path)}>
          <ListItem button key={option.name}>
            <ListItemIcon>
              <Icon color="primary">{option.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={option.name} />
          </ListItem>

        </Link>

      ))}
    </List>
    <Divider />
    <List>
      {menu.socialOptions.map((option, index) => (
        <ListItem button key={option.name}>
          <ListItemIcon>
            <IconsApp name={option.icon} />
          </ListItemIcon>
          <ListItemText primary={option.name} />
        </ListItem>
      ))}
    </List>
  </Box>
);
