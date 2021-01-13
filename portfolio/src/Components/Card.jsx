import React, {useState} from 'react'; 
import silueta from '../Images/silueta.jpg'
import me from '../Images/dj1.jpeg'
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

export default function Bar() {
  const [auth, setAuth] = useState(false);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div className='card'>
        <FormGroup>
            <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            //    label={auth ? 'hello' : 'Login'}
            />
        </FormGroup>
 
        <Toolbar>
          {auth ? 
                <div>
                    <img src={me} alt="imagen silueta" width='200px' height='200px' style={{borderRadius: '100px', padding: '2px'}}/>                  
                </div> : 
                <div> 
                    <img src={silueta} alt="imagen silueta" width='200px' height='200px' style={{borderRadius: '100px', padding: '2px'}}/> 
                </div> 
            } 
        </Toolbar>      
    </div>
  );
}