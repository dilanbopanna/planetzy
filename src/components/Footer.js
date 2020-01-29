import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
   
<footer class="page-footer font-small cyan darken-3">


  <div class="container1">

    <div class="row1">

      <div class="col-md-12  py-5">
        <div class="mb-5 flex-center">

       
          <a class="tw-ic" href='https://twitter.com/bopannamj' target='_blank' rel="noreferrer noopener">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        
          <a class="gplus-ic" href='https://aboutme.google.com/u/0/?referer=gplus' target='_blank' rel="noreferrer noopener" >
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
    
          <a class="li-ic" href='https://www.linkedin.com/in/bopannamj4a7a7/' target='_blank' rel="noreferrer noopener">
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
     
          <a class="ins-ic" href='https://www.instagram.com/dilanbopanna_/' target='_blank' rel="noreferrer noopener">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
       
        </div>
      </div>
     

    </div>

  </div>
 
  <div class="footer-copyright text-center py-3">Website created by:
    <a href=""> Dilan Bopanna</a>
  </div>
  

</footer>

  );
}

export default Footer;