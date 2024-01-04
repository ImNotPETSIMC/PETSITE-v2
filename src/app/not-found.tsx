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
import Image from 'next/image';
import { NavItem, NavItemProps } from './components/nav_item';

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

const NotFound = () => {
  const desktopItem : NavItemProps = {
    url: "/",
    name: "Home",
    icon: {
      src: "/images/home_icon.png",
      alt: "Home Icon"
    }
  };

  return (
    <>
      <div className='flex justify-center items-center p-10 grow'>
        <Window>
          <div className={'flex flex-col items-center gap-2 p-8'}>
            <div className='flex flex-col gap-8 order-1 transition-all items-center'>
              <div className="font-ps2p flex-col flex gap-2">
                <h1 className='text-lg text-center'>404 - Not Found</h1>
                <h2 className='text-xs text-center text-black/50 dark:text-white/50'>A página que você tentou acessar não foi encontrada.</h2>
              </div>
              <nav>
                <NavItem key={desktopItem.url} {...desktopItem} />
              </nav>
            </div>
          </div>
        </Window>
      </div>
    </>
  )
}

export default NotFound;