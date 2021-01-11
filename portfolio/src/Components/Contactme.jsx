import React from 'react'
import '../App.css'
import Social from './Social'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
      },
      marginRight: {
        marginRight: theme.spacing(5),
      },
      textField: {
        width: '80ch',
      },
}));


export default function Contactme(){
    const classes = useStyles();

    return(
        <div  id='contactme' >
            <div className='contactme'>
                <h1>Contáctame</h1>
                <p>Sí quieres ponerte encontacto conmigo para algún proyecto, una consulta o simplemente para saludar, eres libre de hacerlo.</p>
                <form className='contactme-form'action="">
                    <FormControl  className={clsx(classes.margin, classes.textField, classes.marginRight)}>
                        <TextField  id="standard-secondary" label="Tu nombre" color="secondary" fullWidth 
                                    className={classes.margin}  variant="outlined"/>
                        <TextField  id="standard-secondary" label="Correo Electrónico" color="secondary" fullWidth 
                                    className={classes.margin} variant="outlined"/>
                        <TextField  id="standard-multiline-static" label="Tu mensaje" color="secondary" fullWidth  
                                    className={classes.margin}  multiline rows={4} variant="outlined" />          
                    </FormControl> 
                    <input type='submit' value='Enviar' 
                        style={{backgroundColor: "transparent", padding: '8px 20px', 
                                borderRadius: '8px', marginBottom: '40px', marginTop:'10px', cursor: 'grab'}}/>
                    
                </form>
                <div>
                    <h4>También puedes escribirme a cualquiera de estas plataformas:<Social/></h4>                        
                </div>
            </div>

            
        </div>
    )
}




