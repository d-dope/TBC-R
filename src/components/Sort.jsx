import React from 'react';

const SortButton = ({ handleClick }) => {
  return (
    <button className="border border-collapse px-5 py-2.5 ml-10" onClick={handleClick}>
      Sort by Price
    </button>
  );
};

export default SortButton;
