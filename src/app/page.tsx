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
import { useQuery } from 'react-query';
import { fetchData } from './helpers/fetchData'

const Home = () => {
  const news = useQuery({ queryKey: ['last-news'], queryFn: () => fetchData('/news'), initialData: { news : []}},);

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
      title: "Pilares",
      id: "pillars",
      text: pillarsPetsimc,
      icon: {
        src: "/images/folder_yellow_file.png",
        alt: "Pillars Icon",
        width: 75,
        height: 75
      }
    },
    {
      name: "info-text",
      title: "Edital",
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

  return (
    <>
      <main className="font-monda p-5 mb-32 grow">
        <div className='flex gap-10'>
          <NavBar />
          <div className='flex flex-wrap gap-4'>
            <Header />
            
            <div className='z-10 w-10/12 max-w-7xl'>
              <Window>
                <InfoContainer content={folderButtons} />
              </Window>
            </div>

            <BreakWindow end/>

            <div className='z-10 w-10/12 max-w-7xl min-w-fit translate-x-4 2xl:translate-x-20 flex basis-full'>
              <Window>
                <LastNewsContainer news={(news.isSuccess ? news.data.news : [])} />
              </Window>
            </div>

            <BreakWindow/>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home;