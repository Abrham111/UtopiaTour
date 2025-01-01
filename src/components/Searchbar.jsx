import { FaLinkedin, FaTelegram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Searchbar = () => {

  return (
    <div className="flex flex-row justify-between p-1 sm:p-2 md:p-2 lg:p-3 xl:p-3 bg-gray-100">
      <div className="ml-2 sm:ml-2 md:ml-3 lg:ml-5 xl:ml-5">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold">
          <span className="text-green-600">Travel</span>
          <span className="text-yellow-600">With</span>
          <span className="text-red-600">UtopiaTour</span>
        </h1>
      </div>
      <div className="flex flex-row justify-between items-center gap-2 sm:gap-2 md:gap-4 lg:gap-4 mr-2 sm:mr-2 md:mr-5 lg:mr-5">
        <button onClick={() => window.open('https://x.com/Abrham111A')}>
          <FaXTwitter className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-blue-500" />
        </button>
        <button onClick={() => window.open('https://www.youtube.com/@ChessUtopia_2K')}>
          <FaYoutube className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-red-500" />
        </button>
        <button onClick={() => window.open('https://telegram.com')}>
          <FaTelegram className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-blue-400" />
        </button>
        <button onClick={() => window.open('https://www.linkedin.com/in/abrham-berie-beit/')}>
          <FaLinkedin className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-blue-700" />
        </button>
      </div>
    </div>
  )
}

export default Searchbar;