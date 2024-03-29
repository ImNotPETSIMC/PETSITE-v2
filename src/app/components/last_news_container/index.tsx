import Image from "next/image"
import Link from 'next/link';
import { useEffect, useState } from "react";
import { CarouselRadioButton } from "./CarouselRadioButton";
import { cropText } from "@/app/helpers/cropText";
import { NewsArticle } from "@/app/pages/news/page";
import { convertDate } from "@/app/helpers/convertDate";

export type LastNewsContainerProps = {
  news: NewsArticle[]
  loading?: boolean
}
export const LastNewsContainer = (props: LastNewsContainerProps) => {
  const [current, setCurrent] = useState<number>(0);
  const [currentNews, setCurrentNews] = useState<NewsArticle>(props.news[current]);

  useEffect(() => setCurrentNews(props.news[current]));

  return (
    <>
      <div className={'flex ' + (props.loading ? "blur" : "")}>
        <div className='flex flex-col max-w-xl p-12 gap-8'>
          <div>
            <h1 className='font-ps2p text-2xl max-w-md'>{currentNews.name}</h1>
            <h2 className='font-ps2p text-xs max-w-md text-black/50 dark:text-white/50'>{convertDate(currentNews.date)}</h2>
          </div>
          <p className='max-w-md'>
            <span className="whitespace-pre-line">{cropText(currentNews.content, 400)} </span>
            <Link href={'/pages/news#' + currentNews.id} className="text-black/50 dark:text-white/50">Leia mais</Link>
          </p>
        </div>

        <div className='flex flex-col p-8 gap-8 justify-center'>
          <Image
            src= {"data:image/jpeg;base64," + currentNews.photo} 
            alt= {(currentNews.name + " Article Photo")}
            width={400}
            height={200}
            className='aspect-video max-w-xl'
            style={{ height: "auto", width: "auto" }}
          />
          <div className="flex items-center justify-between px-2">
            <div className="flex justify-center items-center p-1 border-4 border-w95-grey bg-w95-light-grey hover:bg-w95-light-grey/60 dark:bg-white/20 hover:dark:bg-white/40">
              <button className='w-20 h-7 flex justify-center items-center' onClick={() => setCurrent((props.news.length + current - 1) % props.news.length)}>
                <Image
                  src="/images/left_arrow.svg"
                  alt="Previous News Icon"
                  width={12}
                  height={12}
                  className="dark:invert"
                  style={{ height: "auto", width: "auto" }}
                />
              </button>
            </div>

            <div className='flex gap-8'>
              {props.news.map((element, index) => <CarouselRadioButton key={element.id + "_news"} id={element.id + "_news"} name="recent_news" selected={index == current} onclick={() => setCurrent((index))} />)}
            </div>

            <div className="flex justify-center items-center p-1 border-4 border-w95-grey bg-w95-light-grey hover:bg-w95-light-grey/60 dark:bg-white/20 hover:dark:bg-white/40">
              <button className='w-20 h-7 flex justify-center items-center' onClick={() => setCurrent((current + 1) % props.news.length)}>
                <Image
                  src="/images/right_arrow.svg"
                  alt="Next News Icon"
                  width={12}
                  height={12}
                  className="dark:invert"
                  style={{ height: "auto", width: "auto" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}