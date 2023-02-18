import Tabs from '../Tabs';
import Filter from '../Filter';
import TicketList from '../TicketList';
import style from './App.module.scss';
import plane from '../../assets/Logo.png';
import ShowTickets from '../ShowTickets';
import { useBindActions } from '../../hooks/useBindActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ErrorIndicator } from '../../errorProvider/ErrorMessage';
import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';
import { checkboxData } from '../../helpers/filtersName';
import { useFilterTickets } from '../../hooks/useFilterCheckBox';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<any>(['NONE', 'ONE', 'TWO', 'THREE']);
  const [selectedSort, setSelectedSort] = useState('');
  const { getTicketsThunk } = useBindActions();
  const { error, ticketsData, loading } = useTypedSelector((state) => state.tickets);
  const count = useTypedSelector((state) => state.showMore.show);
  const slicedData = ticketsData.slice(0, count);

  const onFilterChange = (filter: string) => {
    if (filter === 'ALL') {
      if (activeFilter?.length === checkboxData.length) {
        setActiveFilter([]);
      } else {
        setActiveFilter(checkboxData.map((filter) => filter.value));
      }
    } else {
      if (activeFilter?.includes(filter)) {
        const newFilter = activeFilter.filter((item: string) => item !== filter);
        setActiveFilter(newFilter);
      } else {
        setActiveFilter([...activeFilter, filter]);
      }
    }
  };

  const filteredTickets = useFilterTickets(activeFilter, slicedData, selectedSort);

  const sortHandleChange = (value: string) => {
    setSelectedSort(value);
  };

  useEffect(() => {
    getTicketsThunk();
  }, [count]);

  const load = loading ? <Loader /> : null;

  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img alt='logo' src={plane} />
      </div>

      <main className={style.main}>
        <Filter onFilterChange={onFilterChange} activeFilter={activeFilter} />
        <section className={style.section}>
          <Tabs sortHandleChange={sortHandleChange} />
          {load}
          {error ? (
            <ErrorIndicator message='Рейсов, подходящих под заданные фильтры, не найдено' />
          ) : (
            <TicketList data={filteredTickets} />
          )}

          <ShowTickets />
        </section>
      </main>
    </div>
  );
};

export default App;
