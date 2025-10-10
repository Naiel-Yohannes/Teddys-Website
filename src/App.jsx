import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Stays from './Components/Stays'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/stays' element={<Stays/>}/>
      </Routes>
    </>
  )
}

export default App