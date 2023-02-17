import style from './TicketCard.module.scss';
import logo from '../../assets/S7logo.png';
import { FC } from 'react';
import { ITickets } from '../../types/ticketsType';

interface ITicketsCardProps {
  key: number;
  price: number;
}

const TicketCard: FC<ITicketsCardProps> = (props) => {
  const { price } = props;

  return (
    <div className={style.card}>
      <div className={style.header}>
        <p>{price}P</p>
        <img alt='logo' src={logo} className={style.img} />
      </div>
      <div className={style.info}>
        <div className={style.content}>
          <p className={style.city}>MOS-HKT</p>
          <p className={style.time}>10:45-08:00</p>
        </div>
        <div className={style.content}>
          <p className={style.city}> in Path</p>
          <p className={style.time}>21h15m</p>
        </div>
        <div className={style.content}>
          <p className={style.city}>2 transfers</p>
          <p className={style.time}>HKG,JNB</p>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.content}>
          <p className={style.city}>MOS-HKT</p>
          <p className={style.time}>10:45-08:00</p>
        </div>
        <div className={style.content}>
          <p className={style.city}> in Path</p>
          <p className={style.time}>21h15m</p>
        </div>
        <div className={style.content}>
          <p className={style.city}>2 transfers</p>
          <p className={style.time}>HKG,JNB</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
