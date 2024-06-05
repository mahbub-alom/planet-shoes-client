import axios from 'axios';
import React, { useState } from 'react';
import PageTitle from '../../../../Components/PageTitle';
import BestSellingCard from './BestSellingCard';

const BestSelling = () => {
    const [product, setProduct] = useState([])

    axios.get("http://localhost:5000/allproduct")
        .then(data => {
            setProduct(data.data)
        })


    return (
        <div>
            <PageTitle
                heading={"Best Selling"}
            >
            </PageTitle>
            <div className='md:grid grid-cols-3 gap-5'>
                {
                    product.slice(0,3).map(item=><BestSellingCard key={item?._id} data={item}></BestSellingCard>)
                }
            </div>
        </div>
    );
};

export default BestSelling;