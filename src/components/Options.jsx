// import React from 'react';
import styles from './App.module.css'; 

const Options = ({ totalFeedback, onReset }) => {
  return (
    <div className={styles.options}>
      {totalFeedback > 0 && (
        <button className={styles.resetButton} onClick={onReset}>Скинути відгуки</button>
      )}
    </div>
  );
};

export default Options;









