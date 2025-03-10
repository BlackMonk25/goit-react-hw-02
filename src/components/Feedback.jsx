// import React from 'react';
import styles from './App.module.css'; // Імпортуємо модуль стилів

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <h2 className={styles.subtitle}>Статистика відгуків:</h2>
      <p className={styles.text}>Добре: {good}</p>
      <p className={styles.text}>Нейтрально: {neutral}</p>
      <p className={styles.text}>Погано: {bad}</p>
      <p className={styles.text}>Загальна кількість відгуків: {totalFeedback}</p>
      <p className={styles.text}>Позитивних відгуків: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;





