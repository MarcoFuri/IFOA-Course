// import FantasyBooks from "../books/fantasy.json"
// import HistoryBooks from "../books/history.json"
// import HorrorBooks from "../books/horror.json"
// import RomanceBooks from "../books/romance.json"
// import SciFiBooks from "../books/scifi.json"
import {Col, Button} from "react-bootstrap"
// import AllTheBooks from "./AllTheBooks"

const AllButtons = () => {
    return (
        <>
            <Col><Button variant="primary" className="my-4">Fantasy</Button></Col>
            <Col><Button variant="danger" className="my-4">Horror</Button></Col>
            <Col><Button variant="warning" className="my-4">History</Button></Col>
            <Col><Button variant="info" className="my-4">Romance</Button></Col>
            <Col><Button variant="success" className="my-4">SciFi</Button></Col>
        </>
)
}

export default AllButtons