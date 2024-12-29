import React from 'react'

const PlacesToVisit = () => {
  return (
    <section className="w-full max-w-2xl">
      <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
        <img src="/path/to/city-icon.png" alt="City" className="w-12 h-12 mr-4" />
        <div className='pt-16'>
          <h3 className="text-xl font-semibold">City Tours</h3>
          <p className="text-gray-700">Experience the vibrant life of the city with our exclusive city tours.</p>
        </div>
      </a>
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600 underline">Places to Visit</h2>
      <div className="space-y-4">
        <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
          <img src="/path/to/paris-icon.png" alt="Bahir dar" className="w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Bahir Dar</h3>
            <p className="text-gray-700">The city of Tana awaits you with its stunning view and rich history.</p>
          </div>
        </a>
        <a href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center">
          <img src="/path/to/bali-icon.png" alt="TisAbay" className="w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Tis Abay</h3>
            <p className="text-gray-700">Explore the beautiful Waterfall and vibrant culture of the society.</p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default PlacesToVisit