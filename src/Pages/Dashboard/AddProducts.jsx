import React from 'react';
import useAuth from '../../hook/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Zoom } from 'react-awesome-reveal';

const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;

const AddProducts = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to add this product",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#50C878",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add Product!",
        }).then((result) => {
            if (result.isConfirmed) {
                const formData = new FormData();
                formData.append("image", data.productImage[0]);
                fetch(img_hosting_url, {
                    method: "POST",
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((imgResponse) => {
                        // console.log(imgResponse);
                        if (imgResponse.success) {
                            const imgURL = imgResponse.data.display_url;
                            const classData = {
                                productName: data.productName,
                                prodcutImage: imgURL,
                                sellerName: user?.displayName,
                                sellerEmail: user?.email,
                                availableProduct: data.availableProduct,
                                price: data.price,
                            };
                            // handleSwalFireWithUpdate(classData);
                        }
                    })
                    .catch((err) => {
                        Swal.fire(`Something went wrong!`, `${err.message}`, "error");
                    });
            }
        });
    };

    // const handleSwalFireWithUpdate = (classData) => {
    //   const token = localStorage.getItem("access-token");

    //   fetch("https://cricket-starts-server.vercel.app/classes", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(classData),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // console.log(data);
    //       if (data.insertedId) {
    //         reset();
    //         Swal.fire(
    //           `${classData.className} Added Successfully!`,
    //           "Your class has been added.",
    //           "success"
    //         );
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // };

    return (
        <>
            <Zoom>
                <h1 className="text-2xl font-semibold ">Add A New Product</h1>
            </Zoom>
            <div className="w-full mx-auto my-10">
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
                                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4 md:w-1/2">
                            <label className="text-gray-700 font-semibold">
                                Product Image:
                            </label>
                            <input
                                type="file"
                                {...register("productImage", { required: true })}
                                className="file-input bg-indigo-100 h-11 file-input-bordered w-full "
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="mb-4 md:w-1/2">
                            <label className="text-gray-700 font-semibold">
                                Seller Name:
                            </label>
                            <input
                                type="text"
                                value={user?.displayName}
                                readOnly
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
                                Available:
                            </label>
                            <input
                                type="number"
                                {...register("availableProduct", { required: true })}
                                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4 md:w-1/2">
                            <label className="text-gray-700 font-semibold">Price:</label>
                            <input
                                type="number"
                                {...register("price", { required: true })}
                                className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add Product"
                            className="px-4 py-2 cursor-pointer my-3 w-full font-semibold text-white bg-fuchsia-500 rounded-md hover:bg-fuchsia-500 focus:outline-none focus:bg-fuchsia-800"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProducts;