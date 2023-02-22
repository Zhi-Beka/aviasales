import { FC } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import { generateKey } from '../../helpers/ticketHelper';
import { TicketsObjectType } from '../../types/ticketsType';

interface ITicketListProps {
  data: TicketsObjectType;
  count?: number;
}
const TicketList: FC<ITicketListProps> = (props) => {
  const { data } = props;

  return (
    <>
      {data?.map((el: { carrier: string; price: number; segments: any[] }, index) => {
        return <TicketCard key={index.toString()} price={el.price} info={el.segments} logo={el.carrier} />;
      })}
    </>
  );
};

export default TicketList;
