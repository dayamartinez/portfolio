import React from "react";
import '../App.css';
import Social from "./Social"

export default function Home(){

    return (
        <div className="home" >
           <section id="me" className="me">
               <h1>Dayamar Martínez</h1>
               <h1>Desarrolladora Full Stack</h1>
           </section>

            <Social/>
        </div>
    )
}