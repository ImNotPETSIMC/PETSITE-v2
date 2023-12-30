'use client';

import '../../globals.css';

import Image from "next/image";
import Link from 'next/link';
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { Header } from '@/app/components/header';


const About = () => {
  const aboutText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sunt eveniet, rerum est harum at esse illo molestias labore, blanditiis qui soluta, neque laborum officiis impedit voluptatem obcaecati quisquam pariatur!"

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
