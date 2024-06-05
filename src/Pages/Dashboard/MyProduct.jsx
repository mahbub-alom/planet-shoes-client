import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Zoom } from 'react-awesome-reveal';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyProduct = () => {
    const [searchText, setSearchText] = useState("");
    const [product,setProduct]=useState([])
    const { user } = useAuth();


    const { isPending, data: singleData = [], refetch } = useQuery({
        queryKey: ['singleData'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/getproduct?email=${user?.email}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("access-token")}`
                    }
                }
            )
            setProduct(singleData)
            return res.data;
            
        }
    })
    if (isPending) {
        return <LoadingSpinner />
    }

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/deleteproduct/${item?._id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("access-token")}`
                    }
                })
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }

    const handleSearch = () => {
        axios.get(`http://localhost:5000/searchProduct/${searchText}`)
            .then(data => {
                setProduct(data.data)
            })
    };


    return (


        <div className="overflow-x-auto w-full">
            <Zoom>
                <h1 className="text-2xl font-semibold text-center my-4 text-fuchsia-500">My Product</h1>
            </Zoom>
            <div className=" flex gap-2 mb-3 justify-center search-box p-2 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1 rounded border-2 border-black"
                />
                <button onClick={handleSearch} className="btn btn-primary">Search</button>
            </div>


            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Seller Email</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product?.map((item, index) => <tr key={item._id}>
                        <th>
                            {index + 1}
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item?.prodcutImage} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td>
                            {item?.productName}
                        </td>
                        <td>{item?.sellerEmail}</td>
                        <td>${item?.price}</td>
                        <td>{item?.discount}%</td>
                        <th className='flex gap-2 items-center'>
                            <Link to={`/dashboard/updateproduct/${item?._id}`}>
                                <button className="btn btn-primary ">Edit</button>
                            </Link>

                            <button
                                onClick={() => handleDelete(item)}
                                className="btn btn-error"
                            >
                                Delete
                            </button>

                        </th>
                    </tr>)}


                </tbody>


            </table>
        </div>

    );
};

export default MyProduct;