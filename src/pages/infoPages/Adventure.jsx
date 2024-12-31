import { adventures } from '../../constants/index';

const Adventure = () => {

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Adventures in Ethiopia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adventures.map(adventure => (
          <div key={adventure.id} className="adventure-item bg-white shadow-md rounded-lg overflow-hidden">
            <img src={adventure.image} alt={adventure.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{adventure.name}</h2>
              <p className="text-gray-700">{adventure.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adventure;