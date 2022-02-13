import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { menu } from '../../utils/constants/menu';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '@mui/material/Button';

function LinkTab(props) {
  return (
    <Tab
      onClick={(event) => {
        event.preventDefault();
        // @ts-ignore
        Link('#about').scrollIntoView();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("🚀 ~handleChange ~newValue", newValue);
    setValue(newValue);
  };

  const buildRouteName = (route) => {
    if (typeof route === 'string') {
      return `#${route.slice(1)}`;
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      {
        menu.options
          .map((option, index) => (
            <Link smooth key={index} to={buildRouteName(option.path)}>
              <Button size="medium">{option.name}</Button>
            </Link>
          ))
      }
    </Box>
  );
}
