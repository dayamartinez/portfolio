import Home from './Components/Home';
import './App.css';
import ParticleAnimation from 'react-particle-animation'

function App() {
  return (
    <div >
      <Home /> 
      <ParticleAnimation  
          className='particles'
          numParticles={300}   
          background={{r: 1, g: 1, b: 1, a: 1}}
          lineWidth={0.5}
          particleRadius={0.9}
          particleSpeed={0.8}
          />

          
    </div>
  );
}

export default App;
