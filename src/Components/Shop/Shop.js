import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [page, setPage] = useState(2)
    let range = [[0, 0], [0, 10], [10, 20], [20, 30], [30, 40], [40, 50], [50, 60], [60, 70], [70, 81]]
    const currentRange = (num, num2) => fakeData.slice(num, num2)
    const currentProduct = currentRange(...range[page])
    const [products, setProducts] = useState(currentProduct)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        console.log('Product added', product);
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const showPrev = () => {
        console.log('prev button clicked')
        if (page > 1) {
            setPage(page - 1)
            setProducts(currentRange(...range[page]))
        }
    }
    const showNext = () => {
        console.log("next button clicked")
        if (page < 8) {
            setPage(page + 1)
            setProducts(currentRange(...range[page]))
        }
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleAddProduct={handleAddProduct} key={product.key} product={product}></Product>)
                }
                <div className="navbtn">
                    <button onClick={showPrev}>Prev</button>
                    <span>Current Page {page}</span>
                    <button onClick={showNext}>Next</button>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;