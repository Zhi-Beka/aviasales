import style from './TicketCard.module.scss';
import { getTime, showTime, showTransfers } from '../../helpers/ticketHelper';
import { FC } from 'react';

interface Info {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}

interface ITicketsCardProps {
  key: string;
  price: number;
  info: Info[];
  logo: string;
}

const TicketCard: FC<ITicketsCardProps> = (props) => {
  const { price, info, logo } = props;
  const logoPath = `https://pics.avs.io/99/36/${logo}.png`;
  const formatter = new Intl.NumberFormat('ru');
  const formatPrice = formatter.format(price);

  const infoSegments = info.map((el) => {
    return (
      <div className={style.info} key={el.origin + el.duration + el.date}>
        <div className={style.content}>
          <p className={style.city}>
            {el.origin}-{el.destination}
          </p>
          <p className={style.time}>{getTime(el.date, el.duration)}</p>
        </div>
        <div className={style.content}>
          <p className={style.city}>В ПУТИ</p>
          <p className={style.time}>{showTime(el.duration)}</p>
        </div>
        <div className={style.content}>
          <p className={style.city}> {showTransfers(el.stops.length)} </p>
          <p className={style.time}>{el.stops.join(', ')}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={style.card}>
      <div className={style.header}>
        <h2>{formatPrice} P</h2>
        <img alt='logo' src={logoPath} className={style.img} />
      </div>
      {infoSegments}
    </div>
  );
};

export default TicketCard;
