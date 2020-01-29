import React from 'react';
import earth from '../assests/planetpics/earth.png';
import mercury from '../assests/planetpics/mercury.png';
import venus from '../assests/planetpics/venus.png';
import mars from '../assests/planetpics/mars.png';
import jupiter from '../assests/planetpics/jupiter.png';
import saturn from '../assests/planetpics/saturn.png';
import uranus from '../assests/planetpics/uranus.png';
import neptune from '../assests/planetpics/neptune.png';
import pluto from '../assests/planetpics/pluto.png';
import sun from '../assests/planetpics/sun.png';
import Reveal from 'react-reveal/Reveal';


const Planets = () => {
    return (
        
        <div class='planet-main'>
            
            <img class='sun-img' src={sun} alt="sun"/>

            
         
            <img class='mercury-img' src={mercury} alt="mercury" title='Mercury'/>
            <img class='venus-img' src={venus} alt="venus"title='Venus'/>
            <img class='earth-img' src={earth} alt="earth"title='Earth'/>
            <img class='mars-img' src={mars} alt="mars"title='Mars'/>
            <img class='jupiter-img' src={jupiter} alt="jupiter"title='Jupiter'/>
            <img class='saturn-img' src={saturn} alt="saturn"title='Saturn'/>
            <img class='uranus-img' src={uranus} alt="uranus"title='Uranus'/>
            <img class='neptune-img' src={neptune} alt="neptune"title='Neptune'/>
            <img class='pluto-img' src={pluto} alt="pluto"title='Pluto'/>
           
            <p id="mercury-p" style={{color:'white'}}></p>
            <p id="venus-p" style={{color:'white'}}></p>
            <p id="earth-p" style={{color:'white'}}></p>
            <p id="mars-p" style={{color:'white'}}></p>
            <p id="jupiter-p" style={{color:'white'}}></p>
            <p id="saturn-p" style={{color:'white'}}></p>
            <p id="uranus-p" style={{color:'white'}}></p>
            <p id="neptune-p" style={{color:'white'}}></p>
            <p id="pluto-p" style={{color:'white'}}></p>
       
           
          
        </div>
        
    );
    }

export default Planets;    