'use client';

import './globals.css';

import Image from 'next/image';
import { Window } from './components/window';
import { monda, monoton, ps2p } from './fonts';
import { NavBar } from './components/nav_bar';
import { NewsContainer } from './components/news_container';
import { InfoContainer } from './components/info_container';
import { Footer } from './components/footer';

const Home = () => {
  return (
    <>
      <main className={`${monda.variable} ${ps2p.variable} ${monoton.variable} font-monda p-5`}>
        <div className='flex gap-10'>
          <NavBar />

          <div className='flex flex-wrap gap-4'>
            <div className='flex gap-5 -translate-x-2 basis-full'>
              <Window>
                <div className='font-monoton 2xl:py-28 2xl:px-52 py-20 px-16 text-8xl text-w95-purple text-center'> PET-SIMC </div>
              </Window>
              
              <div className='translate-y-10'>
                <Window>
                  <div className='p-10'>
                    <Image 
                      src="/images/pet_logo.png"
                      width={300}
                      height={300}
                      alt="PET-SIMC's Logo"
                    />  
                  </div>
                </Window>
              </div>
            </div>

            <div className='z-10 w-10/12 max-w-7xl'>
              <Window>
                <InfoContainer/>
              </Window>
            </div>

            <div className='basis-full -translate-x-40'>
              <Window>
                <div className='font-ps2p text-lg py-4 px-8'>
                  <p className='text-w95-purple flex'>printf<span className='text-[#973CFA]'>(<span className='text-black'>"hello world"</span>)</span></p>
                </div>
              </Window>
            </div>

            <div className='z-10 w-10/12 max-w-7xl min-w-fit translate-x-20'>
              <Window>
                <NewsContainer news={[]}/>
              </Window>
            </div>
          </div>
        </div>
      </main>
      <footer className={`${ps2p.variable}`}>
        <Footer />
      </footer>
    </>

  )
}

export default Home;
  