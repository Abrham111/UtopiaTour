import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Searchbar from "../components/Searchbar"
import Explore from "../pages/Explore"
import PlacesToVisit from "../pages/PlacesToVisit"
import Blog from "../pages/Blog"
import Footer from "../components/Footer"

const Home = () => {

  return (
    <div>
      {/* Search logo and social sites */}
      <div className="fixed top-0 z-50 w-full">
        <Searchbar />
        {/* Top nav */}
        <Navbar />
      </div>
      {/* Hero */}
        <Hero />
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

export default Home
