
import React from 'react';

import { useNavigate } from "react-router-dom";
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  header: {
      backgroundColor: '#212121',
  },
  spacing :{
      paddingLeft: 20,
      color: '#fff',
      fontSize: '18px',
      textDecoration: 'none',
  }
});

const Navbar = () => {
    const navigate = useNavigate();
    const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
    <Toolbar >
        <NavLink to="/" className={classes.spacing}>Home</NavLink>
        <NavLink to="/about" className={classes.spacing}> About</NavLink>
        <NavLink to="/head" className={classes.spacing}> Head & Tail</NavLink>
    </Toolbar>
</AppBar>
  )
}

export default Navbar