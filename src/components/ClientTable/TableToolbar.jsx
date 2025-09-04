import React from 'react';

const TableToolbar = ({ onSortByClick }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-2">
        <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md">
          All
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
          Individual
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
          Company
        </button>
      </div>
      <div className="flex space-x-2">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md border">
          Add Client
        </button>
        <button 
          onClick={onSortByClick} 
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md border"
        >
          Sort By
        </button>
      </div>
    </div>
  );
};

export default TableToolbar;