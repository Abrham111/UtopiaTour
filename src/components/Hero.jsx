import img1 from '../assets/lalibelaa.jpg'

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen" style={{ backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Where Do you wanna visit?
        </h1>
        <h3 className="text-xl md:text-2xl m-7">
          Visit the most famous places with us
        </h3>
      </div>
    </div>
  )
}

export default Hero