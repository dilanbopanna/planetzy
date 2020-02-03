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
import Earthmars from '../components/Earthmars';
import Jupitersaturn from '../components/Jupitersaturn';
import Uranusneptune from '../components/Uranusneptune';

const Cards = () => {
  return (
    <div class='main-card'>
      <div class='card-text'>
         <div class="row">
  <div class="column1">
    <div class="card1">
      <Reveal left>
      <h4>Mercury</h4>
      </Reveal>
    <img class='mercurytrans' src={mercuryt} alt="mercury" title='Mercury'/>
    <Reveal left>
    <p>Your weight on Mercury : <p id="mercuryp" style={{color:'white'}}></p></p>
    <p>Your age on Mercury :<p id="mercury-age-p" style={{color:'white'}}></p></p>
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
        
      <li>Mercury is only the second hottest planet.</li>
      <li>Only two spacecraft have visted Mercury.</li>
      <li>Mercury has more craters and impact marks that any other planet.</li>
      <li>Mercury has a large iron core that is around 40% of its volume.</li>
      <li>Mercury is the only planet which doesn’t rotate exactly once every year.</li>
      <li>The planet has just 38% of the gravity on Earth.</li>
      
      </ul>
      </Reveal>
      <br />
      <Reveal left>
      <p >|Orbit Period : 87.97 Earth days</p>
      <p >|Gravity : 3.7 m/s²</p>
      <p >|Mass : 330,104,000,000,000 billion kg </p>
      <p >|Diameter : 4,879 km   </p>
      </Reveal >
    </div>
  </div>
</div>
<div class="row">
  <div class="column3">
    <div class="card2">
    <Reveal right>
    <h4>Venus</h4>
      <h5>Facts</h5>
      </Reveal>
      <Reveal right cascade>
      <ul>
        
      <li>The atmospheric pressure of Venus is 92 times stronger than Earth’s.</li>
      <li>The temperature on Venus doesn’t vary much between the night and day.</li>
      <li>Venus is the hottest planet in the solar system with an average surface temperature of 462°C (863°F).</li>
      <li>Venus rotate in the opposite direction to other planets.</li>
      <li>Venus is sometimes called Earth’s sister planet. </li>
      <li>One day on Venus is longer than one year.</li>
      <li>Venus is the second brightest natural object in the sky.</li>
      
      </ul>
      </Reveal>
      <br />
      <Reveal right>
      <p >|Orbit Period : 224.70 Earth days</p>
      <p >|Gravity : 8.87 m/s²</p>
      <p >|Mass : 4,867,320,000,000,000 billion kg </p>
      <p >|Diameter : 12,104 km   </p>
      </Reveal >

    </div>
  </div>

  <div class="column4">
    <div class="card1">
    <Reveal right>
      <h4>Venus</h4>
      </Reveal>
    <img class='venustrans' src={venust} alt="venus" title='Venus'/>
    <Reveal right>
    <p>Your weight on Venus :<p id="venusp" style={{color:'white'}}></p></p>
    <p>Your age on Venus :<p id="venus-age-p" style={{color:'white'}}></p></p>
    </Reveal>
    </div>
  </div>
</div>
      </div>
   
<Earthmars />
<Jupitersaturn />
<Uranusneptune />
</div>



  );
}

export default Cards;