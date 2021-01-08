import Home from './Components/Home';
import './App.css';
import ParticleAnimation from 'react-particle-animation'

function App() {
  return (
    <div >
      <Home /> 
      <ParticleAnimation  
          className='particles'
          numParticles={150}
          color={{r: 255, g: 255, b: 255, a: 255}}  
          background={{r: 1, g: 1, b: 1, a: 1}}
          lineWidth={0.3}
          particleRadius={0.8}
          particleSpeed={0.5}
          />
    </div>
  );
}

export default App;
