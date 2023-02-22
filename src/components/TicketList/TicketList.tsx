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
      {data?.map((el: { carrier: string; price: number; id: string; segments: any[] }) => {
        return <TicketCard key={el.id} price={el.price} info={el.segments} logo={el.carrier} />;
      })}
    </>
  );
};

export default TicketList;
