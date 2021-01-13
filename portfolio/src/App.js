import React from 'react'
import {Route} from 'react-router-dom';
import Home from './Components/Home'
import Contactme from './Components/Contactme'
import Bar from './Components/Bar'
import Work from './Components/Works'
import './App.css';
import ParticleAnimation from 'react-particle-animation'

function App() {
  return (
    <div > 
       <Bar/>
      <ParticleAnimation  
          className='particles'
          numParticles={150}
          // color={{r: 245, g: 30, b: 102, a: 245}}  
          color={{r: 255, g: 255, b: 255, a: 255}}  
          background={{r: 1, g: 1, b: 1, a: 1}}
          lineWidth={0.3}
          particleRadius={0.8}
          particleSpeed={0.5}
        />
      <Route exact path='/' component={Home} />
      <Route path='/contactame' component={Contactme} />
      <Route path='/trabajos' component={Work} />
      
    
    </div>
  );
}

export default App;
