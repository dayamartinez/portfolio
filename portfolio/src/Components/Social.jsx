import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email';


export default function Social(){

    return(
        <div>
            <div>
               <a target="blank" href="mailto:dayamar4@gmail.com"><EmailIcon/></a> 
            </div>

            <div>
               <a target="blank" href="https://www.linkedin.com/in/dayamartinez"><LinkedInIcon/> </a> 
            </div>
           
           <div>
               <a target="blank" href="https://github.com/dayamartinez"><GitHubIcon/></a>
           </div>
           
        </div>
    )
}