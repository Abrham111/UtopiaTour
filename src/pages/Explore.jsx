import img2 from '../assets/gonder1.jpg'
import StackedImages from '../components/StackedImages';

const Explore = () => {

  const imageUrls = [
    "../src/assets/gonder1.jpg",
    "../src/assets/gondor2.jpg",
    "../src/assets/gondor3.jpg",
    "../src/assets/gondor4.jpg",
    "../src/assets/Gondar-Timket.jpg",
  ];

  return (
    <div className="p-6 bg-blue-400 flex flex-col items-center" style={{ backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

      <section className="mb-8 mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">See Enjoy Experience</h2>
        <div className="flex flex-row justify-around items-center gap-5">
          <a href="#" className="flex flex-col items-center bg-blue-400 p-4 rounded-lg shadow-md">
            <img src="../src/assets/ethiopia-travel.jpg" alt="Adventure" className="w-full h-32 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
            <span className="text-lg font-semibold">Adventure</span>
          </a>
          <a href="#" className="flex flex-col items-center bg-blue-400 p-4 rounded-lg shadow-md">
            <img src="../src/assets/Meskel.jpg" alt="Holiday" className="w-full h-32 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
            <span className="text-lg font-semibold">Holiday</span>
          </a>
          <a href="#" className="flex flex-col items-center bg-blue-400 p-4 rounded-lg shadow-md">
            <img src="../src/assets/simien7.jpg" alt="Nature" className="w-full h-32 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
            <span className="text-lg font-semibold">Nature</span>
          </a>
          <a href="#" className="flex flex-col items-center bg-blue-400 p-4 rounded-lg shadow-md">
            <img src="../src/assets/EtFood.jpg" alt="Food" className="w-full h-32 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
            <span className="text-lg font-semibold">Food</span>
          </a>
        </div>
      </section>

      {/* Featured Explore */}
      <section className="mt-32 mb-8 w-full">
        <div className="space-y-4">
          <StackedImages images={imageUrls} />
          <img src="../src/assets/simien7.jpg" alt="Mountains" className="w-52 h-44 ml-4" />
          <div>
            <h3 className="text-xl font-semibold">Explore beatiful places</h3>
            <p className="text-rose-950">Discover the beauty of the mountains with our guided tours.</p>
          </div>

          <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
            <img src="/path/to/city-icon.png" alt="City" className="w-12 h-12 mr-4" />
            <div className='pt-16'>
              <h3 className="text-xl font-semibold">City Tours</h3>
              <p className="text-gray-700">Experience the vibrant life of the city with our exclusive city tours.</p>
            </div>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Explore;
