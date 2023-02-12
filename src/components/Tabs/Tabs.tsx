import style from './Tabs.module.scss';

const Tabs: React.FC = () => {
  const btn = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];
  return (
    <div className={style.filter}>
      {btn.map((el) => (
        <button className={style.btn} key={el}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
