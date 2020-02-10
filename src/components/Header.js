import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../assests/planetpics/logo.png';


class Header extends React.Component {


  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar class="navbar"color="indigo" dark expand="md" fixed="top">
              <MDBNavbarBrand className='header-tg'>
              <img class='logo-img' src={logo} alt="logo"/>
                <strong>Planetzy</strong>
              </MDBNavbarBrand>
              <MDBNavbarNav right>
                  <MDBNavItem active>
                  
                        <a class= 'contact-link' href="mailto:bopannamj@gmail.com" style={{position:"relative",paddingLeft:'30px'}}>
                            Contact
                            </a>
                       {/* <svg class='svg-dot' width="40" height="32">
  <rect x="10" y="10" rx="10" ry="10" width="10" height="10"
  style={{fill:'red'},{stroke:'black'},{width:'5'},{opacity:'0.5'}} />
</svg> */}
                       
                  </MDBNavItem>
                  </MDBNavbarNav>
       
            </MDBNavbar>
          </Router>

          <MDBView src="https://images2.alphacoders.com/606/thumb-1920-606913.png">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <div class="Iam">

                <p>Explore </p>
                <b>
                <div class="innerIam">
                Planets<br /> 
                Universe<br />
                Weights<br />
                Age<br />
                Yourself
            </div>
                </b>

            </div>

            </MDBMask>
          </MDBView>
        </header>

      </div>
    );
  }
}

export default Header;