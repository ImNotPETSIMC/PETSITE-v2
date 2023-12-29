'use client';

import '../../globals.css';

import Image from "next/image";
import Link from 'next/link';
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";


const About = () => {
  const aboutText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sunt eveniet, rerum est harum at esse illo molestias labore, blanditiis qui soluta, neque laborum officiis impedit voluptatem obcaecati quisquam pariatur!"

  return (
    <>
      <main className="font-monda p-5 mb-32 grow">
        <div className='flex gap-10'>
          <NavBar />
          <div className='flex flex-wrap gap-4'>
            <div className='flex gap-5 -translate-x-2 basis-full'>
              <Window>
                <div className='font-monoton 2xl:py-28 2xl:px-52 py-20 px-16 text-8xl text-w95-blue text-center'> PET-SIMC </div>
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
                  <Link className='p-2' href='https://www.youtube.com/@petsimc3135'>
                    <Image
                      src="/images/youtube_logo.png"
                      width={60}
                      height={60}
                      alt="Youtube's Logo"
                    />
                  </Link>
                  <div className='bg-white w-full px-2'>Youtube</div>
                </div>

                <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid bg-white/20 h-fit'>
                  <Link className='p-2' href='https://open.spotify.com/show/390mvapHgaoTZFQoeusC7z?si=92010368c3744da7'>
                    <Image
                      src="/images/spotify_logo.png"
                      width={60}
                      height={60}
                      alt="Spotify's Logo"
                    />
                  </Link>
                  <div className='bg-white w-full px-2'>Spotify</div>
                </div>

                <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid h-fit bg-white/20'>
                  <Link className='p-2' href='#'>
                    <Image
                      src="/images/petcast_logo.png"
                      width={60}
                      height={60}
                      alt="PETCast's Logo"
                      className='mix-blend-multiply'
                    />
                  </Link>
                  <div className='bg-white w-full px-2'>PETCast</div>
                </div>
              </div>
            </div>

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
                    />
                  </div>
                </div>

                <div className={'flex flex-col items-center gap-2 p-8'}>
                  <div className='flex flex-col gap-8 order-1 transition-all items-center'>
                    <div className="font-ps2p flex-col flex gap-2">
                      <h1 className='text-2xl max-w-full text-center'>Sobre o PET-SIMC</h1>
                      <h2 className='text-xs max-w-full text-center text-black/50'>PET de Sistemas de Informação de Monte Carmelo</h2>
                    </div>
                    <p className='max-w-2xl text-center'>{aboutText}</p>
                  </div>
                </div>
              </Window>
            </div>

            <div className={'basis-full flex justify-end max-w-7xl'}>
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

export default About;
