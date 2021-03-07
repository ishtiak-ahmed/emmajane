import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from './ReviewItem';
import Cart from '../Cart/Cart';
import './Review.css'


const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart)
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.count = saveCart[key]
            return product
        })
        setCart(cartProduct)
    }, [])
    const totalItem = cart.reduce((total, prd) => total + prd.count, 0)
    const removeProduct = (key) => {
        const newCart = cart.filter(pd => pd.key !== key)
        setCart(newCart)
        removeFromDatabaseCart(key)
    }
    return (
        <main>
            <div className="item">
                <h2>Total Item : {totalItem}</h2>
                {
                    cart.map(product => <ReviewItem event={removeProduct} key={product.key} product={product}></ReviewItem>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </main>
    );
};

export default Review;