import React from 'react';

const Buttons = ({ num: { ball, strikes, foul }, increaseNum, hitBall }) => {
    return (
        <div>
            <button
                name="ball"
                value={ball}
                onClick={increaseNum}
                data-testid="ballBtn">
                Ball</button>
            <button
                name="foul"
                value={foul}
                onClick={increaseNum}
                data-testid="foulBtn">
                Foul</button>
            <button
                name="strikes"
                value={strikes}
                onClick={increaseNum}
                data-testid="strikesBtn">
                Strike</button>
            <button
                onClick={hitBall}
                data-testid="hitBtn">
                Hit</button>
        </div>
    )
}

export default Buttons;