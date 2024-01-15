import { useState } from 'react';
import { Statistics } from './components/Statistic/Statistics';
import { Feedback } from './components/Feedback/Feedback';
import { SectionTitle } from './components/Section/SectionTitle';
import { Notification } from './components/Notification/Notification';

import css from './components/Feedback/Feedback.module.css';

export const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };


  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const { good } = feedback;
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  // render() {
  //   const { good, neutral, bad } = feedback;
  //   const total = this.countTotalFeedback();
  //   const positivePercentage = this.countPositiveFeedbackPercentage();
  //   const options = Object.keys(feedback);

  return (
    <div className={css.feedback_container}>
      <SectionTitle title="Please leave feedback">
        <Feedback
          onLeaveFeedback={handleFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </SectionTitle>
      <SectionTitle title="Feedback Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          /> ) : ( 
          <Notification message="There is no feedback" />
        )}
      </SectionTitle>
    </div>
  );
};

