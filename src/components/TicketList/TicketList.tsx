import { FC } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import { generateKey } from '../../helpers/ticketHelper';
import { TicketsObjectType } from '../../types/ticketsType';
import { ErrorIndicator } from '../../errorProvider/ErrorMessage';

interface ITicketListProps {
  data: TicketsObjectType;
}
const TicketList: FC<ITicketListProps> = (props) => {
  const { data } = props;

  return (
    <>
      {data?.map((el: { carrier: string; price: number; segments: any[] }) => {
        const uniqKey = `_${el.carrier}_${el.price}_`;
        return <TicketCard key={generateKey(uniqKey)} price={el.price} info={el.segments} logo={el.carrier} />;
      })}
    </>
  );
};

export default TicketList;
