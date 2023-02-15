import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import style from './Tabs.module.scss';

const Tabs: React.FC = () => {
  const buttons = useSelector((state: RootState) => state.sort);

  return (
    <div className={style.filter}>
      {buttons.map((el) => (
        <button className={style.btn} key={el}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
