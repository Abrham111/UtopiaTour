import { ethiopianNature } from '../../constants/index';

const Nature = () => {

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Ethiopia! Home of Beautiful Nature</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ethiopianNature.map(nature => (
          <div key={nature.id} className="nature-item bg-white shadow-md rounded-lg overflow-hidden">
            <img src={nature.image} alt={nature.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{nature.name}</h2>
              <p className="text-gray-700">{nature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nature;