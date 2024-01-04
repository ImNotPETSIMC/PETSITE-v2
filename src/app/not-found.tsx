'use client';

import './globals.css';

import { Window } from './components/window';
import { NavItem, NavItemProps } from './components/nav_item';

const NotFound = () => {
  const desktopItem : NavItemProps = {
    url: "/",
    name: "Home",
    icon: {
      src: "/images/home_icon.png",
      alt: "Home Icon"
    }
  };

  return (
    <>
      <div className='flex justify-center items-center p-10 grow'>
        <Window>
          <div className={'flex flex-col items-center gap-2 p-8'}>
            <div className='flex flex-col gap-8 order-1 transition-all items-center'>
              <div className="font-ps2p flex-col flex gap-2">
                <h1 className='text-lg text-center'>404 - Not Found</h1>
                <h2 className='text-xs text-center text-black/50 dark:text-white/50'>A página que você tentou acessar não foi encontrada.</h2>
              </div>
              <nav>
                <NavItem key={desktopItem.url} {...desktopItem} />
              </nav>
            </div>
          </div>
        </Window>
      </div>
    </>
  )
}

export default NotFound;