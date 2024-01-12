import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/Jumbotron'
import {Container, Row} from "react-bootstrap"
import AllTheBooks from './components/AllTheBooks'
import FantasyBooks from "./books/fantasy.json"
// import Button from "react-bootstrap/Button"
import AllButtons from './components/AllButtons'
// import {useState} from "react-bootstrap"

function App() {
  
  // const [list, setList] = useState([FantasyBooks])
  let currentBooks = FantasyBooks
  
  return (
    <>
      <MyNav />
      <MyJumbotron />
      <Container>
        <Row className="d-flex justify-content-center">
          <AllButtons />
        </Row>
        <Row className="gap-5">
          <AllTheBooks books={currentBooks}/>
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
