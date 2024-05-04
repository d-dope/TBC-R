import React from 'react';

interface SortButtonProps {
  handleClick: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ handleClick }) => {
  return (
    <button className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 ml-10 mr-10" onClick={handleClick}>
     Sort by Price
    </button>
  );
};

export default SortButton;