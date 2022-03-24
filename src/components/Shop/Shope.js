import React, { useEffect, useState } from 'react';
import './Shope.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToLocalStorag } from '../../utilities/LocalStoragrDB';

const Shope = () => {

    const [products, setProduct] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const addToCartbtn = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToLocalStorag(product.id);
    }
    const addToCartbtnTwo = (id) => {
        addToLocalStorag(id);
    }

    return (
        <div className="container">
            <h1 className='product-header-bg mt-3 p-4'>Choose the best product for you.</h1>
            <div className='colomn mt-4 p-4'>
                <div className='row-colomn '>
                    {
                        products.map(product =>
                            <Product
                                key={product.id}
                                product={product}
                                id={product.id}
                                category={product.category}
                                img={product.img}
                                price={product.price}
                                shipping={product.shipping}
                                quantity={product.quantity}
                                ratings={product.ratings}
                                ratingsCount={product.ratingsCount}
                                name={product.name}
                                stock={product.stock}
                                addToCartbtn={addToCartbtn}
                                addToCartbtnTwo={addToCartbtnTwo}
                            ></Product>
                        )
                    }
                </div>
                <div className='order-bg cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shope;