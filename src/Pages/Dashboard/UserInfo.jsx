import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import axios from 'axios';
import useAuth from '../../hook/useAuth';
import { Link } from 'react-router-dom';
import Btn from '../../Components/Btn';
import { Helmet } from 'react-helmet-async';

const UserInfo = () => {

    const { user } = useAuth()

    const { isPending, data: singleUser = [], refetch } = useQuery({
        queryKey: ['singleUser'],
        queryFn: async () => {
            const res = await axios.get(`https://planet-shoes-server.onrender.com/user?email=${user?.email}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("access-token")}`
                    }
                }
            )
            return res.data;
        }
    })
    if (isPending) {
        return <LoadingSpinner />
    }
    const handleChangePass = () => {

    }
    return (

        <div className="overflow-x-auto w-full">
            <Helmet>
                <title>Planet Shoes | AddProducts</title>
            </Helmet>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {singleUser?.map((user, index) => <tr key={user._id}>
                        <th>
                            {index + 1}
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td>
                            {user?.name}
                        </td>
                        <td>{user?.email}</td>
                        <td>{user?.userAddress && user?.userAddress}</td>
                        <td>{user?.userPhone && user?.userPhone}</td>
                        <td>
                            <Link to={`/dashboard/updateUserInfo/${user?._id}`}>
                                <Btn btnText={"Update"}></Btn>
                            </Link>
                        </td>
                        <td>
                            <Link>
                                <Btn btnText={"Change Password"}></Btn>
                            </Link>
                        </td>
                    </tr>)}


                </tbody>


            </table>
        </div >

    );
};

export default UserInfo;