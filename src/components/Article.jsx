import React from 'react';

function Article({ title, image, description, publicDate, price }) {
  return (
    <div className="bg-gray rounded-lg shadow-md hover:shadow-lg ">
      <img src={image} alt={title} className="w-full h-64 rounded-lg object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
          <div className="flex gap-x-3">
            <p>Public Date: </p>
            <p className="font-bold">{publicDate}</p>
          </div>
          <p className="font-bold text-emerald-600">${price}</p>

        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Article;




