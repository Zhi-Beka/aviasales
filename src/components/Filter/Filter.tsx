/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import style from './Filter.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { checkboxType } from '../../types/filterTypes';

const Filter: React.FC = () => {
  const data = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, checked } = e.target;
    dispatch({ type: name, payload: { checked, name } });
  };

  const filterData = data.map((el: checkboxType, index: number) => {
    return (
      <label key={index}>
        <input type='checkbox' name={el.title} checked={el?.isChecked || false} onChange={handleChange} />
        <span></span>
        <span className={style.label}>{el.title}</span>
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
            type='checkbox'
            checked={!data.some((el) => el?.isChecked !== true)}
            onChange={handleChange}
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
