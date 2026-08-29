import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ProjectContext from './context/ProjectContext'

function App() {

  return (
    <>
      <ProjectContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Navbar />
        </Router>
      </ProjectContext>
    </>
  )
}

export default App
