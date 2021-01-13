import React from 'react';
import { useHistory } from "react-router";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import PersonPinRoundedIcon from '@material-ui/icons/PersonPinRounded';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import ExploreIcon from '@material-ui/icons/Explore';
import Tooltip from '@material-ui/core/Tooltip';


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

export default function Bar() {
  const History = useHistory()
  const classes = useStyles();

  return (
      <div className='bar'>
        <div id='bar'className={classes.root}>     
          <Drawer
              anchor="right"
              variant="permanent"
              className={clsx(classes.drawer)}
              classes={{paper: clsx([classes.drawerClose])}}
          >
        
            <List>   
              <Tooltip title="Inicio" placement="left">        
                <ListItem button>
                  <ListItemIcon onClick={() => History.push('/')}><HomeIcon color='secondary'/></ListItemIcon>            
                </ListItem> 
                </Tooltip>         
            </List>  

            <Divider />   

            <List>
              <Tooltip title="Trabajos" placement="left">             
                <ListItem button>
                  <ListItemIcon onClick={() => History.push('/trabajos')}><WorkIcon color='secondary'/></ListItemIcon>           
                </ListItem> 
              </Tooltip>          
            </List>

            <List>
              <Tooltip title="Proyectos" placement="left">
                <ListItem button>
                  <ListItemIcon onClick={() => History.push('/')}> <ExploreIcon color='secondary' /></ListItemIcon>             
                </ListItem>
              </Tooltip>          
            </List>
            
            <List>
              <Tooltip title="Herramientas" placement="left">
                <ListItem button>
                  <ListItemIcon onClick={() => History.push('/')}> <CodeSharpIcon color='secondary' /></ListItemIcon>             
                </ListItem>  
              </Tooltip>                 
            </List>
            
            <Divider />
            
            <List>
              <Tooltip title="Contactame" placement="left">
                <ListItem button>
                  <ListItemIcon onClick={() => History.push('/contactame')}> <PersonPinRoundedIcon color='secondary' /></ListItemIcon>             
                </ListItem>
              </Tooltip>
            </List>
          </Drawer>        
       </div>
     </div> 
  );
}
