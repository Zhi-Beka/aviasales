import { FC, useEffect } from 'react';
//import { useSelector } from 'react-redux';
import TicketCard from '../TicketCard/TicketCard';
import { useBindActions } from '../../hooks/useBindActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getID } from '../../store/action-creators/tickets';

const TicketList: FC = () => {
  const { error, ticketsData, loading } = useTypedSelector((state) => state.tickets);

  const { getTickets } = useBindActions();

  useEffect(() => {
    getID().then((data) => getTickets(data));
  }, []);

  const ticketsPortion = ticketsData?.slice(0, 5).map((el, index) => {
    return <TicketCard key={index} price={el.price} info={el.segments} logo={el.carrier} />;
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }
  return <>{ticketsPortion}</>;
};

export default TicketList;
