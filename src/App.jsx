import './App.css'
import Home from './pages/Home'
import Book from './pages/Book'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adventure from './pages/infoPages/Adventure';
import Food from './pages/infoPages/Food';
import Holiday from './pages/infoPages/Holiday';
import Nature from './pages/infoPages/Nature';
import PlacesToVisit from './pages/PlacesToVisit';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  return (
    <Router>
      <div className='scroll-smooth'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/food" element={<Food />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/placestovisit" element={<PlacesToVisit />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
