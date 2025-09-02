import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import Collab from './pages/Collab/Collab.jsx'
import Mentoring from './pages/Mentoring/Mentoring.jsx'
import StudyHub from './pages/StudyHub/StudyHub.jsx'
import NavBar from "./components/NavBar.jsx"

function App() {

  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/collab' element={<Collab/>}></Route>
          <Route path='/mentoring' element={<Mentoring/>}></Route>
          <Route path='/study-hub' element={<StudyHub/>}></Route>
        </Routes>
      </Router>
      <h1>NIS Connect</h1>
    </>
  )
}

export default App
