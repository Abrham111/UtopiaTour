import gondar from '../assets/gondor1.jpg'
import StackedImages from '../components/StackedImages';
import { imageUrls } from '../constants/images';
import adventure from '../assets/ethiopia-travel.jpg';
import holiday from '../assets/Meskel.jpg';
import nature from '../assets/simien7.jpg';
import food from '../assets/EtFood.jpg';

const Explore = () => {

  return (
    <div className="p-3 md:p-6 bg-blue-400 flex flex-col items-center" style={{ backgroundImage: `url(${gondar})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

      <section className="mb-5 mt-5 md:mb-8 md:mt-8">
        <h2 className="text-sm md:text-2xl font-semibold md:mb-4 text-center text-blue-600">See Enjoy Experience</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-2 md:gap-5">
          <a href="/adventure" className="flex flex-col items-center bg-blue-400 p-2 md:p-4 rounded-lg shadow-md">
            <img src={adventure} alt="Adventure" className="w-full h-16 md:h-24 lg:h-32 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
            <span className="text-lg font-semibold">Adventure</span>
          </a>
          <a href="/holiday" className="flex flex-col items-center bg-blue-400 p-4 rounded-lg shadow-md">
            <img src={holiday} alt="Holiday" className="w-full h-16 md:h-24 lg:h-32 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
            <span className="text-lg font-semibold">Holiday</span>
          </a>
          <a href="/nature" className="flex flex-col items-center bg-blue-400 p-4 rounded-lg shadow-md">
            <img src={nature} alt="Nature" className="w-full h-16 md:h-24 lg:h-32 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
            <span className="text-lg font-semibold">Nature</span>
          </a>
          <a href="/food" className="flex flex-col items-center bg-blue-400 p-4 rounded-lg shadow-md">
            <img src={food} alt="Food" className="w-full h-16 md:h-24 lg:h-32 object-cover rounded-md mb-2 transition-transform duration-300 hover:scale-105" />
            <span className="text-lg font-semibold">Food</span>
          </a>
        </div>
      </section>

      {/* Featured Explore */}
      <section className="mt-12 md:mt-24 lg:mt-32 mb-8 w-full">
        <div className="space-y-1 md:space-y-3 lg:space-y-4">
          <StackedImages images={imageUrls} />
          <img src="../src/assets/simien7.jpg" alt="Mountains" className="w-16 h-20 md:w-44 md:h-36 lg:w-52 lg:h-44 lg:ml-4" />
          <div>
            <h3 className="text-sm md:text-xl font-semibold">Explore beautiful places</h3>
            <p className="font-semibold">Discover the beauty of Nature<br/> with our guided tours.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Explore;
