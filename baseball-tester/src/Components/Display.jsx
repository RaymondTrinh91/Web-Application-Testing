import React from 'react';

const Display = props => {
    const { ball, strikes } = props.num

    return (
        <div>
            <p data-testid="ballCount">Ball: {ball}</p>
            <p data-testid="strikeCount">Strikes: {strikes}</p>
        </div>
    )
}

export default Display;