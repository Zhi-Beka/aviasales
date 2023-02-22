/* eslint-disable react/prop-types */

import { sortButtonData } from '../../helpers/filtersName';
import style from './Tabs.module.scss';
import classNames from 'classnames';
interface TabsProps {
  sortHandleChange: (arg1: string) => void;
  sort: string;
}

const Tabs: React.FC<TabsProps> = ({ sortHandleChange, sort }) => {
  return (
    <div className={style.filter}>
      {sortButtonData.map((el) => (
        <button
          className={classNames(style.btn, { [style.activeColor]: sort === el.value })}
          key={el.label}
          onClick={() => sortHandleChange(el.value)}
        >
          {el.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
