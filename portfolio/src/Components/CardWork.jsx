import React from 'react';
import '../App.css'

export default function MediaCard({imag, tit, name, url, text, icon}) {

  return (
    <div className='cardwork'>
        <img  src={imag} alt={tit} 
              style={{height: '160px', width: '210px'}} />
        <h3>{name}</h3>
        <a  target='blanck' href={url} 
            style={{textDecoration: 'none'}}>   
            <button style={{display: 'flex', justifyContent: 'center', border: '1px solid rgb(245, 30, 102)', padding: '8px 25px', backgroundColor: 'transparent',
                            marginBottom: '0px',  fontSize: '15px', color: 'rgb(245, 30, 102)'}} >
                    {text} {icon}
            </button>      
        </a>
    </div>    
  );
}