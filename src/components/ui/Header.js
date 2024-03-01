import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import logo from '../../assets/logo.svg'


function ElevationScroll(props) {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {       //moves a content to start after the Header, otherwize, it will be covered by header
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  }
}))

function Header(props) {
  const classes = useStyles()
  return (
    <>
    <ElevationScroll>
    <AppBar position="fixed" color="primary">
      <Toolbar disableGutters>
        <img alt='compsny logo' src={logo} className={classes.logo}/>
      </Toolbar>
    </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>
    </>
  );
}

export default Header;
