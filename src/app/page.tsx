'use client';

import './globals.css';

import Image from 'next/image';
import { Window } from './components/window';
import { NavBar } from './components/nav_bar';
import { NewsContainer } from './components/news_container';
import { InfoContainer } from './components/info_container';
import { Footer } from './components/footer';

const Home = () => {
  return (
    <>
      <main className="font-monda p-5 mb-32 grow">
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

              <div className='translate-y-10 font-ps2p flex flex-col gap-4'>
                <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid bg-white/20 h-fit'>
                  <a className='p-2' href='https://www.youtube.com/@petsimc3135'>
                    <Image
                      src="/images/youtube_logo.png"
                      width={60}
                      height={60}
                      alt="Youtube's Logo"
                    />
                  </a>
                  <div className='bg-white w-full px-2'>Youtube</div>
                </div>

                <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid bg-white/20 h-fit'>
                  <a className='p-2' href='https://open.spotify.com/show/390mvapHgaoTZFQoeusC7z?si=92010368c3744da7'>
                    <Image
                      src="/images/spotify_logo.png"
                      width={60}
                      height={60}
                      alt="Spotify's Logo"
                    />
                  </a>
                  <div className='bg-white w-full px-2'>Spotify</div>
                </div>

                <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid h-fit bg-white/20'>
                  <a className='p-2' href='#'>
                    <Image
                      src="/images/petcast_logo.png"
                      width={60}
                      height={60}
                      alt="PETCast's Logo"
                      className='mix-blend-multiply'
                    />
                  </a>
                  <div className='bg-white w-full px-2'>PETCast</div>
                </div>
              </div>
            </div>

            <div className='z-10 w-10/12 max-w-7xl'>
              <Window>
                <InfoContainer />
              </Window>
            </div>

            <div className='basis-full -translate-x-40'>
              <Window>
                <div className='font-ps2p text-lg py-4 px-8'>
                  <p className='text-w95-purple flex'>printf<span className='text-[#973CFA]'>(<span className='text-black'>"hello world"</span>)</span></p>
                </div>
              </Window>
            </div>

            <div className='z-10 w-10/12 min-w-fit translate-x-4 2xl:translate-x-20 flex basis-full'>
              <Window>
                <NewsContainer news={[]} />
              </Window>
            </div>

            <div className='basis-full flex justify-end max-w-7xl'>
              <Window>
                <div className='font-ps2p text-lg py-4 px-8'>
                  <p className='text-w95-purple flex'>printf<span className='text-[#973CFA]'>(<span className='text-black'>"hello world"</span>)</span></p>
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