import React from 'react';

function age() {
    
        var age = document.getElementById("id2").value;
        if (age  == 0)
        {
            alert("Enter your age!")
        }
         else {
         var earth_days = age * 365;
         var x = earth_days / 88;
         document.getElementById("mercury-age-p").innerHTML = x.toFixed(0);
         var earth_days = age * 365;
         var x = earth_days / 225;
         document.getElementById("venus-age-p").innerHTML = x.toFixed(0);
         var earth_days = age * 365;
         var x = earth_days / 225;
         document.getElementById("earth-age-p").innerHTML = age;
         var earth_days = age * 365;
         var x = earth_days / 687;
         document.getElementById("mars-age-p").innerHTML = x.toFixed(0);
         var x = age / 12;
         document.getElementById("jupiter-age-p").innerHTML = x.toFixed(0);
         var x = age / 29.5;
         document.getElementById("saturn-age-p").innerHTML = x.toFixed(1);
         var x = age / 84;
         document.getElementById("uranus-age-p").innerHTML = x.toFixed(1);
         var x = age / 165;
         document.getElementById("neptune-age-p").innerHTML = x.toFixed(2);

         }

 
}

export default age;