'use client';

import '../../globals.css';

import { useState } from 'react';
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { Header } from '@/app/components/header';
import { NotFoundArticle } from '../news/page';
import { Article, ContentContainer } from '@/app/components/content_container';

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
                  <>
                    <div className='z-10 translate-x-2 2xl:translate-x-20 flex basis-full'>
                      <ContentContainer content={element} />
                    </div>
                    <div className={ 'basis-full' + (index % 2 ? ' flex justify-end max-w-7xl' : ' -translate-x-40')}>
                      <Window>
                        <div className='font-ps2p text-lg py-4 px-8'>
                          <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black'>"hello world"</span>)</span></p>
                        </div>
                      </Window>
                    </div>
                  </>
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
