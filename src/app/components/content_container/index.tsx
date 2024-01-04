import Image from "next/image"
import { cropText } from "@/app/helpers/cropText";
import { useId } from "react";
import { Window } from "../window";

export type Article = {
  title: string
  date: string,
  body: string,
  id: string,
  icon: {
    src: string,
    alt: string
  }
  loading?: true
}

export type ContentContainerProps = {
  content: Article
}

export const ContentContainer = (props: ContentContainerProps) => {
  const checkBoxId = useId();

  return (
    <Window>
      <div className={'flex has-[:checked]:flex-col has-[:checked]:items-center has-[:checked]:px-20 gap-2 p-8 group ' + (props.content.loading ? "blur" : "")}>
        <div className='flex flex-col gap-8 p-4 transition-all has-[:checked]:items-center'>
          <div className="font-ps2p flex-col flex gap-2">
            <h1 className='text-2xl max-w-md group-has-[:checked]:max-w-full group-has-[:checked]:text-center'>{props.content.title}</h1>
            <h2 className='text-xs  max-w-md group-has-[:checked]:max-w-full group-has-[:checked]:text-center text-black/50 dark:text-white/50'>{props.content.date}</h2>
          </div>
          <p className='max-w-md  whitespace-pre-line group-has-[:checked]:hidden'>{cropText(props.content.body, 400)}</p>
          <p className='max-w-2xl whitespace-pre-line hidden group-has-[:checked]:block'>{props.content.body}</p>
        </div>

        <div className='flex flex-col p-2 gap-8 justify-center group-has-[:checked]:order-first group-has-[:checked]:w-full'>
          <div className="relative aspect-video">
            <Image
              {...props.content.icon}
              fill
            />
          </div>
          <div className="flex p-4 has-[:checked]:hidden">
            <label className='p-2 px-8 text-[#3E3E3E] flex justify-center border-4 border-bg-w95-grey bg-w95-light-grey hover:bg-w95-dark-grey font-ps2p hover:cursor-pointer' htmlFor={checkBoxId}>
              Expandir
              <input type="checkbox" className="peer hidden" id={checkBoxId} />
            </label>
          </div>

        </div>
      </div>
    </Window>
  )
}