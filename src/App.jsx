import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import HomePage from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'



function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </Router> 
    </>
  )
}

export default App
