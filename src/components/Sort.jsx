import React from 'react';

const SortButton = ({ handleClick }) => {
  return (
    <button className="md:w-32 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 ml-10 mr-10" onClick={handleClick}>
      Sort by Price
    </button>
  );
};

export default SortButton;
