import style from './Filter.module.scss';

const Filter: React.FC = () => {
  const checkboxes = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  return (
    <div className={style.box}>
      <h1>Количество пересадок</h1>
      {checkboxes.map((el, index) => {
        return (
          <div key={index} className={style.filter}>
            <label htmlFor={el}>
              <input type='checkbox' id={el} name={el} /> {el}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
