import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        <div className={css.btn_list}>
        {options.map(option => (
            <li key={option}>
            <button
                onClick={() => onLeaveFeedback(option)}
                className={css.btn}
                type="button"
            >
                {option}
            </button>
            </li>
        ))}
        </div>
    </div>
    );
};

export { Feedback };