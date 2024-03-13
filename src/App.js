import React from 'react';
import image1 from './assets/1-image.jpg'; 
import image2 from './assets/2_1.jpg';
import image3 from './assets/3image.jpg';
import image4 from './assets/4THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg';
import image5 from './assets/5miro_hero_building_exterior_2000x1125.avif';
import image6 from './assets/6Instagram_icon.png.webp';
import image7 from './assets/7Facebook-Logosu.png';
import image8 from './assets/8LinkedIn_logo_initials.png';
import image9 from './assets/9.jpg';
import image10 from './assets/10download.jpg';
import image11 from './assets/11download.jpg';
import image12 from './assets/12These-are-the-top-markets-for-Thailand-tourism-in-.webp';
import image13 from './assets/13travel-g5834cbbb2_1280-sixteen_nine.jpg';
import image14 from './assets/14images.jpg';
import image15 from './assets/15mice-turizmi.jpg';
import image16 from './assets/16images.jpg';
import image17 from './assets/17.jpg';



function Article({ title, image, description }) {
  return (
    <div className="bg-gray rounded-lg shadow-md hover:shadow-lg ">
      <img src={image} alt={title} className="w-full h-64 rounded-lg object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ArticlesList({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
      {articles.map((article, index) => (
        <Article key={index} title={article.title} image={article.image} description={article.description} />
      ))}
    </div>
  );
}

function App() {
  const articles = [
    {
      title: "Top 10 Must-Visit Beaches Around the World",
      image: image3,
      description: "Discover the most stunning beaches from different corners of the globe."
    },
    {
      title: "Luxurious Hotels for Your Next Getaway",
      image: image2,
      description: "Explore the finest hotels offering unparalleled luxury and comfort."
    },
    {
      title: 'Top 10 Tourist Destinations in 2024',
      image: image5,
      description: "Discover the most stunning beaches from different corners of the globe."
    },
    {image: image15,
      title: 'Luxury Hotels: A Guide to the Best Accommodations',
      description: "Explore the finest hotels offering unparalleled luxury and comfort."
    },
    {image: image10,
      title: 'Hidden Gems: Unexplored Places to Visit',
      description: "Explore the finest hotels offering unparalleled luxury and comfort."
    },
    {
      title: "Top 10 Must-Visit Beaches Around the World",
      image: image4,
      description: "Discover the most stunning beaches from different corners of the globe."
    },
    {
      title: "Luxurious Hotels for Your Next Getaway",
      image: image13,
      description: "Explore the finest hotels offering unparalleled luxury and comfort."
    },
    {
      title: "Luxurious Hotels for Your Next Getaway",
      image: image12,
      description: "Explore the finest hotels offering unparalleled luxury and comfort."
    },
    {image: image14,
      title: 'Top 10 Tourist Destinations in 2024',
      description: "Discover the most stunning beaches from different corners of the globe."
    },
    {
      image: image15,
      title: 'Luxury Hotels: A Guide to the Best Accommodations',
      description: "Discover the most stunning beaches from different corners of the globe."
    },
    {
      title: "Luxurious Hotels for Your Next Getaway",
      image: image16,
      description: "Explore the finest hotels offering unparalleled luxury and comfort."
    },
    {
      image: image17,
      title: 'Top 10 Tourist Destinations in 2024',
      description: "Discover the most stunning beaches from different corners of the globe."
  },
    
 
  ];
  return (
    <div className="App bg-gray-200 min-h-screen">
      <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-8">
        <div className="headerDiv flex justify-between items-center ">
        <h1 className="text-2xl font-bold cursor-pointer ">2rism</h1>
        <nav className="">
          <ul className="flex gap-10">
            <li className="mr-4"><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
            <li className="mr-4"><a href="#about" className="text-white hover:text-gray-300">About</a></li>
            <li className="mr-4"><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        </div>
       
      </header>
      <section id="home" className="mt-8 flex justify-center font-c">
          <h2 className="text-4xl font-bold">Discover The Most Engaging Places</h2>
        </section>
      <main className="container mx-auto mt-8 px-4">
        <section id="home" className="mb-8">
          <h2 className="text-2xl font-bold">Popular Destinations</h2>
        </section>


         
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
            <img src={image1} alt="Image 1" className="w-full h-64 rounded-lg object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bora Bora</h3>
              <p>Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
            <img src={image2} alt="Image 1" className="w-full h-64 rounded-lg object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Eifel Tower</h3>
              <p>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
            <img src={image3} alt="Image 1" className="w-full h-64 rounded-lg object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Colosseum</h3>
              <p>The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
            <img src={image3} alt="Image 1" className="w-full h-64 rounded-lg object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Colosseum</h3>
              <p>The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
            <img src={image1} alt="Image 1" className="w-full h-64 rounded-lg object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bora Bora</h3>
              <p>Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg">
            <img src={image2} alt="Image 1" className="w-full h-64 rounded-lg object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Eifel Tower</h3>
              <p>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.</p>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-5">
          <h1 className="text-5xl font-bold">Hotels & Apartments</h1>
        </div>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 md:gap-20 m-4 sm:m-8 lg:m-20">
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl">
    <img
      className="w-full h-96 mb-4 rounded-lg"
      src={image4}
      alt="High Card Image"
    />
    <div className="text-gray-800">
      <h2 className="text-xl font-semibold mb-2">Hotels</h2>
      <p className="text-sm leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Read More
      </button>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl">
    <img
      className="w-full h-96 mb-4 rounded-lg"
      src={image5}
      alt="High Card Image"
    />
    <div className="text-gray-800">
      <h2 className="text-xl font-semibold mb-2">Apartments</h2>
      <p className="text-sm leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Read More
      </button>
    </div>
  </div>
</div>

 
    <section id="articles" className="mb-8">
      <h2 className="text-2xl font-bold">Featured Articles</h2>
    </section>

    <ArticlesList articles={articles} />


        
      </main>

      <footer className="bg-gradient-to-r from-sky-500 to-indigo-500 py-4 flex items-center ">
  <div className="container mx-auto">
    <div className="flex justify-between px-24 ">
      <ul className="flex mt-8">
        <li className="mr-4"><a href="/terms" className="text-white hover:text-gray-300">Terms and Conditions</a></li>
        <li><a href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</a></li>
      </ul>

      <div className="text-center mt-1">
      <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
      <form className="">
        <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-md" />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-r-md">Subscribe</button>
      </form>
    </div>
      <div className="flex mt-8 ">
        <img src={image6} alt="Logo 2" className="h-8  cursor-pointer" />
        <img src={image7} alt="Logo 2" className="h-8  cursor-pointer" />
        <img src={image8} alt="Logo 1" className="h-8 mr-4  cursor-pointer" />
        <img src={image9} alt="Logo 2" className="h-8  cursor-pointer" />
        
      
      </div>

      
    </div>
    
  </div>
</footer>


    </div>
  );
}

export default App;
