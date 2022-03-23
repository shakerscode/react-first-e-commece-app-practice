import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = ({ name,shipping, key, category, img, price, ratings, ratingsCount, quantity, stock, addToCartbtn, product }) => {
    return (
        <div className=' shadow-lg p-3 m-3'>

            <img className='w-75' src={img} alt="images" />
            <div className='p-4'>
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <p>Price: {price}$</p>
                <p>Shipping: {shipping}$</p>
                <p>Ratings: {ratings}</p>
                <p>Ratings Count: {ratingsCount}</p>
                <p>Quantity: {quantity}</p>
                <p>Stock: {stock}</p>
            </div>
            <button onClick={() => addToCartbtn(product)} className='px-5 py-3 add-to-cart'>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            
            </button> 
        </div>
    );
};

export default Product;