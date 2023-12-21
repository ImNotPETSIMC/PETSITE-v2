import { Window } from './components/window';
import { monda, monoton, ps2p } from './fonts';
import './globals.css';

const Home = () => {
    return (
      <main className={`${monda.variable} ${ps2p.variable} ${monoton.variable} font-monda`}>
          <Window>
            <div className='font-monoton p-16 px-32 text-7xl text-[#593CFA]'>
              PET-SIMC
            </div>
          </Window>
      </main>
    )
  }

export default Home;
  