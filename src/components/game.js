import React from 'react';

import Header from './header.js';
import GuessSection from './guess-section.js';
import StatusSection from './status-section.js';
import Info from './info.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your Guess!',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        };
    }

    restartGame() {
        this.setState({
            guesses: [],
            feedback: 'Make your Guess!',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        });
    }

    makeGuess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({ feedback: 'Please enter a valid number' });
            return;
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        } else if (difference >= 25) {
            feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
            feedback = 'You\'re warm.';
        } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You got it!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });

        document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
    }

    render() {
        const { feedback, guesses } = this.state;
        const guessCount = guesses.length;

        return (
            <div>
                <Header
                    onRestartGame={() => this.restartGame()}
                />
                <main role="main">
                    <GuessSection
                        feedback={feedback}
                        guessCount={guessCount}
                        onMakeGuess={guess => this.makeGuess(guess)}
                    />
                    <StatusSection 
                        guesses={guesses}
                    />
                    <Info />
                </main>
            </div>
        );
    }
}