import './App.css'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import Explore from './pages/Explore'
import Home from './pages/Home'
import PlacesToVisit from './pages/PlacesToVisit'

function App() {
  
  return (
    <div>
      {/* Home */}
      <Home />
      {/* Catagory */}
      {/* Featured Explore */}
      <Explore />
      {/* Places to visit */}
      <PlacesToVisit />
      {/* Blogs */}
      <Blog />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
