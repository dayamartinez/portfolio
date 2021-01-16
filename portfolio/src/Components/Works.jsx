import { Card } from '@material-ui/core'
import React from 'react'
import CardWork from './Cardwork'
import lacasa from '../Images/7.jpg'

export default function Work(){
    return (
        <div className='work'>
            <div >
            <CardWork imag={lacasa} tit='LA CASA' name='LA CASA BAR ' url='https://lacasabaroficial.web.app'/>
            </div> 

            {/* <div >
            <CardWork imag={''} tit='EMPOW CAPITALS' name='EMPOW CAPITALS ' url='https://empowcapitals.com'/>
            </div>  */}

        </div>
        
    )
}