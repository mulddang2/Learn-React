import { useState } from 'react';
import styles from './counter.module.css';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNum) => prevNum + 1);
  };
  const onDecrease = () => {
    setNumber((prevNum) => prevNum - 1);
  };

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.h1}>{number}</h1>
        <button onClick={onIncrease} className={styles.CounterButton}>
          +1
        </button>
        <button onClick={onDecrease} className={styles.CounterButton}>
          -1
        </button>
      </section>
    </>
  );
};

export default Counter;
