import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'Top 5 places you should visit in Ethiopia',
      description: 'Ethiopia is a land of breathtaking landscapes, rich history, and unique cultural heritage. From its historical treasures to its stunning national parks, Ethiopia offers a diverse array of attractions that captivate travelers from all over the world...',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      title: 'Historical places in Ethiopia',
      description: 'Ethiopia boasts an abundance of historical sites that span millennia.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      title: 'National Parks in Ethiopia',
      description: 'For nature enthusiasts, Ethiopia offers a variety of national parks that showcase the country\'s biodiversity and stunning landscapes',
      image: 'https://via.placeholder.com/150',
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <a href={post.link} className="text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;