import React from 'react'

const places = [
  {
    name: "Bahir Dar",
    image: "../src/assets/Bahir-Dar-City.jpg",
    description: `The city of Bahir Dar awaits you with its stunning view and rich history.
      Positioned on the southern shore of Lake Tana, the largest lake in Ethiopia,
      Bahir Dar is a gateway to breathtaking natural and historical wonders.
      These majestic waterfalls, just 30 kilometers away, are a popular attraction,
      offering a stunning spectacle and opportunities for hiking.
      The tranquil waters of Lake Tana, dotted with ancient island monasteries dating back to the 14th century,
      provide visitors with an immersive experience into Ethiopia's rich Orthodox Christian heritage.

      Beyond its natural beauty, Bahir Dar is a thriving hub for culture and commerce in Ethiopia.
      The city boasts a lively atmosphere, with bustling markets, colorful traditional clothing, and a vibrant food scene
      featuring local delicacies like "Injera" and spicy stews.
      Whether exploring the cultural landmarks, cruising the serene Lake Tana, or engaging with the friendly locals,
      Bahir Dar offers an unforgettable blend of history, nature, and modernity, making it a must-visit destination for travelers and a source of pride for Ethiopians.`
  },
  {
    name: "Lalibela",
    image: "../src/assets/lalibela.jpg",
    description: `Lalibela, a UNESCO World Heritage Site in northern Ethiopia,
      is renowned for its extraordinary rock-hewn churches, a testament to the architectural and spiritual
      legacy of the Zagwe dynasty. These churches, carved directly into the volcanic rock in the 12th and 13th
      centuries, were constructed as a "New Jerusalem" for Ethiopian Orthodox Christians. The complex comprises 11
      monolithic and semi-monolithic churches, intricately designed and interconnected through an underground network
      of tunnels and passageways. Among the most iconic structures is the Church of St. George (Bet Giyorgis), carved
      in the shape of a Greek cross and considered a masterpiece of Ethiopian rock architecture. Each church bears
      unique architectural details, with arched windows, carved pillars, and frescoes, reflecting a blend of
      Byzantine and Aksumite influences. These remarkable edifices remain active places of worship, drawing
      pilgrims and visitors from around the world.

      Beyond its architectural wonders, Lalibela offers a profound spiritual and cultural experience. The town is deeply
      rooted in Ethiopia's Orthodox Christian traditions, and its religious ceremonies and festivals, such as Genna
      (Ethiopian Christmas), provide a glimpse into centuries-old rituals. Surrounding Lalibela, the rugged highlands
      and scenic landscapes enhance the allure of the area, offering opportunities for trekking and exploring traditional
      Ethiopian villages. Lalibela is not just a historical site but a living testament to the enduring faith and ingenuity
      of its people, making it a must-visit destination for those seeking a connection to Ethiopia's rich heritage and awe-inspiring
      artistry.`
  },
  {
    name: "Gondar",
    image: "../src/assets/gondor.jpg",
    description: `Gondar, often referred to as the "Camelot of Africa," is a city in northern Ethiopia known for its
      impressive collection of medieval castles and churches. Founded by Emperor Fasilides in the 17th century,
      Gondar served as the capital of Ethiopia for over two centuries. The city's most famous landmark is the
      Fasil Ghebbi, a royal enclosure that houses several well-preserved castles, palaces, and churches, each
      showcasing a unique blend of Ethiopian, Portuguese, and Indian architectural styles. The Church of Debre Berhan Selassie,
      with its iconic ceiling adorned with angelic faces, is another must-visit site in Gondar.

      Gondar is also a cultural hub, hosting vibrant festivals such as Timkat (Epiphany), which attracts thousands of
      pilgrims and tourists. The city's rich history, combined with its stunning architecture and lively cultural scene,
      makes Gondar a captivating destination for travelers interested in exploring Ethiopia's royal heritage and traditions.`
  },
  {
    name: "Harar",
    image: "../src/assets/harar.jpg",
    description: `Harar, a UNESCO World Heritage Site, is a historic city in eastern Ethiopia known for its
      ancient walls, narrow alleyways, and rich cultural heritage. Often referred to as the "City of Saints,"
      Harar is considered the fourth holiest city in Islam, with over 80 mosques and numerous shrines. The city's
      old town, known as Jugol, is surrounded by a 16th-century wall and is home to colorful markets, traditional
      Harari houses, and vibrant street life.

      Harar is also famous for its unique tradition of feeding wild hyenas, a practice that has been passed down
      through generations. Visitors can witness this fascinating ritual, which takes place every evening just outside
      the city walls. Harar's blend of Islamic culture, historical significance, and unique traditions make it a
      must-visit destination for those seeking an authentic and immersive experience in Ethiopia.`
  },
  {
    name: "Tis Abay",
    image: "../src/assets/tisabay.jpg",
    description: `Tis Abay, also known as the Blue Nile Falls, is one of Ethiopia's most spectacular natural
      attractions. Located near the town of Bahir Dar, the falls are formed by the Blue Nile River as it plunges
      over a cliff, creating a breathtaking cascade of water. The falls are particularly impressive during the rainy
      season when the river is at its fullest, and the surrounding landscape is lush and green.

      Visitors to Tis Abay can enjoy hiking trails that offer stunning views of the falls and the surrounding
      countryside. The area is also rich in wildlife, with various bird species and monkeys often spotted along the
      trails. Tis Abay is not only a natural wonder but also holds cultural and historical significance, as it has
      been a source of inspiration and reverence for the local communities for centuries. A visit to Tis Abay provides
      a memorable experience of Ethiopia's natural beauty and cultural heritage.`
  }
];

const PlacesToVisit = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-semibold mb-4 mt-7 text-center text-blue-600">Places to Visit</h2>

      <div className='flex flex-col justify-between'>
        {places.map((place, index) => (
          <div key={index} className="flex flex-row items-center mb-8">
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