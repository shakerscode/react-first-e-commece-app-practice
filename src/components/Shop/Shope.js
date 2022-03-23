import React, { useEffect, useState } from 'react';
import './Shope.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
    }

    return (
        <div className='container'>
            <h1 className='m-4 p-4 product-header-bg'>Get Your Best Choiceable Products</h1>
            <div className="row">
                <div className='col-md-8  g-2'>
                    <div className='row bg-info'>
                        <div className=''>
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

                                    ></Product>
                                )
                            }
                        </div>
                    </div>

                </div>
                <div className='col-md-3 order-bg ms-2 mt-4 p-2 cart sticky-top'>
                            <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shope;