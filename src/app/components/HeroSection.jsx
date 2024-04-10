'use client'

import ArticlesList from './ArticleList';
export default function HeroSection() {
    

    return (
        <>
            
        <section id="home" className="mt-8 flex justify-center font-c">
            <h2 className="text-4xl font-bold">Discover The Most Engaging Places</h2>
          </section>
        <main className="container mx-auto mt-8 px-4">

            <ArticlesList/>
        </main>
        </>
    )
}

