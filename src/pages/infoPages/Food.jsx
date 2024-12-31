import { ethiopianFoods } from '../../constants/index';

const Food = () => {

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Foods in Ethiopia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ethiopianFoods.map(food => (
          <div key={food.id} className="food-item bg-white shadow-md rounded-lg overflow-hidden">
            <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{food.name}</h2>
              <p className="text-gray-700">{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;