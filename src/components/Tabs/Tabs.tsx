/* eslint-disable react/prop-types */

import { sortButtonData } from '../../helpers/filtersName';
import style from './Tabs.module.scss';

interface TabsProps {
  sortHandleChange: (arg1: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ sortHandleChange }) => {
  return (
    <div className={style.filter}>
      {sortButtonData.map((el) => (
        <button className={style.btn} key={el.label} onClick={() => sortHandleChange(el.value)}>
          {el.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
