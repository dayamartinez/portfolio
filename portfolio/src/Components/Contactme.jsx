import React from 'react'
import '../App.css'
import Social from './Social'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
      }
}));

export default function Contactme(){
    const classes = useStyles();

    return(
        <div  id='contactme' >
            <div className='contactme'>

                <h1>CONTÁCTAME</h1>
                <p>Sí quieres ponerte encontacto conmigo para algún proyecto, una consulta o simplemente para saludar, eres libre de hacerlo.</p>
                
                <form className='contactme-form'action="">
                    <FormControl  row>                 
                        <TextField  id="standard-secondary" label="TU NOMBRE" color="secondary" 
                                    className={classes.margin}  variant="outlined"fullWidth />
                        <TextField  id="standard-secondary" label="CORREO ELECTRÓNICO" color="secondary" fullWidth 
                                    className={classes.margin} variant="outlined"/>
                        <TextField  id="standard-multiline-static" label="TU MENSAJE" color="secondary" fullWidth  
                                    className={classes.margin}  multiline rows={4} variant="outlined" />          
                    </FormControl> 
                    <div style={{textAlign: 'center'}}>
                            <input  type='submit' value='ENVIAR' 
                                    style={{backgroundColor: "transparent", padding: '8px 5px', width: '100px',
                                            borderRadius: '8px', marginBottom: '25px', marginTop:'12px'}} />
                    </div>                                       
                </form>
               
                <h4>También puedes contáctarme por cualquiera de estas plataformas:<Social/></h4>                        
             
            </div>            
        </div>
    )
}




