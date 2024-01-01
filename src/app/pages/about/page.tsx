'use client';

import '../../globals.css';

import Image from "next/image";
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { Header } from '@/app/components/header';
import { BreakWindow } from '@/app/components/break_window';
import { aboutText } from '@/app/assets/texts';


const About = () => {

  return (
    <>
      <main className="font-monda p-5 mb-32 grow">
        <div className='flex gap-10'>
          <NavBar />
          <div className='flex flex-wrap gap-4'>
            <Header />

            <div className='z-10 translate-x-2 2xl:translate-x-20 flex basis-full'>
              <Window>
                <div className='flex flex-col p-2 pt-6 gap-8 justify-center'>
                  <div className="px-32">
                    <Image
                      src={"/images/pet_background.png"}
                      alt="PET-SIMC's Article Photo"
                      width={600}
                      height={200}
                      className='aspect-video max-w-full'
                      style={{height: "auto", width: "auto"}}
                    />
                  </div>
                </div>

                <div className={'flex flex-col items-center gap-2 p-8'}>
                  <div className='flex flex-col gap-8 order-1 transition-all items-center'>
                    <div className="font-ps2p flex-col flex gap-2">
                      <h1 className='text-2xl max-w-full text-center'>Sobre o PET-SIMC</h1>
                      <h2 className='text-xs max-w-full text-center text-black/50 dark:text-white/50'>PET de Sistemas de Informação de Monte Carmelo</h2>
                    </div>
                    <p className='max-w-2xl text-center whitespace-pre-line'>{aboutText}</p>
                  </div>
                </div>
              </Window>
            </div>

            <BreakWindow end/>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default About;
