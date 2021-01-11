import React from 'react';
import '../App.css';
import Social from './Social'
import Card from './Card'
import silueta from './silueta.jpg'

export default function Home(){
   
    return (
        <div className='home' >
                     <Social/>
                    

                    
            <section id='me'>  
                <div className='me'>          
                    <span>H</span><span>o</span><span>l</span><span>a</span><span>, </span>
                    <span>s</span><span>o</span><span>y </span>
                    <span>D</span><span>a</span><span>y</span><span>a</span><span>m</span><span>a</span><span>r</span><span>,</span><br/>
                    <span>D</span><span>e</span><span>s</span><span>a</span><span>r</span><span>r</span><span>o</span>
                    <span>l</span><span>l</span><span>a</span><span>d</span><span>o</span><span>r</span><span>a </span>
                    <span>W</span><span>e</span><span>b </span>
                    <span>F</span><span>u</span><span>l</span><span>l </span>
                    <span>S</span><span>t</span><span>a</span><span>c</span><span>k</span><span>.</span>  
                </div> 

                <div>
                  <img src={silueta} alt='foto personal' width='200px' height='200px' style={{borderRadius: '100px'}} />   
                </div>
                
            </section> 
        <div className="input-contactme">
            {/* <h5>{`<h3>`}</h5> */}
            <a href="/contactame" ><h3>- Contáctame -</h3></a>
            {/* <h5>{`</h3>`}</h5>  */}
        </div>
           
        
        </div>
    )
}