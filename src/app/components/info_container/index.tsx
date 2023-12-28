import { aboutPetsimc, joinPetsimc, objectivesPetsimc, pillarsPetsimc } from "@/app/assets/texts";
import { FolderButton, FolderButtonProps } from "../folder_button";
import { useState } from "react";

export const InfoContainer = () => {
    const folderButtons : FolderButtonProps[] = [ 
        {
          name: "info-text",
          title: "Sobre",
          id: "about",
          icon: {
            src: "/images/folder_red_file.png",
            alt: "About Icon",
            width: 75,
            height: 75 
          }
        },
        {
          name: "info-text",
          title: "Objetivos",
          id: "objectives",
          icon: {
            src: "/images/folder_green_file.png",
            alt: "Objectives Icon",
            width: 75,
            height: 75 
          }
        },
        {
          name: "info-text",
          title: "Juntar-se",
          id: "join",
          icon: {
            src: "/images/folder_blue_file.png",
            alt: "Join-Us Icon",
            width: 75,
            height: 75 
          }
        },
        {
          name: "info-text",
          title: "Pilares",
          id: "pillars",
          icon: {
            src: "/images/folder_yellow_file.png",
            alt: "Pillars Icon",
            width: 75,
            height: 75 
          }
        },
        {
          name: "info-text",
          title: "Edital",
          id: "edict",
          icon: {
            src: "/images/folder_black_file.png",
            alt: "Edict Icon",
            width: 75,
            height: 75 
          }
        },
        {
          name: "info-text",
          title: "Resultados",
          id: "results",
          icon: {
            src: "/images/folder_pink_file.png",
            alt: "Results Icon",
            width: 75,
            height: 75 
          }
        }
    ];
    
    type InfoText = { title: string; content: string; };

    const InfoTexts : Record<string, InfoText> = {
    "about": { title: "Sobre o PET-SIMC", content: aboutPetsimc },
    "objectives": { title: "Objetivos do PET-SIMC", content: objectivesPetsimc }, 
    "join": { title: "Juntar-se ao PET-SIMC", content: joinPetsimc },
    "pillars": { title: "Pilares do PET-SIMC", content: pillarsPetsimc },
    "edict": { title: "Edital PET-SIMC", content: "Em Construção" },
    "results": { title: "Resultados do Edital PET-SIMC", content: "Em Construção" }
    };

    const [infoText, setInfoText] = useState<InfoText>(InfoTexts["about"]);

    return (
        <div className='flex'>
            <div className='py-8 px-12 flex flex-col gap-4 max-w-xl'>
                <h1 className='font-ps2p text-3xl max-w-lg'>{infoText.title}</h1>
                <p className='max-w-md'>{infoText.content}</p>
            </div>
            
            <div className='flex items-center flex-wrap gap-4 py-20 px-10 justify-center'>
              {folderButtons.map((element : FolderButtonProps) => { return <FolderButton key={element.id} {...element} onclick={() => setInfoText(InfoTexts[element.id])} />})}
            </div>
        </div>
    )
}