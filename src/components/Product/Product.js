import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = ({ name, shipping, id, category, img, price, ratings, ratingsCount, quantity, stock, addToCartbtn, product, addToCartbtnTwo }) => {
    return (
        
                   <div className='row-colomn-width shadow mt-3'>
                    <img className='w-75 p-2 rounded' src={img} alt="images" />
                    <div className='p-3'>
                        <h5>{name}</h5>
                        <p>Category: {category}</p>
                        <p>Price: {price}$</p>
                        <p>Shipping: {shipping}$</p>
                        <p>Ratings: {ratings}</p>
                        <p>Ratings Count: {ratingsCount}</p>
                        <p>Stock: {stock}</p>
                    </div>
                   <div className='p-3'>
                   <button onClick={() => addToCartbtn(product)} className='px-3 py-2 add-to-cart'>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                    <button onClick={() => addToCartbtnTwo(id)} className='px-3 fs-6 mt-2 py-2 ms-2 add-to-cart'>Add to Cart & LocalStorage <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>

                    </button>
                   </div>
                    </div>

    );
};

export default Product;