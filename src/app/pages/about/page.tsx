'use client';

import '../../globals.css';

import Image from "next/image";
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { Header } from '@/app/components/header';
import { BreakWindow } from '@/app/components/break_window';
import { aboutContent, aboutText, localityText, pillarsContent } from '@/app/assets/texts';
import { Aside } from '@/app/components/aside';
import { InfoContainer } from '@/app/components/info_container';
import { FolderButtonProps } from '@/app/components/folder_button';

const folderButtons: FolderButtonProps[] = [
  {
    name: "info-text",
    title: "Sobre",
    id: "about",
    text: aboutText,
    icon: {
      src: "/images/folder_blue_file.png",
      alt: "About Icon",
      width: 75,
      height: 75
    },
  },
  {
    name: "info-text",
    title: "Local",
    id: "locality",
    text: localityText,
    icon: {
      src: "/images/folder_black_file.png",
      alt: "Locality Icon",
      width: 75,
      height: 75
    },
  }
];

const About = () => {
  return (
    <>
      <main className="font-monda pb-10 gap-4 flex flex-col lg:flex-row px-10 lg:px-2 items-center lg:items-start justify-between grow">
        <NavBar />
        <div className='flex flex-wrap flex-col gap-4 justify-center'>
          <Header />

          <div className='z-10 flex justify-center'>
            <Window>
              <InfoContainer content={folderButtons} custom='w-1/2 p-2' />
            </Window>
          </div>

          <BreakWindow end />

          <div className='z-10 flex justify-center'>
            <Window>
              <div className='py-8 px-20'>
                <div className="relative aspect-video">
                  <Image
                    src={"/images/pet_background.png"}
                    alt="PET-SIMC's Article Photo"
                    fill
                  />
                </div>

                <div className={'flex flex-col items-center gap-2 p-8'}>
                  <div className='flex flex-col gap-8 order-1 transition-all items-center'>
                    <div className="font-ps2p flex-col flex gap-2">
                      <h1 className='text-2xl max-w-full text-center'>Sobre o PET-SIMC</h1>
                      <h2 className='text-xs max-w-full text-center text-black/50 dark:text-white/50'>PET de Sistemas de Informação de Monte Carmelo</h2>
                    </div>
                    <p className='max-w-2xl whitespace-pre-line'>{aboutContent}</p>
                  </div>
                </div>
              </div>
            </Window>
          </div>

          <BreakWindow />

          <div className='z-10 flex justify-center'>
            <Window>
              <div className='py-8 px-20'>
                <div className="relative aspect-video">
                  <Image
                    src={"/images/greek_temple.jpg"}
                    alt="Greek Temple Photo"
                    fill
                  />
                </div>

                <div className={'flex flex-col items-center gap-2 p-8'}>
                  <div className='flex flex-col gap-8 order-1 transition-all items-center'>
                    <div className="font-ps2p flex-col flex gap-2">
                      <h1 className='text-2xl max-w-full text-center'>Os Três Pilares</h1>
                      <h2 className='text-xs max-w-full text-center text-black/50 dark:text-white/50'>Uma introdução a Pesquisa, Ensino e Extensão</h2>
                    </div>
                    <p className='max-w-2xl whitespace-pre-line'>{pillarsContent}</p>
                  </div>
                </div>
              </div>
            </Window>
          </div>

          <BreakWindow end />
        </div>
        <Aside />
      </main >
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default About;
