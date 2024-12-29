import './App.css'
import Home from './pages/Home'
import Book from './pages/Book'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
