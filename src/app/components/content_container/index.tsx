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
      <div className={'flex group has-[:checked]:flex-col has-[:checked]:items-center gap-2 p-8' + (props.content.loading ? " blur" : "")}>
        <div className='flex flex-col gap-8 order-1 transition-all items-center'>
          <div className="font-ps2p flex-col flex gap-2">
            <h1 className='text-2xl max-w-md group-has-[:checked]:max-w-full group-has-[:checked]:text-center'>{props.content.title}</h1>
            <h2 className='text-xs max-w-md group-has-[:checked]:max-w-full group-has-[:checked]:text-center text-black/50'>{props.content.date}</h2>
          </div>
          <p className='max-w-md group-has-[:checked]:hidden'>{cropText(props.content.body, 400)}</p>
          <p className='max-w-2xl text-center hidden group-has-[:checked]:block'>{props.content.body}</p>
        </div>

        <div className='flex flex-col p-2 pt-6 gap-8 justify-center order-2 group-has-[:checked]:order-first'>
          <div className="group-has-[:checked]:px-32">
            <Image
              {...props.content.icon}
              width={600}
              height={200}
              className='aspect-video max-w-md group group-has-[:checked]:max-w-full'
            />
          </div>

          <div className="flex items-center justify-center px-2 has-[:checked]:hidden">
            <div className="flex justify-center items-center p-1 bg-w95-grey">
              <label className='p-2 px-8 text-[#3E3E3E] flex justify-center items-center bg-w95-light-grey font-ps2p' htmlFor={checkBoxId}>
                Saiba Mais
                <input type="checkbox" className="peer hidden" id={checkBoxId} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </Window>
  )
}