import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNav() {
  return (
    <Navbar className="bg-dark">
      <Container>
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#">Home</Nav.Link>
            <Nav.Link className="text-white" href="#">About</Nav.Link>
            <Nav.Link className="text-white" href="#">Browse</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;