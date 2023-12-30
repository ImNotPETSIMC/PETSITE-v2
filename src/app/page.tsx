'use client';

import './globals.css';

import Image from 'next/image';
import Link from 'next/link';
import { Window } from './components/window';
import { NavBar } from './components/nav_bar';
import { LastNewsContainer } from './components/last_news_container';
import { InfoContainer } from './components/info_container';
import { Footer } from './components/footer';
import { aboutPetsimc, joinPetsimc, objectivesPetsimc, pillarsPetsimc } from './assets/texts';
import { FolderButtonProps } from './components/folder_button';
import { Header } from './components/header';

const Home = () => {
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

            <div className='basis-full -translate-x-40'>
              <Window>
                <div className='font-ps2p text-lg py-4 px-8'>
                  <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black'>"hello world"</span>)</span></p>
                </div>
              </Window>
            </div>

            <div className='z-10 w-10/12 max-w-7xl min-w-fit translate-x-4 2xl:translate-x-20 flex basis-full'>
              <Window>
                <LastNewsContainer news={[]} />
              </Window>
            </div>
            <div className='basis-full' />

            <div className='basis-full flex justify-end max-w-7xl'>
              <Window>
                <div className='font-ps2p text-lg py-4 px-8'>
                  <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black'>"hello world"</span>)</span></p>
                </div>
              </Window>
            </div>
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