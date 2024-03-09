import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white py-4 px-8">
        <div className="headerDiv flex justify-between items-center">
        <h1 className="text-2xl font-bold">Temporary Web Name</h1>
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

      <main className="container mx-auto mt-8 px-4">
        <section id="home" className="mb-8">
          <h2 className="text-2xl font-bold">Home</h2>
          <p>Welcome to our website! We provide amazing services to our clients.</p>
        </section>

      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
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
