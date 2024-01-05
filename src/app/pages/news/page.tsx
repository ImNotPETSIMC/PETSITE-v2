'use client';

import '../../globals.css';


import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Header } from '@/app/components/header';
import { BreakWindow } from '@/app/components/break_window';
import { ContentContainer } from '@/app/components/content_container';
import { useQuery } from 'react-query';
import { fetchData } from '@/app/helpers/fetchData';
import { Aside } from '@/app/components/aside';
import { InfoContainer } from '@/app/components/info_container';
import { FolderButtonProps } from '@/app/components/folder_button';
import { Window } from '@/app/components/window';
import { newsText } from '@/app/assets/texts';
import { convertDate } from '@/app/helpers/convertDate';
import { NotFoundArticle } from '@/app/assets/missing_article';

const folderButtons: FolderButtonProps[] = [
  {
    name: "info-text",
    title: "Notícias",
    id: "news",
    text: newsText,
    icon: {
      src: "/images/folder_blue_file.png",
      alt: "News Icon",
      width: 75,
      height: 75
    },
  }
];

export type NewsArticle = {
  id: string
  name: string
  date: string
  content: string
  photo: string

}

const News = () => {
  const news = useQuery({ queryKey: ['news'], queryFn: () => fetchData('/news'), initialData: { news: [] }},);

  return (
    <>
      <main className="font-monda pb-10 gap-4 flex flex-col lg:flex-row px-10 lg:px-2 items-center lg:items-start justify-between grow">
        <NavBar />
        <div className='flex flex-wrap flex-col gap-4 justify-center'>
          <Header />

          <div className='z-10 flex justify-center'>
            <Window>
              <InfoContainer content={folderButtons} custom='w-1/2 p-2'/>
            </Window>
          </div>

          <BreakWindow end/>

          {
            ((news.isSuccess && news.data.news.length) ? (news.data.news as NewsArticle[]) : [{ id: NotFoundArticle.id, name: NotFoundArticle.title, date: NotFoundArticle.date, content: NotFoundArticle.body, photo: NotFoundArticle.icon.src }]).map((element, index) => {
              return (
                <div key={element.id} className='flex flex-col w-full gap-4'>
                  <div className='z-10 justify-center flex w-full'>
                    <ContentContainer content={{ title: element.name, date: convertDate(element.date), body: element.content, id: element.id, icon: { src: "data:image/jpeg;base64," + element.photo, alt: (element.name + " Article Photo") }, loading: news.isFetching }} />
                  </div>
                  <BreakWindow end={index % 2 ? true : false} />
                </div>
              )
            })
          }

        </div>
        <Aside />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default News;
