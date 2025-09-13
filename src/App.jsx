import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import Collab from './pages/Collab/Collab.jsx'
import Mentoring from './pages/Mentoring/Mentoring.jsx'
import StudyHub from './pages/StudyHub/StudyHub.jsx'
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
function App() {

  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/collaborations' element={<Collab/>}></Route>
          <Route path='/mentorship' element={<Mentoring/>}></Route>
          <Route path='/study-hub' element={<StudyHub/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
