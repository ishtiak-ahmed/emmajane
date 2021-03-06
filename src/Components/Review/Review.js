import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Product from '../Product/Product';
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
    return (
        <div>
            <h2>Review Order</h2>
            {
                cart.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Review;