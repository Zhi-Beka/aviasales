/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */

import style from './Filter.module.scss';
import { checkboxData } from '../../helpers/filtersName';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ICheckbox {
  id: number;
  label: string;
  value: string;
}

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const activeFilter = useTypedSelector((state) => state.filter?.activeFilter);

  const handleFilterAll = (type: string, payload: ICheckbox[]): void => {
    dispatch({ type, payload });
  };

  const handleFilter = (label: string, payload: ICheckbox): void => {
    dispatch({ type: label, payload });
  };

  const filterData = checkboxData.map((el) => {
    return (
      <label key={el.id}>
        <input
          type='checkbox'
          name={el.value}
          checked={activeFilter?.includes(el.value)}
          onChange={() => handleFilter(el.value, el)}
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
            type='checkbox'
            name='ALL'
            onChange={() => handleFilterAll('ALL', checkboxData)}
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
