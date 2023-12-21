import { Window } from './components/window';
import { monda, ps2p } from './fonts';
import './globals.css';

const Home = () => {
    return (
      <main className={`${monda.variable} ${ps2p.variable} font-monda`}>
          <div>PET-SIMC - Home</div>
          <Window></Window>
      </main>
    )
  }

export default Home;
  