import { FaLinkedin, FaTelegram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Searchbar = () => {

  return (
    <div className="flex flex-row justify-between p-2 bg-gray-100">

      <div className="ml-5">
        <h1 className="text-2xl font-bold"><span className="text-green-600">Travel
          </span><span className="text-yellow-600">With</span><span className="text-red-600">UtopiaTour</span></h1>
      </div>

      <div className="flex flex-row justify-between items-center gap-4 mr-5">
        <button onClick={() => window.open('https://x.com/Abrham111A')}>
        <FaXTwitter className="h-5 w-5 text-blue-500" />
        </button>
        <button onClick={() => window.open('https://www.youtube.com/@ChessUtopia_2K')}>
        <FaYoutube className="h-5 w-5 text-red-500" />
        </button>
        <button onClick={() => window.open('https://telegram.com')}>
        <FaTelegram className="h-5 w-5 text-blue-400" />
        </button>
        <button onClick={() => window.open('https://www.linkedin.com/in/abrham-berie-beit/')}>
        <FaLinkedin className="h-5 w-5 text-blue-700" />
        </button>
      </div>

    </div>
  )
}

export default Searchbar;