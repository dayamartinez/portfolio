import React from 'react';
import '../App.css';
import Social from './Social'
import Card from './Card'

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
               
                <Card/>
            </section>
            
            <div className="input-contactme">
                <a href="/contactame" ><h3>- Contáctame -</h3></a>
            </div>
        </div>
    )
}