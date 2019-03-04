import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    render() {
        return (
            <form>
                <input
                    type="number"
                    name="userGuess"
                    id="userGuess"
                    className="text"
                    min="1"
                    max="100"
                    ref={input => (this.input = input)}
                    required
                />
                <button 
                    type="submit"
                    name="submit"
                    id="guessButton"
                    className="button"
                >
                    Guess
                </button>
            </form>
        );
    }
}