import React from 'react';
import './Home.css'

const Home = () => {
    return (
      <div className='container mv-4 bg-info rounded-3'>
            <div className='row d-flex justify-content-centre align-items-center p-5 mt-2 header-height'>
            <div className='col-md-6'>
                <p className='mb-5 offer'>Sale up to <b> 70% </b>off</p>
                <h1 className=''>New Collection For Fall</h1>
                <p className=' mb-5'>Discover all the new arrivals of ready-to-wear collection.</p>
                 <a href="/shope-now" className='text-decoration-none text-dark px-5 py-3 mt-4 shop-btn'>SHOP NOW</a>
            </div>
            <div className='col-md-6'>
                <img className='container-img' src="emart-pic.jpeg" alt="emart-pic"/>
            </div>
        </div>
      </div>
    );
};

export default Home;