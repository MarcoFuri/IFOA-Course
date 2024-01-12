import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import '@fortawesome/fontawesome-free/css/all.css';
import Main from "./components/Main"
import MyFooter from "./components/MyFooter"

function App() {
 
  return (
    <>
      <NavBar/>
      <Main />
      <MyFooter />
    </>
  )
}

export default App
