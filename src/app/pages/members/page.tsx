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
import { useState } from 'react';
import { Tutor } from '@/app/components/tutor_card';
import { Member } from '@/app/components/member_card';
import { Header } from '@/app/components/header';

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
  const [ members, setMembers ] = useState<Member[]>([]);
  const [ tutors, setTutors ] = useState<Tutor[]>([]);
  const [ exMembers, setExMembers ] = useState<Member[]>([]);
  const [ exTutors, setExTutors ] = useState<Tutor[]>([]);

  
  return (
    <>
      <main className="font-monda p-5 mb-32 grow">
        <div className='flex gap-10'>
          <NavBar />
          <div className='flex flex-wrap gap-4'>
            <Header />

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

            <MemberSection members={{title: 'Membros', subtitle:'Membros atuais do PET-SIMC', minQuantity: 12, content: members}} tutors={{title: 'Tutor', subtitle: 'Tutor atual do PET-SIMC', content: tutors}} />

            <div className='basis-full' />

            <MemberSection members={{title: 'Ex-Membros', subtitle:'Ex-Membros do PET-SIMC', minQuantity: 1, content: exMembers}} tutors={{title: 'Ex-Tutores', subtitle: 'Ex-Tutores do PET-SIMC', content: exTutors}} />

            <div className='basis-full' />
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
