import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Search from "../components/Search";

function HomePage() {
    

    return (
        <>
        <div className="App bg-white-200 min-h-screen overflow-hidden">
            
             <Header/>
            {/* <Search/> */}
            <HeroSection/>
            <Footer/> 
       
      </div>
        </>
    )
}

export default HomePage;