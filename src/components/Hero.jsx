import img from '../assets/lalibela.jpg'

const Hero = () => {

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen bg-cover animate-moveUpDown" style={{ backgroundImage: `url(${img})`}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4 sm:p-2">
        <h1 className="text-sm lg:text-7xl md:text-6xl sm:text-xl font-extrabold mb-6 animate-fadeIn tracking-wide leading-tight">
          Where Do You Wanna Visit?
        </h1>
        <h3 className="text-xs md:text-3xl sm:text-xl m-2 md:m-7 sm:m-3 animate-fadeIn delay-1s font-light tracking-wider">
          Visit the most famous places with us
        </h3>
        <button onClick={()=>{window.location.href = '/book'}} className="mt-5 md:mt-8 sm:mt-4 md:px-8 md:py-5 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out animate-fadeIn delay-2s">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Hero