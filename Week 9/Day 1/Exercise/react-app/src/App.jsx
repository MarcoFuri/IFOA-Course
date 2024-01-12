import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  const [count, setCount] = useState(0)

  let newButtonText = "Nice job!"
  let imageLink = "https://as2.ftcdn.net/v2/jpg/00/50/02/11/1000_F_50021141_dL8LBnE0zYVcY4MNOsH9eFucRMCHxYtQ.jpg"
  let altImage = "Good job emoji"

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
        <ButtonComponent buttonText={newButtonText}/>
        <ImageComponent link={imageLink} alt={altImage}/>
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
