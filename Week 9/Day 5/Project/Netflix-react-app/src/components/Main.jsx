import {Container, Row} from "react-bootstrap"
import Gallery from "./Gallery"
import Dropdown from 'react-bootstrap/Dropdown';
import iconsHeader from "../assets/icons_header.png"

function Main() {
    return (
        <Container fluid>
            <Row  className="d-flex">
                <div className="col-10 d-flex gap-3">
                    <h2 className="text-white">TV shows</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline" className="text-white border" id="dropdown-basic">
                            Genres
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bg-dark">
                            <Dropdown.Item className="text-white">Action</Dropdown.Item>
                            <Dropdown.Item className="text-white">Comedy</Dropdown.Item>
                            <Dropdown.Item className="text-white">Thriller</Dropdown.Item>
                            <Dropdown.Item className="text-white">Horror</Dropdown.Item>
                            <Dropdown.Item className="text-white">Romantics</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col">
                    <img src={iconsHeader} alt="" />
                </div>
            </Row>
            <Row>
                <h4 className="text-white mt-4">Disney</h4>
                <Gallery search={"disney"} look={"ok"}/>
            </Row>
            <Row>
                <h4 className="text-white mt-4">Dreamworks</h4>
                <Gallery search={"dreamworks"}/>
            </Row>
            <Row>
                <h4 className="text-white mt-4">Pixar</h4>
                <Gallery search={"pixar"}/>
            </Row>
        </Container>
    )
}

export default Main 