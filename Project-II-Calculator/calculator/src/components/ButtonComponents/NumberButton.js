import React from 'react';
import './Button.css';

const NumberButton = () => {

    return (
        <div className="numberPad">
            <div className="numberButton" id="clear">clear</div>
            <div className="numberButton">7</div>
            <div className="numberButton">8</div>
            <div className="numberButton">9</div>
            <div className="numberButton">4</div>
            <div className="numberButton">5</div>
            <div className="numberButton">6</div>
            <div className="numberButton">1</div>
            <div className="numberButton">2</div>
            <div className="numberButton">3</div>
            <div className="numberButton" id="zero">0</div>
        </div>
    );
}


export default NumberButton;