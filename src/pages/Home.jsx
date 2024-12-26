import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Searchbar from "../components/Searchbar"

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
      <div>
        <Hero />
      </div>
    </div>
  )
}

export default Home
