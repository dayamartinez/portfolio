import React from "react";
import '../App.css';
import Social from "./Social"

export default function Home(){
   
    return (
        <div className="home" >
           
           <section id="me" className="me">
            
               <span>H</span><span>o</span><span>l</span><span>a</span><span>,</span><span> </span>
               <span>s</span><span>o</span><span>y</span><span> </span>
               <span>D</span><span>a</span><span>y</span><span>a</span><span>m</span><span>a</span><span>r</span><br/>
               <span>D</span><span>e</span><span>s</span><span>a</span> <span>r</span><span>r</span><span>o</span>
               <span>l</span><span>l</span><span>a</span><span>d</span><span>o</span><span>r</span><span>a</span><span> </span>
               <span>w</span><span>e</span><span>b</span><span> </span>
               <span>f</span><span>u</span><span>l</span><span>l</span><span> </span>
               <span>s</span><span>t</span><span>a</span><span>c</span><span>k</span>               
           </section>

            <Social/>
        </div>
    )
}