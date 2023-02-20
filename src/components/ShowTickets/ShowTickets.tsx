import { FC } from 'react';
import { useDispatch } from 'react-redux';
import style from './ShowTickets.module.scss';

const ShowTickets: FC = () => {
  const dispatch = useDispatch();

  const showMoreTickets = (): void => {
    dispatch({ type: 'Show more', payload: 5 });
  };

  return (
    <div className={style.show}>
      <button onClick={showMoreTickets}>Показать еще 5 билетов!</button>
    </div>
  );
};

export default ShowTickets;
