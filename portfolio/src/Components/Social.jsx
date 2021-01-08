import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


export default function Social(){

    return(
        <footer className="social">
            <div>
               <a target="blank" href="https://github.com/dayamartinez"><h3><WhatsAppIcon/></h3></a>
           </div>
            <div>
               <a target="blank" href="mailto:dayamar4@gmail.com"><h3><EmailIcon/></h3></a> 
            </div>
 
            <div>
               <a target="blank" href="https://www.linkedin.com/in/dayamartinez"><h3><LinkedInIcon/></h3></a> 
            </div>
           
           <div>
               <a target="blank" href="https://github.com/dayamartinez"><h3><GitHubIcon/></h3></a>
           </div>

          
           
           
        </footer>
    )
}