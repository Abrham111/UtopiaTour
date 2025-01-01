import React from 'react'
import { places } from '../constants/index'
const PlacesToVisit = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-semibold mb-4 mt-7 text-center text-blue-600">Places to Visit</h2>

      <div className='flex flex-col justify-between'>
        {places.map((place, index) => (
          <div key={index} className="flex md:flex-row flex-col items-center mb-8">
            <div className="p-4 bg-white rounded-lg flex flex-1 items-center w-[60%] h-96">
              <img src={place.image} alt={place.name} className="h-full w-full object-cover rounded-md" />
            </div>
            <div className="p-4 bg-white rounded-lg flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-center">{place.name}</h3>
              <p className="text-gray-700 p-5">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlacesToVisit