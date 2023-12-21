import Image from 'next/image';
import { Window } from './components/window';
import { monda, monoton, ps2p } from './fonts';
import './globals.css';

const Home = () => {
    return (
      <main className={`${monda.variable} ${ps2p.variable} ${monoton.variable} font-monda`}>
          <Window>
            <div className='font-monoton p-16 px-32 text-7xl text-[#593CFA]'> PET-SIMC </div>
          </Window>
          
          <Window>
            <Image 
              src="/images/pet_logo.png"
              width={250}
              height={250}
              alt="PET-SIMC's Logo"
              style={{ mixBlendMode: "multiply" }}
            />
          </Window>
      </main>
    )
  }

export default Home;
  