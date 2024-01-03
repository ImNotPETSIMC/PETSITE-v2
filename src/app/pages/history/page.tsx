'use client';

import '../../globals.css';

import Image from "next/image";
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { Header } from '@/app/components/header';
import { BreakWindow } from '@/app/components/break_window';
import { historyText } from '@/app/assets/texts';
import { Aside } from '@/app/components/aside';


const History = () => {
  return (
    <>
      <main className="font-monda pb-10 gap-4 flex flex-col lg:flex-row px-2 items-center lg:items-start justify-between grow">
        <NavBar />
        <div className='flex flex-wrap flex-col gap-4 justify-center'>
          <Header />

          <div className='z-10 flex justify-center'>
            <Window>
              <div className='flex flex-col p-2 pt-6 gap-8 justify-center'>
                <div className="px-32">
                  <Image
                    src={"/images/pet_background.png"}
                    alt="PET-SIMC's Article Photo"
                    width={600}
                    height={200}
                    className='aspect-video max-w-full'
                    style={{ height: "auto", width: "auto" }}
                  />
                </div>
              </div>

              <div className={'flex flex-col items-center gap-2 p-8'}>
                <div className='flex flex-col gap-8 order-1 transition-all items-center'>
                  <div className="font-ps2p flex-col flex gap-2">
                    <h1 className='text-2xl max-w-full text-center'>História do PET-SIMC</h1>
                    <h2 className='text-xs max-w-full text-center text-black/50 dark:text-white/50'>PET de Sistemas de Informação de Monte Carmelo</h2>
                  </div>
                  <p className='max-w-2xl whitespace-pre-line'>{historyText}</p>
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

export default History;
