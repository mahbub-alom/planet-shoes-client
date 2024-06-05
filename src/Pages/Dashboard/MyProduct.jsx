import axios from 'axios';
import React from 'react';
import useAuth from '../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Zoom } from 'react-awesome-reveal';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const MyProduct = () => {
    // const [product, setProduct] = useState([])
    const { user } = useAuth();

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/getproduct?email=${user?.email}`, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem("access-token")}`
    //         }
    //     })
    //         .then(data => {
    //             setProduct(data.data)
    //         })
    // }, [user?.email])

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
            return res.data
        }
    })
    if (isPending) {
        return <LoadingSpinner />
    }

    const handleDelete = (id) => {
        console.log(id)
    }


    return (


        <div className="overflow-x-auto w-full">
            <Zoom>
                <h1 className="text-2xl font-semibold text-center my-4 text-fuchsia-500">My Product</h1>
            </Zoom>
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
                    {singleData.map((item, index) => <tr key={item._id}>
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
                        <td>{item?._id}</td>
                        <th className='flex gap-2 items-center'>
                            <Link to={`/dashboard/updateproduct/${item?._id}`}>
                                <button className="btn btn-primary ">Edit</button>
                            </Link>

                            <button
                                onClick={() => handleDelete(item?._id)}
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