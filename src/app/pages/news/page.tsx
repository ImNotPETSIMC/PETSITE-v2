'use client';

import '../../globals.css';

import Image from "next/image";
import Link from 'next/link';
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Article, ContentContainer } from '@/app/components/content_container';
import { Window } from "@/app/components/window";
import { useState } from 'react';
import { Header } from '@/app/components/header';

export const NotFoundArticle : Article = {
  title: "Notícias Não Encontradas",
  date: "Error - Falha de Comunicação",
  body: "No momento não conseguimos nos conectar ao banco de notícias do PET-SIMC. Caso sua internet esteja funcionando normalmente, favor entrar em contato com um membro do PET-SIMC informando o erro.",
  id: "not-found",
  icon: {
    src: "/images/ufu.jpg",
    alt: "Logo do PET-SIMC"
  }
}

const News = () => {
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
                    <div className={ 'basis-full' + (index % 2 ? ' -translate-x-40' : ' flex justify-end max-w-7xl')}>
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

export default News;
