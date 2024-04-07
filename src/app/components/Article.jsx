// Article.js

import Image from 'next/image'; // Import next/image

export default function Article({ title, image, description, publicDate, price }) {
  return (
    <div className="bg-gray rounded-lg shadow-md hover:shadow-lg">
      {/* Use next/image component */}
      <div className="relative h-64">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
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
