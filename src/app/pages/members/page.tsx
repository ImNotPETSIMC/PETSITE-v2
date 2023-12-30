'use client';

import '../../globals.css';

import Image from "next/image";
import Link from 'next/link';
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { FolderButtonProps } from '@/app/components/folder_button';
import { InfoContainer } from '@/app/components/info_container';
import { exMembersPetsimc, exTutorsPetsimc, membersPetsimc, tutorPetsimc } from '@/app/assets/texts';
import { MemberSection } from '@/app/components/member_section'

const folderButtons: FolderButtonProps[] = [
  {
    name: "info-text",
    title: "Membros",
    id: "members",
    text: membersPetsimc,
    icon: {
      src: "/images/folder_red_file.png",
      alt: "Members Icon",
      width: 75,
      height: 75
    }
  },
  {
    name: "info-text",
    title: "Ex-Membros",
    id: "ex_members",
    text: exMembersPetsimc,
    icon: {
      src: "/images/folder_green_file.png",
      alt: "Ex-Members Icon",
      width: 75,
      height: 75
    }
  },
  {
    name: "info-text",
    title: "Tutor",
    id: "tutor",
    text: tutorPetsimc,
    icon: {
      src: "/images/folder_blue_file.png",
      alt: "Tutor Icon",
      width: 75,
      height: 75
    }
  },
  {
    name: "info-text",
    title: "Ex-Tutores",
    id: "ex-tutor",
    text: exTutorsPetsimc,
    icon: {
      src: "/images/folder_yellow_file.png",
      alt: "Ex-Tutors Icon",
      width: 75,
      height: 75
    }
  },
];

const Members = () => {
  
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

            <div className='z-10 w-10/12 max-w-7xl'>
              <Window>
                <InfoContainer content={folderButtons} custom={"w-1/3"}/>
              </Window>
            </div>
            
            <div className='basis-full' />

            <div className={'basis-full flex justify-end max-w-7xl'}>
              <Window>
                <div className='font-ps2p text-lg py-4 px-8'>
                  <p className='text-w95-blue flex'>printf<span className='text-[#009ED0]'>(<span className='text-black'>"hello world"</span>)</span></p>
                </div>
              </Window>
            </div>

            <div className='basis-full' />

            <MemberSection members={[{name: "A"}, {name: "B"}, {name: "C"}]} title='Membros' subtitle='Membros atuais do PET-SIMC' quantity={12}/>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Members;
