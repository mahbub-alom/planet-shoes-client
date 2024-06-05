import React from 'react';

const BestSellerCard = ({ data }) => {
    const { name, image } = data;
    return (
        <div>
            <div className="card  h-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Food" className="rounded-xl h-96" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{name}</h2>


                </div>
            </div>
        </div>
    );
};

export default BestSellerCard;