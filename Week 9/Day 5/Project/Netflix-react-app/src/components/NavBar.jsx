import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/Button"
import logo from "../assets/logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-solid-svg-icons"
import avatar from "../assets/avatar.png"
import kids from "../assets/kids_icon.png"

function NavBar() {
  return (
    <Navbar className="bg-dark w-100 m-0 p-0">
      <Container className="m-0 p-0">
          <Nav className="row w-100 justify-content-around">
            <div className="col-10 d-flex align-items-center">
                <Nav.Link><img style={{width: "80px"}} src={logo} alt="netflix logo"></img></Nav.Link>
                <Nav.Link className="text-light" href="#home">Home</Nav.Link>
                <Nav.Link className="text-light text-nowrap" href="#link">TV Shows</Nav.Link>
                <Nav.Link className="text-light" href="#link">Movies</Nav.Link>
                <Nav.Link className="text-light text-nowrap" href="#link">Recently Added</Nav.Link>
                <Nav.Link className="text-light text-nowrap" href="#link">My List</Nav.Link>
            </div>
            <div className="col-2 d-flex align-items-center">
                <Nav.Link className="text-light" href="#link"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
                <Nav.Link className="text-light" href="#link"><img style={{width: "30px", borderRadius: "4px"}} src={kids} alt="avatar" /></Nav.Link>
                <Nav.Link className="text-light" href="#link"><FontAwesomeIcon icon={faBell} /></Nav.Link>
                <Nav.Link className="text-light" href="#link"></Nav.Link>
                <Dropdown drop="start">
                    <Dropdown.Toggle variant="dark" className="dropdown-menu-end" id="dropdown-basic">
                    <img style={{width: "30px", borderRadius: "4px"}} src={avatar} alt="avatar" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu data-bs-theme="dark">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

