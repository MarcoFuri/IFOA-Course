// import Button from "react-bootstrap/Button"
import './App.css'
// import List from './components/lists'
import CardCustom from "./components/CardCustom"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <>
    {days.map((day, index) => {
      <CardCustom day={day} index={index}></CardCustom>
    })

    }
    </>
  )
}

export default App
