import React from 'react';

import './feedback.css';

export default function Feedback(props) {
    return (
        <h2
            key={key}
            id="feedback"
            role="status"
        >
            {props.feedback}
        </h2>
    );
}