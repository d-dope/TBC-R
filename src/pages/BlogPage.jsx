import ArticlesList from "../components/ArticleList";
import Header from "../components/Header";
function Blogs() {
    return (
        <>
            <Header/>
             <section id="home" className="flex justify-center mt-7">
            <h2 className="text-3xl font-bold">Blogs</h2>
             </section>
            <div className="">
            <ArticlesList />
            </div>
        </>
    )
}

export default Blogs;