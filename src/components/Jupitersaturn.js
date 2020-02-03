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

const Jupitersaturn = () => {
  return (
  <div>
    <div class="row">
  <div class="column1">
    <div class="card1">
      <Reveal left>
      <h4>Jupiter</h4>
      </Reveal>
    <img class='jupitertrans' src={jupitert} alt="jupiter" title='Jupiter'/>
    <Reveal left>
    <p>Your weight on Jupiter : <p id="jupiterp" style={{color:'white'}}></p></p>
    <p>Your age on Jupiter :<p id="jupiter-age-p" style={{color:'white'}}></p></p>
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
        
      <li>Jupiter has the shortest day of the eight planets.</li>
      <li>Jupiter has at least 67 moons in satellite around the planet.</li>
      <li>upiter is the only planet that has a center of mass with the Sun that lies outside the volume of the Sun.</li>
      <li>Eight spacecraft have visited Jupiter so far.</li>
      <li>Jupiter does not experience seasons like other planets such as Earth and Mars.</li>
      <li>The largest of Jupiter’s moons, Ganymede is the largest moon in the solar system. </li>
      
      </ul>
      </Reveal>
      <br />
      <Reveal left>
      <p >|Orbit Period : 4,332.82 Earth days</p>
      <p >|Gravity : 24.79 m/s²</p>
      <p >|Mass : 1,898,130,000,000,000,000 billion kg </p>
      <p >|Diameter : 142,984 km   </p>
      </Reveal >
    </div>
  </div>
</div>
<div class="row">
  <div class="column3">
    <div class="card2">
    <Reveal right>
    <h4>Saturn</h4>
      <h5>Facts</h5>
      </Reveal>
      <Reveal right cascade>
      <ul>
        
      <li>Saturn gives off more energy than it receives from the Sun.</li>
      <li>Saturn has the fastest winds of any other planet in our solar system. </li>
      <li>Saturn is the least dense planet in the solar system.</li>
      <li>Saturn has 150 moons and smaller moonlets. </li>
      <li>Saturn has oval shaped storms which are similar to those of Jupiter.  </li>
      <li>It takes Saturn 29.4 Earth years to orbit the Sun.</li>
      <li>Saturn has been visited by four spacecraft.</li>
      
      </ul>
      </Reveal>
      <br />
      <Reveal right>
      <p >|Orbit Period : 10,755.70 Earth days</p>
      <p >|Gravity : 10.44 m/s²</p>
      <p >|Mass : 	568,319,000,000,000,000 billion kg </p>
      <p >|Diameter : 120,536 km   </p>
      </Reveal >

    </div>
  </div>

  <div class="column4">
    <div class="card1">
    <Reveal right>
      <h4>Saturn</h4>
      </Reveal>
    <img class='saturntrans' src={saturnt} alt="saturn" title='Saturn'/>
    <Reveal right>
    <p>Your weight on Saturn :<p id="saturnp" style={{color:'white'}}></p></p>
    <p>Your age on Saturn :<p id="saturn-age-p" style={{color:'white'}}></p></p>
    </Reveal>
    </div>
  </div>
</div>
</div>




  );
}

export default Jupitersaturn;