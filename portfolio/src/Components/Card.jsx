import React from "react"
import lacasa from './7.jpg'

export default function card(){
    return (
        <div id='container'>
            <div class="container">
                <div class="card">    
                    <div class="l front">                   
                    <   img src={lacasa} width="80px" height="80px"/>     
                    </div>
                
                    <div class="l back">                 	
                    </div>	    
                </div>
            </div>

            <div class="container">
                <div class="card">    
                    <div class="l front">                   
                    <   img src={lacasa} width="80px" height="80px"/>     
                    </div>
                
                    <div class="l back">                 	
                    </div>	    
                </div>
            </div>
        </div>
      
    )
}