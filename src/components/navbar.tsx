import React from 'react';

import { FaMusic } from 'react-icons/fa';
import {Link} from 'react-router-dom';


function VerticalNavbar() {
  return (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <FaMusic />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column">
          <li className="nav-item">
            <Link to="/" >Discover</Link>
          </li>
          <li className="nav-item">
            <Link to="/around-you" >Around You</Link>
          </li>
          <li className="nav-item">
            <Link to="/top-artists" >Top Artists</Link>
          </li>
          <li className="nav-item">
            <Link to="/top-charts" >Top Charts</Link>
          </li>
        
          
        </ul>
        
      </div>
    </div>
</nav>
    /*<Navbar expand="sm" style={{backgroundColor:'#5E84A7'}}>
      
      <Container fluid className='d-sm-flex flex-sm-row flex-md-column '>
        <FaMusic />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-column">
            <Nav.Link href="#home"><Link to="/" >Discover</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/around-you" >Around You</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/top-artists" >Top Artists</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/top-charts" >Top Charts</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>*/
  );
}

export default VerticalNavbar;