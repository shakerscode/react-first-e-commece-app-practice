import React from 'react';

const Cart = ({cart}) => {

    let totalShopping = 0;
    let shippingCost = 0;
    for(const price of cart){
        totalShopping = totalShopping + price.price;
        shippingCost = shippingCost + price.shipping;
    }
    const tax =  parseFloat((totalShopping * 0.1).toFixed(2));
    const totalCost = totalShopping + shippingCost + tax;

    return (
        <div>
            <h5 className='p-3'>Order Summery</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Shopping Cost: {totalShopping}$</p>
            <p>Shipping Cost: {shippingCost}$</p>
            <p>Tax: {tax}$</p>
            <p>Total Cost: {totalCost}$</p>
        </div>
    );
};

export default Cart;