import { ethiopianHolidays } from '../../constants/index';

const Holiday = () => {

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Holidays in Ethiopia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ethiopianHolidays.map(holiday => (
          <div key={holiday.id} className="holiday-item bg-white shadow-md rounded-lg overflow-hidden">
            <img src={holiday.image} alt={holiday.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{holiday.name}</h2>
              <p className="text-gray-700">{holiday.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Holiday;