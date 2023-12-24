'use client';

import './globals.css';

import Image from 'next/image';
import { Window } from './components/window';
import { monda, monoton, ps2p } from './fonts';
import { NavBar } from './components/nav_bar';
import { aboutPetsimc, joinPetsimc, objectivesPetsimc, pillarsPetsimc } from './assets/texts';
import { FolderButton, FolderButtonProps } from './components/folder_button';
import { useState } from 'react';

const Home = () => {
  const FolderButtons : FolderButtonProps[] = [ 
    {
      name: "info-text",
      title: "Sobre",
      id: "about",
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
      icon: {
          src: "/images/folder_pink_file.png",
          alt: "Results Icon",
          width: 75,
          height: 75 
      }
    }
  ];

  type InfoText = { title: string; content: string; };

  const InfoTexts : Record<string, InfoText> = {
    "about": { title: "Sobre o PET-SIMC", content: aboutPetsimc },
    "objectives": { title: "Objetivos do PET-SIMC", content: objectivesPetsimc }, 
    "join": { title: "Juntar-se ao PET-SIMC", content: joinPetsimc },
    "pillars": { title: "Pilares do PET-SIMC", content: pillarsPetsimc },
    "edict": { title: "Edital PET-SIMC", content: "Em Construção" },
    "results": { title: "Resultados do Edital PET-SIMC", content: "Em Construção" }
  };

  const [infoText, setInfoText] = useState<InfoText>(InfoTexts["about"]);

  return (
    <main className={`${monda.variable} ${ps2p.variable} ${monoton.variable} font-monda p-5`}>
      <div className='flex gap-10'>
        <NavBar />

        <div className='flex flex-wrap gap-2'>
          <div className='flex gap-5 -translate-x-2 basis-full'>
            <Window>
              <div className='font-monoton py-20 2xl:px-56 px-16 text-8xl text-[#593CFA]'> PET-SIMC </div>
            </Window>
            
            <div className='translate-y-5'>
              <Window>
                <div className='p-10'>
                  <Image 
                    src="/images/pet_logo.png"
                    width={300}
                    height={300}
                    alt="PET-SIMC's Logo"
                    style={{ mixBlendMode: "multiply" }}
                  />  
                </div>
              </Window>
            </div>
          </div>

          <div className='z-10 w-10/12 max-w-[80rem]'>
            <Window>
              <div className='flex'>
                <div className='py-8 px-12 flex flex-col gap-4 max-w-xl'>
                  <h1 className='font-ps2p text-3xl max-w-lg'>{infoText.title}</h1>
                  <p className='max-w-md'>{infoText.content}</p>
                </div>
                
                <div className='flex grow items-center flex-wrap gap-1 py-20 justify-center'>
                  {FolderButtons.map((element : FolderButtonProps) => { return <FolderButton key={element.id} {...element} onclick={() => setInfoText(InfoTexts[element.id])} />})}
                </div>
              </div>
            </Window>
          </div>
        </div>


      </div>

    </main>
  )
}

export default Home;
  