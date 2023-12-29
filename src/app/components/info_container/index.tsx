import { FolderButton, FolderButtonProps } from "../folder_button";
import { useState } from "react";

export type InfoContainerProps = {
  content: FolderButtonProps[]
  custom?: string
}

export const InfoContainer = (props: InfoContainerProps) => {
    const [infoText, setInfoText] = useState<FolderButtonProps>(props.content[0]);

    return (
        <div className='flex'>
            <div className='py-8 px-12 flex flex-col gap-4 max-w-xl'>
                <h1 className='font-ps2p text-3xl max-w-lg'>{infoText.title}</h1>
                <p className='max-w-md'>{infoText.text}</p>
            </div>
            
            <div className='flex items-center flex-wrap gap-4 py-20 pr-4 justify-center'>
              {props.content.map((element, index) => { return <FolderButton custom={props.custom} key={element.id} {...element} onclick={() => setInfoText(props.content[index])} />})}
            </div>
        </div>
    )
}