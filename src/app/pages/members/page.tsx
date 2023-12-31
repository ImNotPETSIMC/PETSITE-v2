'use client';

import '../../globals.css';

import { useState } from 'react';
import { exMembersPetsimc, exTutorsPetsimc, membersPetsimc, tutorPetsimc } from '@/app/assets/texts';
import { FolderButtonProps } from '@/app/components/folder_button';
import { InfoContainer } from '@/app/components/info_container';
import { MemberSection } from '@/app/pages/members/components/member_section'
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { Header } from '@/app/components/header';
import { Tutor } from '@/app/pages/members/components/tutor_card';
import { Member } from '@/app/pages/members/components/member_card';
import { BreakWindow } from '@/app/components/break_window';

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
  const [members, setMembers] = useState<Member[]>([]);
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [exMembers, setExMembers] = useState<Member[]>([]);
  const [exTutors, setExTutors] = useState<Tutor[]>([]);


  return (
    <>
      <main className="font-monda p-5 mb-32 grow">
        <div className='flex gap-10'>
          <NavBar />
          <div className='flex flex-wrap gap-4'>
            <Header />

            <div className='z-10 w-10/12 max-w-7xl'>
              <Window>
                <InfoContainer content={folderButtons} custom={"w-1/3"} />
              </Window>
            </div>

            <BreakWindow end />

            <MemberSection members={{ title: 'Membros', subtitle: 'Membros atuais do PET-SIMC', minQuantity: 12, content: members }} tutors={{ title: 'Tutor', subtitle: 'Tutor atual do PET-SIMC', content: tutors }} />

            <BreakWindow />

            <MemberSection members={{ title: 'Ex-Membros', subtitle: 'Ex-Membros do PET-SIMC', minQuantity: 1, content: exMembers }} tutors={{ title: 'Ex-Tutores', subtitle: 'Ex-Tutores do PET-SIMC', content: exTutors }} />

            <BreakWindow end />
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
