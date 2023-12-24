import Image from 'next/image';
import { Window } from './components/window';
import { monda, monoton, ps2p } from './fonts';
import './globals.css';
import { NavBar } from './components/nav_bar';

const Home = () => {
    return (
      <main className={`${monda.variable} ${ps2p.variable} ${monoton.variable} font-monda p-5`}>
        <div className='flex gap-10'>
          <NavBar />

          <div className='flex gap-5 -translate-x-2'>
            <Window>
              <div className='font-monoton p-20 px-30 text-8xl text-[#593CFA]'> PET-SIMC </div>
            </Window>
            
            <div className='translate-y-5'>
              <Window>
                <div className='p-10'>
                  <Image 
                    src="/images/pet_logo.png"
                    width={200}
                    height={200}
                    alt="PET-SIMC's Logo"
                    style={{ mixBlendMode: "multiply" }}
                  />  
                </div>
              </Window>
            </div>
          </div>

        </div>

      </main>
    )
  }

export default Home;
  