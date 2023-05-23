import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img 
              alt=""
              src="https://i.postimg.cc/X73jhWpp/beach-PNG96.png"
              width="50"
              height="50"
              className="d-inline-block align-top "
            />{' '}
        Beach Paradise         
        </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header