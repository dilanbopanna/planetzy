import React from "react";
import eartht from '../assests/planetpics/earth-transparent.png';
import mercuryt from '../assests/planetpics/mercury-transparent.png';
import venust from '../assests/planetpics/venus-transparent.png';
import marst from '../assests/planetpics/mars-transparent.png';
import jupitert from '../assests/planetpics/jupiter-transparent.png';
import saturnt from '../assests/planetpics/saturn-transparent.png';
import uranust from '../assests/planetpics/uranus-transparent.png';
import neptunet from '../assests/planetpics/neptune-transparent.png';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';

const Uranusneptune = () => {
  return (
  <div>
    <div class="row">
  <div class="column1">
    <div class="card1">
      <Reveal left>
      <h4>Uranus</h4>
      </Reveal>
    <img class='uranustrans' src={uranust} alt="uranus" title='Uranus'/>
    <Reveal left>
    <p>Your weight on Uranus : <p id="uranusp" style={{color:'white'}}></p></p>
    <p>Your age on Uranus :<p id="uranus-age-p" style={{color:'white'}}></p></p>
    </Reveal>
    </div>
  </div>

  <div class="column2">
    <div class="card2">
      <Reveal left>
      
      <h5>Facts</h5>
      </Reveal>
      <Reveal left cascade>
      <ul>
        
      <li>Uranus rotates on its axis once every 17 hours and 14 minutes.</li>
      <li>A collision may have caused the unusual tilt of Uranus.</li>
      <li>The Voyager 2 is the only spacecraft to have flown by Uranus. </li>
      <li>It takes Uranus 84 Earth days to orbit the Sun.</li>
      <li>The mass of Uranus is about 14.5 times the mass of Earth.</li>
      <li>Uranus is the second least dense planet in the solar system, after Saturn. </li>
      
      </ul>
      </Reveal>
      <br />
      <Reveal left>
      <p >|Orbit Period : 30,687.15 Earth days</p>
      <p >|Gravity : 8.87 m/s²</p>
      <p >|Mass : 86,810,300,000,000,000 billion kg </p>
      <p >|Diameter : 51,118 km   </p>
      </Reveal >
    </div>
  </div>
</div>
<div class="row">
  <div class="column3">
    <div class="card2">
    <Reveal right>
      <h4>Neptune</h4>
      <h5>Facts</h5>
      </Reveal>
      <Reveal right cascade>
      <ul>
        
      <li>Neptune has a storm similar the Great Red Spot on Jupiter. </li>
      <li>Neptune also has a second storm called the Small Dark Spot. </li>
      <li>Neptune spins very quickly on its axis.</li>
      <li>The climate on Neptune is extremely active. </li>
      <li>Neptune has an average surface temperature of -214°C  </li>
      <li>Neptune was discovered by Jean Joseph Le Verrier.</li>
      <li>Only one spacecraft, the Voyager 2, has flown past Neptune.</li>
      
      </ul>
      </Reveal>
      <br />
      <Reveal right>
      <p >|Orbit Period : 60,190.03 Earth days</p>
      <p >|Gravity : 11.15 m/s²</p>
      <p >|Mass : 	102,410,000,000,000,000 billion kg </p>
      <p >|Diameter : 49,528 km  </p>
      </Reveal >

    </div>
  </div>

  <div class="column4">
    <div class="card1">
    <Reveal right>
      <h4>Neptune</h4>
      </Reveal>
    <img class='neptunetrans' src={neptunet} alt="neptune" title='Neptune'/>
    <Reveal right>
    <p>Your weight on Neptune :<p id="neptunep" style={{color:'white'}}></p></p>
    <p>Your age on Neptune :<p id="neptune-age-p" style={{color:'white'}}></p></p>
    </Reveal>
    </div>
  </div>
</div>
</div>




  );
}

export default Uranusneptune;