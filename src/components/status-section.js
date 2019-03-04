import React from 'react';

import './status-section.css';

import GuessCount from './guess-count';
import GuessHistory from './guess-history';

export default function StatusSection(props) {
    const guesses = props;
    const guessCount = guesses.length;

    return (
        <section>
            <GuessCount guessCount={guessCount} />
            <GuessHistory guesses={guesses} />
        </section>
    );
}