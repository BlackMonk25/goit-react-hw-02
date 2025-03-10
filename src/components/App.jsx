import React, { useState, useEffect } from 'react';
import Feedback from './Feedback';
import Notification from './Notification';
import Options from './Options';
import styles from './App.module.css'; // Імпорт стилів через CSS Module

const App = () => {
  const getInitialState = () => {
    const savedGood = localStorage.getItem('good');
    const savedNeutral = localStorage.getItem('neutral');
    const savedBad = localStorage.getItem('bad');
    
    return {
      good: savedGood ? parseInt(savedGood) : 0,
      neutral: savedNeutral ? parseInt(savedNeutral) : 0,
      bad: savedBad ? parseInt(savedBad) : 0,
    };
  };

  const [good, setGood] = useState(getInitialState().good);
  const [neutral, setNeutral] = useState(getInitialState().neutral);
  const [bad, setBad] = useState(getInitialState().bad);

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;

  useEffect(() => {
    localStorage.setItem('good', good);
    localStorage.setItem('neutral', neutral);
    localStorage.setItem('bad', bad);
  }, [good, neutral, bad]);

  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sip Happens Café - Відгуки</h1>

        {totalFeedback > 0 ? (
          <Feedback 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            totalFeedback={totalFeedback} 
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}

        {totalFeedback > 0 && (
          <Options totalFeedback={totalFeedback} onReset={resetFeedback} />
        )}

        <div>
          <button className={styles.button} onClick={() => setGood(good + 1)}>Добре</button>
          <button className={styles.button} onClick={() => setNeutral(neutral + 1)}>Нейтрально</button>
          <button className={styles.button} onClick={() => setBad(bad + 1)}>Погано</button>
        </div>
      </div>
    </div>
  );
};

export default App;
















