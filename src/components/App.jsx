import react, { useState, useEffect } from "react";
import Feedback from "./Feedback";
import Options from "./Options";
import "./App.css"; 

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1 className="title">Sip Happens Café</h1>
        <p className="description">Please leave your feedback about our service by selecting one of the options below.</p>
        <div className="buttons-container">
          <Options onLeaveFeedback={handleFeedback} />
          <button className="reset-button" onClick={resetFeedback}>Reset Feedback</button>
        </div>
        {totalFeedback > 0 ? (
          <Feedback feedback={feedback} total={totalFeedback} />
        ) : (
          <p className="notification">No feedback given yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;










