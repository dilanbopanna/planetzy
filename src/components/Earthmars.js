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

const Earthmars = () => {
  return (
  <div>
    <div class="row">
  <div class="column1">
    <div class="card1">
      <Reveal left>
      <h4>Earth</h4>
      </Reveal>
    <img class='earthtrans' src={eartht} alt="earth" title='Earth'/>
    <Reveal left>
    <p>Your weight on Earth : <p id="earthp" style={{color:'white'}}></p></p>
    <p>Your age on Earth :<p id="earth-age-p" style={{color:'white'}}></p></p>
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
        
      <li>Earth is the most dense planet in the solar system.</li>
      <li>The rotation of the Earth is gradually slowing down.</li>
      <li>Earth has a very powerful magnetic field</li>
      <li>Earth’s water was initially trapped within the planet.</li>
      <li>Earth has one of the most circular orbits of all the eight planets.</li>
      <li>The first life on Earth developed in the oceans.</li>
      
      </ul>
      </Reveal>
      <br />
      <Reveal left>
      <p >|Orbit Period : 365.26 Earth days</p>
      <p >|Gravity : 9.807 m/s²</p>
      <p >|Mass : 5,972,190,000,000,000 billion kg </p>
      <p >|Diameter : 12,756 km   </p>
      </Reveal >
    </div>
  </div>
</div>
<div class="row">
  <div class="column3">
    <div class="card2">
    <Reveal right>
      <h5>Facts</h5>
      </Reveal>
      <Reveal right cascade>
      <ul>
        
      <li>The tallest mountain known in the solar system is on Mars.</li>
      <li>Mars experiences huge dust storms – the largest in our solar system. </li>
      <li>The Sun looks about half its size half it does from Earth when seen from Mars.</li>
      <li>With the exception of Earth, Mars is the most hospitable to life. </li>
      <li>Mars was once believed to be home to intelligent life.  </li>
      <li>The landmass of Mars and Earth is very similar.</li>
      <li>Mars is the only other planet besides Earth that has polar ice caps.</li>
      
      </ul>
      </Reveal>
      <br />
      <Reveal right>
      <p >|Orbit Period : 686.98 Earth days</p>
      <p >|Gravity : 3.711 m/s²</p>
      <p >|Mass : 641,693,000,000,000 billion kg </p>
      <p >|Diameter : 6,805 km   </p>
      </Reveal >

    </div>
  </div>

  <div class="column4">
    <div class="card1">
    <Reveal right>
      <h4>Mars</h4>
      </Reveal>
    <img class='marstrans' src={marst} alt="mars" title='Mars'/>
    <Reveal right>
    <p>Your weight on Mars :<p id="marsp" style={{color:'white'}}></p></p>
    <p>Your age on Mars :<p id="mars-age-p" style={{color:'white'}}></p></p>
    </Reveal>
    </div>
  </div>
</div>
</div>




  );
}

export default Earthmars;