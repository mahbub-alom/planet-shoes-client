import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';

const MyProduct = () => {
    const [product, setProduct] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/getproduct?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`
            }
        })
            .then(data => {
                setProduct(data.data)
            })
    }, [user?.email])


    return (
        <div>

        </div>
    );
};

export default MyProduct;