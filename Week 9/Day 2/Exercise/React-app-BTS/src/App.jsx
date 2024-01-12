import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/Jumbotron'
import {Container, Row} from "react-bootstrap"
import AllTheBooks from './components/AllTheBooks'


function App() {

  
  return (
    <>
      <MyNav />
      <MyJumbotron />
      <Container>
        <Row className="gap-5">
          <AllTheBooks />
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
