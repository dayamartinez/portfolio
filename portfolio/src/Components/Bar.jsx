import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',    
  },
  drawer: {
    width: drawerWidth,
    whiteSpace: 'nowrap',    
  },
  drawerClose: {
    overflowX: 'hidden', 
    zIndex: 99,
    backgroundColor: ' rgba(255, 255, 255, 0.198)',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function Bar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div className='bar'>
   <div id='bar'className={classes.root}>     
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerClose]: !open,
          }),
        }}
      >
     
        <List>
          {[ 'Send email'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><MailIcon color='secondary'/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon> <MailIcon color='secondary' /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </div>
      </div>
 
  );
}
