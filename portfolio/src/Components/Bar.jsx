import React from 'react';
import { useHistory } from "react-router";
import clsx from 'clsx';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import {Drawer, List, Divider,ListItem, ListItemIcon, Tooltip, MenuItem} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import PersonPinRoundedIcon from '@material-ui/icons/PersonPinRounded';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    whiteSpace: 'nowrap',   
  },
  drawerClose: {
    justifyContent: 'center',
    overflowX: 'hidden', 
    backgroundColor: 'TRANSPARENT',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': { backgroundColor: 'transparent',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': { color: "gray"},
    },
  },
}))(MenuItem);

export default function Bar() {
  const History = useHistory()
  const classes = useStyles();

  return (
    <div>
      <div className='bar'>
        <div id='bar'className={classes.root}>     
          <Drawer
              anchor="right"
              variant="permanent"
              className={clsx(classes.drawer)}
              classes={{paper: clsx([classes.drawerClose])}}
          >
        
            <List>   
              <Tooltip title="INICIO" placement="left">        
                <ListItem button>
                  <ListItemIcon onClick={() => History.push('/')}><HomeIcon color='secondary'/></ListItemIcon>            
                </ListItem> 
                </Tooltip>         
            </List>  

            <Divider />   

            <List>
              <Tooltip title="TRABAJOS" placement="left">             
                <ListItem button>
                  <ListItemIcon onClick={() => History.push('/trabajos')}><WorkIcon color='secondary'/></ListItemIcon>           
                </ListItem> 
              </Tooltip>          
            </List>
            <Divider />
            
            <List>
              <Tooltip title="CONTACTO" placement="left">
                <ListItem button>
                  <ListItemIcon onClick={() => History.push('/contactame')}> <PersonPinRoundedIcon color='secondary' /></ListItemIcon>             
                </ListItem>
              </Tooltip>
            </List>
          </Drawer>        
       </div>
     </div> 
     

     <div className='menu-resp'>
    
        <StyledMenuItem  onClick={() => History.push('/')}>
        {/* <HomeIcon /> */}
        <h6>INICIO</h6>      
        </StyledMenuItem>
        
        <StyledMenuItem onClick={() => History.push('/trabajos')}>
        {/* <WorkIcon /> */}
        <h6>TRABAJOS</h6>   
        </StyledMenuItem>

        <StyledMenuItem onClick={() => History.push('/contactame')}>
        {/* <PersonPinRoundedIcon /> */}
        <h6>CONTACTO</h6>   
        </StyledMenuItem>
      
     </div>
     </div>
  );
}