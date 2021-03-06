import React from 'react';

const ReviewItem = (props) => {
    const { name, count, price, seller, key } = props.product
    return (
        <div>
            <h2>{name}</h2>
            <p>{seller}</p>
            <p>Quantity: {count}</p>
            <p>Total Price : {price * count}</p>
            <button onClick={() => props.event(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;