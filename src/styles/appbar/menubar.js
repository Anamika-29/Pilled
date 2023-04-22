import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#ADE4DB',
  },
}));

function MenuBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {/* Add your menu items here */}
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
