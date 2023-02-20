import Tabs from '../Tabs';
import Filter from '../Filter';
import TicketList from '../TicketList';
import style from './App.module.scss';
import plane from '../../assets/Logo.png';
import ShowTickets from '../ShowTickets';
import { useBindActions } from '../../hooks/useBindActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { useFilterTickets } from '../../hooks/useFilterCheckBox';

const App: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState('');
  const { getIdSearch } = useBindActions();
  const { error, ticketsData, loading } = useTypedSelector((state) => state.tickets);
  const activeFilter = useTypedSelector((state) => state.filter.activeFilter);
  const count = useTypedSelector((state) => state.showMore.show);
  const slicedData = ticketsData.slice(0, count);
  const filteredTickets = useFilterTickets(activeFilter, slicedData, selectedSort);

  const sortHandleChange = (value: string) => {
    setSelectedSort(value);
  };

  useEffect(() => {
    getIdSearch();
  }, []);

  const load = loading && <BarLoader color='#168cec' width='100%' cssOverride={{ marginBottom: 20 }} />;

  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img alt='logo' src={plane} />
      </div>

      <main className={style.main}>
        <Filter />
        <section className={style.section}>
          <Tabs sortHandleChange={sortHandleChange} />
          {load}
          {error && <div>{error}</div>}
          {!filteredTickets.length && !loading && !error && (
            <h4 className={style.warning}>Рейсов, подходящих под заданные фильтры, не найдены</h4>
          )}

          <TicketList data={filteredTickets} />

          <ShowTickets />
        </section>
      </main>
    </div>
  );
};

export default App;
