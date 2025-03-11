import React from 'react';
import styles from './Options.module.css';

const Options = ({ onGood, onNeutral, onBad, onReset, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button className={styles.button} onClick={onGood}>Добре</button>
      <button className={styles.button} onClick={onNeutral}>Нейтрально</button>
      
      {/* Кнопка "Скинути" під "Нейтрально" */}
      {totalFeedback > 0 && (
        <button className={styles.button} onClick={onReset}>Скинути</button>
      )}

      <button className={styles.button} onClick={onBad}>Погано</button>
    </div>
  );
};

export default Options;












