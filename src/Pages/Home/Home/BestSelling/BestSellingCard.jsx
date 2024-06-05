import React from 'react';
import Btn from '../../../../Components/Btn';

const BestSellingCard = ({ data }) => {
    const { prodcutImage, productName, price, discount,description } = data;
    return (
        <div>
      <div className="card  h-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={prodcutImage} alt="Food" className="rounded-xl h-96" />
        </figure>
        <h1 className="bg-black text-white px-2 absolute right-16 top-14 rounded">
          $ {price}
        </h1>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{productName}</h2>
          <h2 className="card-title text-xl">Price: ${price}</h2>
          <p>
            {description.length > 15 ? description.slice(0, 15) : description}
          </p>
          <div className="card-actions">
            <Btn btnText={"Buy Now"}></Btn>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BestSellingCard;