import { FaLinkedin, FaTelegram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState } from 'react';

const Searchbar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-row justify-around items-center p-2 bg-gray-100 shadow-md">

      <div className="m-2 p-1">
        <h1 className="text-2xl font-bold"><span className="text-green-600">Travel
          </span><span className="text-yellow-600">With</span><span className="text-red-600">UtopiaTour</span></h1>
      </div>
      
      <div className="m-2 p-1">
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="p-1 border border-gray-300 rounded-full"
      />
      </div>

      <div className="flex flex-row justify-between items-center gap-4">
        <button onClick={() => window.open('https://twitter.com')}>
        <FaXTwitter className="h-5 w-5 text-blue-500" />
        </button>
        <button onClick={() => window.open('https://youtube.com')}>
        <FaYoutube className="h-5 w-5 text-red-500" />
        </button>
        <button onClick={() => window.open('https://telegram.com')}>
        <FaTelegram className="h-5 w-5 text-blue-400" />
        </button>
        <button onClick={() => window.open('https://linkedin.com')}>
        <FaLinkedin className="h-5 w-5 text-blue-700" />
        </button>
      </div>

    </div>
  )
}

export default Searchbar;