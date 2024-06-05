import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const UpdateProduct = () => {
    const { user } = useAuth()
    const datas = useLoaderData();
    const { id: ids } = useParams()
    const { register, handleSubmit, reset } = useForm();



    const onSubmit = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to update this product",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#50C878",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update Product!",
        })
            .then(result => {
                if (result.isConfirmed) {
                    const productData = {
                        productName: data.productName,
                        sellerName: data.sellerName,
                        sellerEmail: user?.email,
                        availableProduct: parseInt(data.availableProduct),
                        price: parseInt(data.price),
                        description: data.description,
                        discount: parseInt(data.discount),
                    };
                    handleSwalFireWithUpdate(productData);
                }
            })
    }
    const handleSwalFireWithUpdate = (productData) => {
        axios.patch(`http://localhost:5000/updateproduct/${ids}`, productData, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`
            }
        })
            .then((data) => {
                if (data.data.modifiedCount > 0) {
                    reset();
                    Swal.fire(
                        `${productData.productName} Update Successfully!`,
                        "Your Product has been Updated.",
                        "success"
                    );
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <Zoom>
                <h1 className="text-2xl font-semibold text-fuchsia-500">Update a Product</h1>
            </Zoom>
            {
                datas.map(data => <div className="w-full mx-auto my-10" key={data._id}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-11/12 md:w-9/12 mx-auto p-4 bg-gray-100 shadow-md rounded-md"
                    >
                        <div className="flex gap-4">
                            <div className="mb-4 md:w-1/2">
                                <label className="text-gray-700 font-semibold">Product Name:</label>
                                <input
                                    type="text"
                                    {...register("productName", { required: true })}
                                    placeholder='Product Name'
                                    defaultValue={data?.productName}
                                    className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            {/* <div className="mb-4 md:w-1/2">
                                <label className="text-gray-700 font-semibold">
                                    Product Image:
                                </label>
                                <input
                                    type="file"
                                    {...register("productImage", { required: true })}
                                    className="file-input bg-indigo-100 h-11 file-input-bordered w-full "
                                />
                            </div> */}
                        </div>
                        <div className="md:flex gap-4">
                            <div className="mb-4 md:w-1/2">
                                <label className="text-gray-700 font-semibold">
                                    Seller Name:
                                </label>
                                <input
                                    type="text"
                                    defaultValue={data?.sellerName}
                                    {...register("sellerName", { required: true })}
                                    className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4 md:w-1/2">
                                <label className="text-gray-700 font-semibold">
                                    Seller Email:
                                </label>
                                <input
                                    type="email"
                                    value={user?.email}
                                    readOnly
                                    className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="md:flex gap-4">
                            <div className="mb-4 md:w-1/2">
                                <label className="text-gray-700 font-semibold">
                                    Available Quantity:
                                </label>
                                <input
                                    type="number"
                                    defaultValue={data?.availableProduct}
                                    placeholder='Available Quantity'
                                    {...register("availableProduct", { required: true })}
                                    className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4 md:w-1/2">
                                <label className="text-gray-700 font-semibold">Price:</label>
                                <input
                                    type="number"
                                    placeholder='Price'
                                    defaultValue={data?.price}
                                    {...register("price", { required: true })}
                                    className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="mb-4 md:w-1/2">
                            <label className="text-gray-700 font-semibold">
                                Product Description:
                            </label>
                            <textarea {...register("description", { required: true })} defaultValue={data?.description} placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                        </div>

                        <div className="mb-4 md:w-full">
                            <label className="text-gray-700 font-semibold">
                                Discount:
                            </label>
                            <input
                                type="number"

                                {...register("discount", { required: true })}
                                placeholder='Discount'
                                defaultValue={data.discount}
                                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Update Product"
                                className="px-4 py-2 cursor-pointer my-3 w-full font-semibold text-white bg-fuchsia-500 rounded-md hover:bg-fuchsia-500 focus:outline-none focus:bg-fuchsia-800"
                            />
                        </div>
                    </form>
                </div>)
            }
        </>
    );
};

export default UpdateProduct;