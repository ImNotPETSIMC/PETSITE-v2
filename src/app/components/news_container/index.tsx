import Image from "next/image"
import { useEffect, useState } from "react";
import { CarouselRadioButton } from "./CarouselRadioButton";

export type NewsArticle = {   
    title: string
    content: string, 
    date: string,
    id: string, 
    icon: { 
      src: string,  
      alt: string
    }   
}

export type NewsContainerProps = {
  news: NewsArticle[]
}

export const NewsContainer = (props: NewsContainerProps) => {
  if(!props.news.length) {
    return (
      <>
        <div className='flex'>
            <div className='flex flex-col max-w-xl px-10 py-8 gap-8'>
              <div>
                <h1 className='font-ps2p text-2xl max-w-lg'>Notícias Não Encontradas</h1>
                <h2 className='font-ps2p text-xs max-w-lg text-black/50'>Error - Falha de Comunicação</h2>
              </div>
              <p className='max-w-md'>No momento não conseguimos nos conectar ao banco de notícias do PET-SIMC. Caso sua internet esteja funcionando normalmente, favor entrar em um contato com um membro do PET-SIMC informando o erro.</p>
            </div>
            
            <div className='flex flex-col py-8 gap-8 px-10 justify-center'>
              <Image 
                src={"/images/ufu.jpg"}
                alt={"Logo do PET-SIMC"}
                width={400}
                height={200}
                className='aspect-video max-w-xl blur-sm'
              />
  
              <div className="flex items-center justify-between px-2">
                <div className="flex justify-center items-center p-1 bg-w95-grey">
                  <button className='w-20 h-7 flex justify-center items-center bg-w95-light-grey'>
                    <Image 
                      src="/images/left_arrow.svg" 
                      alt="Previous News Icon"
                      width={12}
                      height={12}
                    />
                  </button>
                </div>
  
                <div className='flex gap-8'>
                  <CarouselRadioButton id="no_news" name="last_news" selected/>
                </div>
  
                <div className="flex justify-center items-center p-1 bg-w95-grey">
                  <button className='w-20 h-7 flex justify-center items-center bg-w95-light-grey'>
                    <Image 
                      src="/images/right_arrow.svg" 
                      alt="Next News Icon"
                      width={12}
                      height={12}
                    />
                  </button>
                </div>
              </div>
            </div>
        </div>
      </>
    )
  }

  const [ current, setCurrent ] = useState<number>(0);  
  const [ currentNews, setCurrentNews ] = useState<NewsArticle>(props.news[current]);
  useEffect(() => setCurrentNews(props.news[current]));
  
  return (
    <>
      <div className='flex'>
          <div className='flex flex-col max-w-xl px-10 py-8 gap-8'>
            <div>
              <h1 className='font-ps2p text-2xl max-w-lg'>{currentNews.title}</h1>
              <h2 className='font-ps2p text-xs max-w-lg text-black/50'>{currentNews.date}</h2>
            </div>
            <p className='max-w-md'>
              <span>{currentNews.content} </span>
              <a href={'/pages/news#' + currentNews.id} className="text-black/50">Leia mais...</a>
          </p>
          </div>
          
          <div className='flex flex-col py-8 gap-8 px-10 justify-center'>
            <Image 
              {...currentNews.icon}
              width={400}
              height={200}
              className='aspect-video max-w-xl'
            />

            <div className="flex items-center justify-between px-2">
              <div className="flex justify-center items-center p-1 bg-w95-grey">
                <button className='w-20 h-7 flex justify-center items-center bg-w95-light-grey' onClick={() => setCurrent( (props.news.length + current - 1) % props.news.length )}>
                  <Image 
                    src="/images/left_arrow.svg" 
                    alt="Previous News Icon"
                    width={12}
                    height={12}
                  />
                </button>
              </div>

              <div className='flex gap-8'>
                { props.news.map((element, index) => <CarouselRadioButton id={element.id + "_news"} name="recent_news" selected={index == current} onclick={() => setCurrent((index))}/>) }
              </div>

              <div className="flex justify-center items-center p-1 bg-w95-grey">
                <button className='w-20 h-7 flex justify-center items-center bg-w95-light-grey' onClick={() => setCurrent((current + 1) % props.news.length)}>
                  <Image 
                    src="/images/right_arrow.svg" 
                    alt="Next News Icon"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}