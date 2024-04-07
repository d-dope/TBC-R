import ArticlesList from "../components/ArticleList";
import Footer from "../components/Footer";

export default function Blogs() {
    return (
        <>
             <section id="home" className="flex justify-center mt-7">
            <h2 className="text-3xl font-bold">Blogs</h2>
             </section>
            <div className="">
            <ArticlesList />
            </div>
            <Footer/>
        </>
    )
}

