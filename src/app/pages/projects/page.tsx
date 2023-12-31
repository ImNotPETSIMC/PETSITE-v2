'use client';

import '../../globals.css';

import { useState } from 'react';
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Header } from '@/app/components/header';
import { Article, ContentContainer } from '@/app/components/content_container';
import { BreakWindow } from '@/app/components/break_window';
import { NotFoundArticle } from '@/app/assets/missing_article';

const Projects = () => {
  const [articles, setArticles] = useState<Article[]>([{...NotFoundArticle}]);
  // const [articles, setArticles] = useState<Article[]>([{...NotFoundArticle, loading: true}]);

  return (
    <>
      <main className="font-monda p-5 mb-32 grow">
        <div className='flex gap-10'>
          <NavBar />
          <div className='flex flex-wrap gap-4'>
            <Header />

            {
              articles.map((element, index) => {
                return (
                  <div key={element.id} className='flex flex-col basis-full gap-4'>
                    <div className='z-10 translate-x-2 2xl:translate-x-20 flex basis-full'>
                      <ContentContainer content={element} />
                    </div>
                    <BreakWindow end={index % 2 ? true : false}/>
                  </div>
                )
              })
            }

          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Projects;
