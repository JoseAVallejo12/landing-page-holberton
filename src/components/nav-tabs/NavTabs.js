import * as React from 'react';
import Box from '@mui/material/Box';
import { menu } from '../../utils/constants/menu';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '@mui/material/Button';


export default function NavTabs() {

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
