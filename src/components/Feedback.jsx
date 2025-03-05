

const Feedback = ({ feedback, total, positive, neutral, negative }) => {
  return (
    <div className="feedback-container">
      <h2>Feedback Summary</h2>
      <p>Good: {feedback.good} {positive}</p>
      <p>Neutral: {feedback.neutral} {neutral}</p>
      <p>Bad: {feedback.bad} {negative}</p>
      <p>Total: {total}%</p>
    </div>
  );
};

export default Feedback;

