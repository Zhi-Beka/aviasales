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

  const handleChange = (label: string, id: number): void => {
    dispatch({ type: label, payload: { id, label } });
  };

  const filterData = data.map((el: checkboxType, index: number) => {
    return (
      <label htmlFor={el.title} key={index}>
        <input type='checkbox' name={el.title} checked={el.checked} onChange={() => handleChange(el.title, index)} />
        <span></span>
        <span className={style.label}>{el.title}</span>
      </label>
    );
  });

  return (
    <div className={style.box}>
      <h1>Количество пересадок</h1>
      <form className={style.form}>{filterData}</form>
    </div>
  );
};

export default Filter;
