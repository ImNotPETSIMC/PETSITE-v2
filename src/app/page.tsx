'use client';

import './globals.css';

import { BreakWindow } from './components/break_window';
import { Window } from './components/window';
import { NavBar } from './components/nav_bar';
import { LastNewsContainer } from './components/last_news_container';
import { InfoContainer } from './components/info_container';
import { Footer } from './components/footer';
import { aboutPetsimc, joinPetsimc, objectivesPetsimc, pillarsPetsimc } from './assets/texts';
import { FolderButtonProps } from './components/folder_button';
import { Header } from './components/header';
import { fetchData } from './helpers/fetchData';
import { useQuery } from 'react-query';
import { Aside } from './components/aside';
import { NotFoundArticle } from './assets/missing_article';

const folderButtons: FolderButtonProps[] = [
  {
    name: "info-text",
    title: "Sobre",
    id: "about",
    text: aboutPetsimc,
    icon: {
      src: "/images/folder_red_file.png",
      alt: "About Icon",
      width: 75,
      height: 75
    }
  },
  {
    name: "info-text",
    title: "Objetivos",
    id: "objectives",
    text: objectivesPetsimc,
    icon: {
      src: "/images/folder_green_file.png",
      alt: "Objectives Icon",
      width: 75,
      height: 75
    }
  },
  {
    name: "info-text",
    title: "Juntar-se",
    id: "join",
    text: joinPetsimc,
    icon: {
      src: "/images/folder_blue_file.png",
      alt: "Join-Us Icon",
      width: 75,
      height: 75
    }
  },
  {
    name: "info-text",
    title: "Edital PET",
    id: "edict",
    text: "Em Construção",
    icon: {
      src: "/images/folder_black_file.png",
      alt: "Edict Icon",
      width: 75,
      height: 75
    }
  },
  {
    name: "info-text",
    title: "Resultados",
    id: "results",
    text: "Em Construção",
    icon: {
      src: "/images/folder_pink_file.png",
      alt: "Results Icon",
      width: 75,
      height: 75
    }
  }
];

const Home = () => {
  const news = useQuery({ queryKey: ['last-news'], queryFn: () => fetchData('/news'), initialData: { news: [] } });

  return (
    <>
      <main className="font-monda pb-10 gap-4 flex flex-col lg:flex-row px-10 lg:px-2 items-center lg:items-start justify-between grow">
        <NavBar />
        <div className='flex flex-wrap flex-col gap-4 p-2 justify-center'>
          <Header />

          <div className='z-10 flex justify-center'>
            <Window>
              <InfoContainer content={folderButtons} custom='w-[30%] p-2' />
            </Window>
          </div>

          <BreakWindow />

          <div className='z-10 flex justify-center lg:translate-x-20'>
            <Window>
              <LastNewsContainer loading={news.isFetching} news={(news.isSuccess && news.data.news.length) ? news.data.news : [{ id: NotFoundArticle.id, name: NotFoundArticle.title, date: NotFoundArticle.date, content: NotFoundArticle.body, photo: NotFoundArticle.icon.src }]}  />
            </Window>
          </div>
          

          <BreakWindow end />
        </div>
        <Aside />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home;