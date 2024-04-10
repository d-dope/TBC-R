// Article.js

import Link from 'next/link';

export default function Article({ title, id, price, description, image }) {
  return (
    <Link href={`/${id}`} className="bg-gray rounded-lg shadow-md hover:shadow-lg">
      <div className="relative h-64">
        <img src={image} alt={title} className="rounded-lg w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
        <div className="flex gap-x-3">
          <p>Public Date: </p>
        </div>
        <p className="font-bold text-emerald-600">${price}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
