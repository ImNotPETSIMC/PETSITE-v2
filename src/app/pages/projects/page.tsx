'use client';

import '../../globals.css';

import { Footer } from "@/app/components/footer";
import { NavBar } from "@/app/components/nav_bar";
import { Header } from '@/app/components/header';
import { Article, ContentContainer } from '@/app/components/content_container';
import { BreakWindow } from '@/app/components/break_window';
import { NotFoundArticle } from '@/app/assets/missing_article';
import { useQuery } from 'react-query';
import { fetchData } from '@/app/helpers/fetchData';
import { Aside } from '@/app/components/aside';
import { FolderButtonProps } from '@/app/components/folder_button';
import { projectsText } from '@/app/assets/texts';
import { Window } from '@/app/components/window';
import { InfoContainer } from '@/app/components/info_container';

const folderButtons: FolderButtonProps[] = [
  {
    name: "info-text",
    title: "Projetos",
    id: "projects",
    text: projectsText,
    icon: {
      src: "/images/folder_yellow_file.png",
      alt: "Projects Icon",
      width: 75,
      height: 75
    },
  }
];

const Projects = () => {
  const project = useQuery({ queryKey: ['projects'], queryFn: () => fetchData('/project'), initialData: { projects: [] } },);

  return (
    <>
      <main className="font-monda pb-10 gap-4 flex flex-col lg:flex-row px-2 items-center lg:items-start justify-between grow">
        <NavBar />
        <div className='flex flex-wrap flex-col gap-4 justify-center'>
          <Header />

          <div className='z-10 flex justify-center'>
            <Window>
              <InfoContainer content={folderButtons} custom='w-1/2 p-2' />
            </Window>
          </div>

          <BreakWindow end />

          {
            project.isSuccess &&
            ((project.data.projects).length ? (project.data.projects as Article[]) : [NotFoundArticle]).map((element, index) => {
              return (
                <div key={element.id} className='flex flex-col w-full gap-4'>
                  <div className='z-10 translate-x-2 2xl:translate-x-20 flex w-full'>
                    <ContentContainer content={element} />
                  </div>
                  <BreakWindow end={index % 2 ? true : false} />
                </div>
              )
            })
          }

        </div>
        <Aside />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Projects;
