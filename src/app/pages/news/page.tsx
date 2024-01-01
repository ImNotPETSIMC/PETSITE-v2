'use client';

import '../../globals.css';


import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Header } from '@/app/components/header';
import { BreakWindow } from '@/app/components/break_window';
import { Article, ContentContainer } from '@/app/components/content_container';
import { NotFoundArticle } from '@/app/assets/missing_article';
import { useQuery } from 'react-query';
import { fetchData } from '@/app/helpers/fetchData';

const News = () => {
  const news = useQuery({ queryKey: ['news'], queryFn: () => fetchData('/news'), initialData: { news : [{...NotFoundArticle, loading: true}]}},);

  return (
    <>
      <main className="font-monda p-5 mb-32 grow">
        <div className='flex gap-10'>
          <NavBar />
          <div className='flex flex-wrap gap-4'>
            <Header />
            { 
              news.isSuccess &&
              (news.data.news as Article[]).map((element, index) => {
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

export default News;
