import React from 'react';

const Contact = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
      <div className="max-w-md w-full px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us your message <span className="text-red-600">UtopiaTour</span></h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
            <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your name" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
            <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your email" name="email" id="email" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
            <textarea className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" rows={4} placeholder="Enter your message" name="message" id="message" defaultValue={""} />
          </div>
          <button className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
