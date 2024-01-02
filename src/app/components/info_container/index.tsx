import { FolderButton, FolderButtonProps } from "../folder_button";
import { useState } from "react";

export type InfoContainerProps = {
  content: FolderButtonProps[]
  custom?: string
}

export const InfoContainer = (props: InfoContainerProps) => {
  const [infoText, setInfoText] = useState<FolderButtonProps>(props.content[0]);

  return (
    <div className='flex p-12 gap-2'>
      <div className='flex flex-col gap-4 max-w-xl'>
        <h1 className='font-ps2p text-3xl max-w-lg'>{infoText.title}</h1>
        <p className='max-w-md'>{infoText.text}</p>
      </div>
      <div className='flex justify-center flex-wrap items-center px-10'>
        {props.content.map((element, index) => { return <FolderButton custom={props.custom} key={element.id} {...element} onclick={() => setInfoText(props.content[index])} /> })}
      </div>
    </div>
  )
}