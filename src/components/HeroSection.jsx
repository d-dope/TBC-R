import image1 from '../assets/1-image.jpg'; 
import image2 from '../assets/2_1.jpg';
import image3 from '../assets/3image.jpg';
import image4 from '../assets/4THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg';
import image5 from '../assets/5miro_hero_building_exterior_2000x1125.avif';
import ArticlesList from './ArticleList';
function HeroSection() {
    

    return (
        <>
            
        <section id="home" className="mt-8 flex justify-center font-c">
            <h2 className="text-4xl font-bold">Discover The Most Engaging Places</h2>
          </section>
        <main className="container mx-auto mt-8 px-4">
         

                    
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
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
  </div>  */}

<ArticlesList/>
        </main>
        </>
    )
}

export default HeroSection;