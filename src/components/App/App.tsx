import Tabs from '../Tabs';
import Filter from '../Filter';
import TicketList from '../TicketList';
import style from './App.module.scss';
import plane from '../../assets/Logo.png';
import { useBindActions } from '../../hooks/useBindActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { useFilterTickets } from '../../hooks/useFilterCheckBox';
import { fetchTickets } from '../../store/action-creators/tickets';

const App: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState('CHIP');
  const [amount, setAmount] = useState(5);
  const { getIdSearch } = useBindActions();
  const { error, ticketsData, loading, searchId } = useTypedSelector((state) => state.tickets);
  const activeFilter = useTypedSelector((state) => state.filter.activeFilter);
  const filteredTickets = useFilterTickets(activeFilter, ticketsData, selectedSort);

  const sortHandleChange = (value: string) => {
    setSelectedSort(value);
  };
  const handleSliceButton = () => {
    setAmount(amount + 5);
  };

  const slicedData = filteredTickets.slice(0, amount);

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
          <Tabs sortHandleChange={sortHandleChange} sort={selectedSort} />
          {load}
          {error && <div>{error}</div>}
          {!slicedData.length && !loading && !error && (
            <h4 className={style.warning}>Рейсов, подходящих под заданные фильтры, не найдены</h4>
          )}

          <TicketList data={slicedData} />

          <div className={style.show}>
            <button onClick={handleSliceButton}>Показать еще 5 билетов!</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
