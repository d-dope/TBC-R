import ArticlesList from "../components/ArticleList";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Blogs() {
    return (
        <>
        <Header/>
             <section id="home" className="flex justify-center mt-7">
            <h2 className="text-3xl font-bold">Blogs</h2>
             </section>
            <div className="">
            <BlogList/>
            </div>
            <Footer/>
        </>
    )
}

