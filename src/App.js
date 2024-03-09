import React from 'react';
import image1 from './assets/1-image.jpg'; 
import image2 from './assets/2_1.jpg';
import image3 from './assets/3image.jpg';

function App() {
  return (
    <div className="App">
      <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-8">
        <div className="headerDiv flex justify-between items-center ">
        <h1 className="text-2xl font-bold">2rism</h1>
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
          <h2 className="text-2xl font-bold">Popular Destionations</h2>
        </section>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md">
          <img src={image1} alt="Image 1" className="w-full h-64 rounded-lg   object-cover" />
              <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Bora Bora</h3>
            <p>Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.</p>
              </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
          <img src={image2} alt="Image 1" className="w-full h-64  rounded-lg  object-cover" />
              <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Eifel Tower</h3>
            <p>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.</p>
              </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
          <img src={image3} alt="Image 1" className="w-full h-64  rounded-lg  object-cover" />
              <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Colosseum</h3>
            <p>The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy</p>
              </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
          <img src={image3} alt="Image 1" className="w-full h-64  rounded-lg  object-cover" />
              <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Colosseum</h3>
            <p>The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy</p>
              </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
          <img src={image1} alt="Image 1" className="w-full h-64 rounded-lg   object-cover" />
              <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Bora Bora</h3>
            <p>Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.</p>
              </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
          <img src={image2} alt="Image 1" className="w-full h-64  rounded-lg  object-cover" />
              <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Eifel Tower</h3>
            <p>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.</p>
              </div>
          </div>
          
        </div>


        
      </main>

      <footer className="bg-gradient-to-r from-sky-500 to-indigo-500 py-4 mt-8">
        <ul className="flex justify-center">
          <li className="mr-4"><a href="/terms" className="text-white hover:text-gray-300">Terms and Conditions</a></li>
          <li><a href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</a></li>
        </ul>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
          <form className="mt-2 flex justify-center">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-md" />
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-r-md">Subscribe</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
