import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from 'emailjs-com'
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
    const history = useHistory()
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({
        email: '',
    })
   const handleSubmit = (e) => {
     
       e.preventDefault()
      
        const serviceID = 'service_7ezvraj';
        const templateID = 'template_d568mc8'
        const name = emailjs.init('user_JvigJZEcfuWooiI6ClPYX')
        const value = e.target       
         emailjs.sendForm( serviceID, templateID, value, name)

         e.target.reset()
         history.push('/')

   }

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
       )

    }
    const validate = function(input){
        let errors = {};   
        if (!input.email) {
            errors.email = 'e-mail requerido'
          } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            errors.email = 'e-mail no válido'
          }
        return errors;
    } 

    return(
        <div  id='contactme' >
            <div className='contactme'>

                <h1>CONTÁCTAME</h1>
                <p>Sí quieres ponerte encontacto conmigo para algún proyecto, una consulta o simplemente para saludar, eres libre de hacerlo.</p>
                
                <form className='contactme-form' onSubmit={handleSubmit}>
                    <FormControl  row>                 
                        <TextField  id="standard-secondary" label="TU NOMBRE" color="secondary" 
                                    className={classes.margin}  variant="outlined" fullWidth name="name"
                                    onChange={handleInputChange}/>
                        <TextField  id="standard-secondary" label="CORREO ELECTRÓNICO" color="secondary" fullWidth 
                                    className={classes.margin} variant="outlined" name="email"
                                    onChange={handleInputChange} />
                        <TextField  id="standard-multiline-static" label="TU MENSAJE" color="secondary" fullWidth  
                                    className={classes.margin}  multiline rows={4} variant="outlined" name="message"
                                    onChange={handleInputChange} /> 
                                         
                    </FormControl> 
                    <div style={{textAlign: 'center'}}>
                            <input  type='submit' value='ENVIAR' 
                                    style={{backgroundColor: "transparent", padding: '8px 5px', width: '100px',
                                            borderRadius: '8px', marginBottom: '25px', marginTop:'12px'}} 
                                            disabled={!errors.email && (input.name && 
                                                input.email && input.message) ? false : true
                                                }/>
                    </div>                                       
                </form>
               
                <h4>También puedes contáctarme por cualquiera de estas plataformas:<Social/></h4>                        
             
            </div>    
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>        
        </div>
    )
}




