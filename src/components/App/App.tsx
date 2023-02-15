import Tabs from '../Tabs';
import Filter from '../Filter';
import TicketList from '../TicketList';
import style from './App.module.scss';
import plane from '../../assets/Logo.png';
import ShowTickets from '../ShowTickets';

const App: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img alt='logo' src={plane} />
      </div>

      <main className={style.main}>
        <Filter />
        <section className={style.section}>
          <Tabs />
          <TicketList />
          <ShowTickets />
        </section>
      </main>
    </div>
  );
};

export default App;
