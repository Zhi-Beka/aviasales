/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */

import style from './Filter.module.scss';
import { checkboxData } from '../../helpers/filtersName';
type FilterProps = {
  onFilterChange: (arg: string) => void;
  activeFilter: any[];
};

const Filter: React.FC<FilterProps> = ({ onFilterChange, activeFilter }) => {
  const filterData = checkboxData.map((el) => {
    return (
      <label key={el.id}>
        <input
          type='checkbox'
          name={el.label}
          checked={activeFilter?.includes(el.value)}
          onChange={() => onFilterChange(el.value)}
        />
        <span></span>
        <span className={style.label}>{el.label}</span>
      </label>
    );
  });

  return (
    <div className={style.box}>
      <h1>Количество пересадок</h1>

      <form className={style.form}>
        <label>
          <input
            name='Все'
            id='all'
            type='checkbox'
            onChange={() => onFilterChange('ALL')}
            checked={activeFilter?.length === checkboxData.length}
          />
          <span></span>
          <span className={style.label}>Все</span>
        </label>
        {filterData}
      </form>
    </div>
  );
};

export default Filter;
