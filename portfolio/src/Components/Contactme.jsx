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

                <h1>Contáctame</h1>
                <p>Sí quieres ponerte encontacto conmigo para algún proyecto, una consulta o simplemente para saludar, eres libre de hacerlo.</p>
                
                <form className='contactme-form'action="">
                    <FormControl  row>                 
                        <TextField  id="standard-secondary" label="Tu nombre" color="secondary" 
                                    className={classes.margin}  variant="outlined"fullWidth />
                        <TextField  id="standard-secondary" label="Correo Electrónico" color="secondary" fullWidth 
                                    className={classes.margin} variant="outlined"/>
                        <TextField  id="standard-multiline-static" label="Tu mensaje" color="secondary" fullWidth  
                                    className={classes.margin}  multiline rows={4} variant="outlined" />          
                    </FormControl> 
                    <div style={{textAlign: 'center'}}>
                            <input  type='submit' value='Enviar' 
                                    style={{backgroundColor: "transparent", padding: '8px 5px', width: '100px',
                                            borderRadius: '8px', marginBottom: '25px', marginTop:'12px'}} />
                    </div>                                       
                </form>
               
                <h4>También puedes escribirme a cualquiera de estas plataformas:<Social/></h4>                        
             
            </div>            
        </div>
    )
}




