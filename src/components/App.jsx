import React, { useState, useEffect, useCallback } from 'react';
import Feedback from './Feedback';
import Notification from './Notification';
import Options from './Options';
import Description from './Description';
import styles from './App.module.css';

const getInitialState = () => {
  return () => ({
    good: parseInt(localStorage.getItem('good')) || 0,
    neutral: parseInt(localStorage.getItem('neutral')) || 0,
    bad: parseInt(localStorage.getItem('bad')) || 0,
  });
};

const App = () => {
  const [feedback, setFeedback] = useState(getInitialState());

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;

  useEffect(() => {
    Object.keys(feedback).forEach((key) => {
      localStorage.setItem(key, feedback[key]);
    });
  }, [feedback]);

  const resetFeedback = useCallback(() => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }, []);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sip Happens Café - Відгуки</h1>
        <Description />

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

        <Options 
          onGood={() => updateFeedback('good')}
          onNeutral={() => updateFeedback('neutral')}
          onBad={() => updateFeedback('bad')}
          onReset={resetFeedback}
          totalFeedback={totalFeedback}
        />
      </div>
    </div>
  );
};

export default App;
















