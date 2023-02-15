import style from './Filter.module.scss';
import { checkboxes } from '../../utils';
import { useState } from 'react';

const Filter: React.FC = () => {
  const [state, setState] = useState(checkboxes);

  const updateCheckBox = (id: number) => {
    setState((state) => state.map((el, index) => (index === id ? { ...el, checked: !el.checked } : el)));
  };

  const filter = state.map((el, index) => {
    return (
      <label htmlFor={el.title} key={index}>
        <input
          type='checkbox'
          id={el.title}
          name={el.title}
          checked={el.checked}
          onChange={() => updateCheckBox(index)}
        />
        <span></span>

        <span className={style.label}>{el.title}</span>
      </label>
    );
  });

  return (
    <div className={style.box}>
      <h1>Количество пересадок</h1>
      <form className={style.form}>{filter}</form>
    </div>
  );
};

export default Filter;
