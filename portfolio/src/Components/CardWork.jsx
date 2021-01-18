import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardMedia,Button  } from '@material-ui/core';
import '../App.css'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    maxWidth: 310,
    height: 260
  },
  media: {
    height: 160,
    marginBottom: 10
  },
});

export default function MediaCard({imag, tit, name, url, text, icon}) {
  const classes = useStyles();

  return (
    <div className='cardwork'>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imag}
          title={tit}
        />    
        <h3>{name}</h3>
        <a target='blanck' href={url} style={{textDecoration: 'none'}}>   
            <Button size="small" color="secondary" 
                    style={{border: '1px solid rgb(245, 30, 102)', padding: '3px 10px', marginBottom: '20px', fontSize: '5px'}}>
                    {text} {icon}
            </Button>      
        </a>      
      </CardActionArea>     
    </Card>
    </div>
    
  );
}