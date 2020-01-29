import React from 'react';

function converter() {
    
        var y = document.getElementById("id1").value;
        if (y == 0)
        {
            alert("Enter a number!")
        }
         else {
         var x = y*0.38;
         
         document.getElementById("mercuryp").innerHTML = x.toFixed(2)+'Kg';
           var x = y*0.91;
         
         document.getElementById("venusp").innerHTML = x.toFixed(2)+'Kg';
           var x = y*1;
         
         document.getElementById("earthp").innerHTML = x.toFixed(2)+'Kg';
        
           var x = y*0.38;
         
         document.getElementById("marsp").innerHTML = x.toFixed(2)+'Kg';
         
           var x = y*2.34;
         
         document.getElementById("jupiterp").innerHTML = x.toFixed(2)+'Kg';
        
           var x = y*0.93;
         
         document.getElementById("saturnp").innerHTML = x.toFixed(2)+'Kg';
         
         var x = y*0.92;
         
         document.getElementById("uranusp").innerHTML = x.toFixed(2)+'Kg';
         
         var x = y*1.12;
         
         document.getElementById("neptunep").innerHTML = x.toFixed(2)+'Kg';
        
         
        
         }

 
}

export default converter;