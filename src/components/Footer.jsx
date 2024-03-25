import { Link } from 'react-router-dom';
import image6 from '../assets/6Instagram_icon.png.webp'; 
import image7 from '../assets/7Facebook-Logosu.png';
import image8 from '../assets/8LinkedIn_logo_initials.png';
import image9 from '../assets/9.jpg';

function Footer(props) {
    

    return (
        <>
                    <footer className="bg-gradient-to-r from-sky-500 to-indigo-500 py-4 flex items-center mt-2">
  <div className="container mx-auto">
  <ul className="flex mb-8 justify-center gap-20 mt-0">
                <li className="mr-4"><Link to={"/"} className="text-white hover:text-gray-300">Home</Link></li>
                <li className="mr-4"><Link to={"/products"} className="text-white hover:text-gray-300">Products</Link></li>
                <li className="mr-4"><Link to={"/services"} className="text-white hover:text-gray-300">Services</Link></li>
                <li><Link to={"/contact"} className="text-white hover:text-gray-300">Contact</Link></li>
      </ul>
    <div className="flex justify-between items-center px-24 ">
      <ul className="flex">
        <li className="mr-4"><a href="/terms" className="text-white hover:text-gray-300">Terms and Conditions</a></li>
        <li><a href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</a></li>
      </ul>

      <div className="text-center ">
        {/* <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3> */}
        <form className="">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-md" />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-r-md">Subscribe</button>
        </form>
      </div>

      <div className="flex">
        <img src={image6} alt="Logo 2" className="h-8  cursor-pointer" />
        <img src={image7} alt="Logo 2" className="h-8  cursor-pointer" />
        <img src={image8} alt="Logo 1" className="h-8 mr-4  cursor-pointer" />
        <img src={image9} alt="Logo 2" className="h-8  cursor-pointer" />
      </div>

     

    </div>
  </div>
</footer>
        </>
    )
}

export default Footer;
