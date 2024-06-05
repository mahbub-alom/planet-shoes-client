import axios from 'axios';
import React, { useState } from 'react';
import PageTitle from '../../../../Components/PageTitle';
import BestSellerCard from './BestSellerCard';

const BestSeller = () => {
    const [seller, setSeller] = useState([])

    axios.get("http://localhost:5000/bestseller")
        .then(data => {
            setSeller(data.data)
        })


    return (
        <div>
            <PageTitle
                heading={"Best Seller"}
            >
            </PageTitle>
            <div className='md:grid grid-cols-3 gap-5'>
                {
                    seller.slice(1,2).map(item=><BestSellerCard key={item?._id} data={item}></BestSellerCard>)
                }
            </div>
        </div>
    );
};
export default BestSeller;