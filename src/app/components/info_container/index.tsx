import { FolderButton, FolderButtonProps } from "../folder_button";
import { useState } from "react";

export type InfoContainerProps = {
  content: FolderButtonProps[]
  custom?: string
}

export const InfoContainer = (props: InfoContainerProps) => {
  const [infoText, setInfoText] = useState<FolderButtonProps>(props.content[0]);

  return (
    <div className='flex p-8 justify-between'>
      <div className='flex flex-col gap-4 p-4'>
        <h1 className='font-ps2p text-3xl max-w-lg'>{infoText.title}</h1>
        <p className='max-w-xl'>{infoText.text}</p>
      </div>
      <div className='flex flex-wrap items-center'>
        {props.content.map((element, index) => { return <FolderButton custom={props.custom} key={element.id} {...element} onclick={() => setInfoText(props.content[index])} /> })}
      </div>
    </div>
  )
}