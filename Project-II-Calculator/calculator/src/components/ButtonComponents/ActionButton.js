import React from 'react';
import './Button.css';

const ActionButton = () => {
    return (
        <div className="actionKeys">
            <div className="actionButton">&#247;</div>
            <div className="actionButton">X</div>
            <div className="actionButton">-</div>
            <div className="actionButton">+</div>
            <div className="actionButton">=</div>
        </div>
    )
}

export default ActionButton;