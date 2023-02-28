/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import TicketCard from '../TicketCard/TicketCard';
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
        el.price + el.segments[0].date + el.segments[0].duration + el.segments[1].date + el.segments[1].duration;
        return (
          <TicketCard
            key={
              el.price + el.segments[0].date + el.segments[0].duration + el.segments[1].date + el.segments[1].duration
            }
            price={el.price}
            info={el.segments}
            logo={el.carrier}
          />
        );
      })}
    </>
  );
};

export default TicketList;
