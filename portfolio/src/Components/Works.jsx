import React from 'react'
import CardWork from './Cardwork'
import lacasa from '../Images/7.jpg'
import henryEcommerce from '../Images/henryEcommerce.png'
import porfolio from '../Images/portfolio.png'
// import dulceysalao from '../Images/dulceysalao.jpg'
import empowcapitals from '../Images/empowcapitals.jpg'
import henryapp from '../Images/henryapp.jpg'

// import LanguageIcon from '@material-ui/icons/Language';
// import CodeIcon from '@material-ui/icons/Code';

export default function Work(){
    return (
        <div >
           <div id='work'>     
            <h2><span>T</span><span>R</span><span>A</span><span>B</span><span>A</span><span>J</span><span>O</span><span>S</span><br/><span>-</span></h2>   
       
                <div className='work'>       
                    <CardWork imag={lacasa} tit='LA CASA' name='LA CASA BAR ' url='https://lacasabaroficial.web.app' text='VISITAR SITIO WEB' />
                    
                    <CardWork imag={empowcapitals} tit='EMPOW CAPITALS' name='EMPOW CAPITALS ' url='https://empowcapitals.com' text='VISITAR SITIO WEB'/>
                
                    {/* <CardWork imag={dulceysalao} tit='DULCE Y SALAO' name='DULCE Y SALAO ' url='' text='VISITAR SITIO WEB' />                 */}
                </div>          
            </div>
            
           <div id='projects'>
              
            <h2><span>P</span><span>R</span><span>O</span><span>Y</span><span>E</span><span>C</span><span>T</span><span>O</span><span>S</span><br/><span>-</span></h2>     

                <div className='projects'>        
                        <CardWork imag={henryEcommerce} tit='ECOMMERCE' name='ECOMMERCE ' url='https://github.com/dayamartinez/Ecommerce-henry.git' text='< VER /> '/>
                   
                        <CardWork imag={henryapp} tit='HENRYAPP' name='HENRYAPP ' url='https://github.com/dayamartinez/HenryApp.git' text='< VER /> ' />
                   
                        <CardWork imag={porfolio} tit='PORTFOLIO' name='PORTFOLIO ' url='https://github.com/dayamartinez/portfolio.git' text='< VER />' />         
                </div>  
           </div>
              
        </div>
    )
}