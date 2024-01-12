import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonClass from '../components/ButtonClass'
import Button from "../components/Button.jsx"
import {useEffect} from "react"

function App() {
  let newTitle = "Vite + React"

  const retrivePageTitle = (data) => {
    newTitle = data
  }

  useEffect(() => {
    document.title = newTitle;
  }, [newTitle])

  const initialCounter = 5;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button count={initialCounter} changePageTitle={retrivePageTitle}/>
        <ButtonClass count={initialCounter}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
