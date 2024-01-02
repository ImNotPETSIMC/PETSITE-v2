'use client';

import '../../globals.css';

import { exMembersPetsimc, exTutorsPetsimc, membersPetsimc, tutorPetsimc } from '@/app/assets/texts';
import { FolderButtonProps } from '@/app/components/folder_button';
import { InfoContainer } from '@/app/components/info_container';
import { MemberSection } from '@/app/pages/members/components/member_section'
import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { Header } from '@/app/components/header';
import { BreakWindow } from '@/app/components/break_window';
import { useQuery } from 'react-query';
import { fetchData } from '@/app/helpers/fetchData';
import { Aside } from '@/app/components/aside';

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
  const member = useQuery({ queryKey: ['members'], queryFn: () => fetchData('/member', { status: "Membro" }) });
  const tutor = useQuery({ queryKey: ['tutor'], queryFn: () => fetchData('/tutor', { status: "Tutor" }) });
  const exMembers = useQuery({ queryKey: ['ex-members'], queryFn: () => fetchData('/member', { status: "Ex-Membro" }) });
  const exTutors = useQuery({ queryKey: ['ex-tutor'], queryFn: () => fetchData('/tutor', { status: "Ex-Tutor" }) });

  return (
    <>
      <main className="font-monda pb-10 gap-4 flex flex-col lg:flex-row px-2 items-center lg:items-start justify-between grow">
        <NavBar />
        <div className='flex flex-wrap flex-col gap-4 justify-center'>
          <Header />

          <div className='z-10 flex justify-center'>
            <Window>
              <InfoContainer content={folderButtons.slice(0,2)} custom='w-1/2 p-2' />
            </Window>
          </div>

          <BreakWindow end />

          <MemberSection members={{ title: 'Membros', subtitle: 'Membros atuais do PET-SIMC', minQuantity: 12, content: (member.isSuccess ? member.data.members : []) }} loading={member.isLoading || tutor.isLoading} tutors={{ title: 'Tutor', subtitle: 'Tutor atual do PET-SIMC', content: (tutor.isSuccess ? tutor.data.members : []) }} />

          <BreakWindow />

          <div className='flex justify-center'>
            <Window>
              <InfoContainer content={folderButtons.slice(2)} custom='w-1/2 p-2' />
            </Window>
          </div>

          <MemberSection members={{ title: 'Ex-Membros', subtitle: 'Ex-Membros do PET-SIMC', minQuantity: 1, content: (exMembers.isSuccess ? exMembers.data.members : []) }} loading={exMembers.isLoading || exTutors.isLoading} tutors={{ title: 'Ex-Tutores', subtitle: 'Ex-Tutores do PET-SIMC', content: (exTutors.isSuccess ? exTutors.data.members : []) }} />

          <BreakWindow end />
        </div>
        <Aside />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Members;
