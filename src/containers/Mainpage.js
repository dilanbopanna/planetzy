import React from 'react';
import converter from '../components/converter';
import Cards from '../components/Cards';
import Planets from '../components/Planets';
import Slide from 'react-reveal/Slide';
import age from '../components/age';

function Mainpage() {

    return(
  <div class='main'>
      <h1>Enter your weight on earth (in Kg):</h1>
 <form class='calc-form'>     
<input id="id1" type="number" />
</form>
<br/>
<button className="calc-button" onClick={converter}>Calculate</button>

    <Planets />
    <div class='main-age'>
        <h1>Enter your Age:</h1>
        <form class='age-form'>     
        <input id="id2" type="number" />
        </form>
        <br />

<button className="age-button" onClick={age}>Calculate</button>
<br/>


</div>
<br />


  </div>
    );

}

export default Mainpage;