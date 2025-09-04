import React from 'react';

const SortCriterion = ({ fieldName, sortOrder, onToggleOrder, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-2 mb-2 bg-gray-50 rounded-md border">
      <div className="flex items-center space-x-2">
        {/* Placeholder for a drag handle icon */}
        <span className="text-gray-400 cursor-grab">&#9776;</span>
        <span className="font-medium">{fieldName}</span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleOrder}
          className="px-2 py-1 text-xs font-medium rounded-md"
        >
          {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
        </button>
        <button onClick={onRemove} className="text-gray-500 hover:text-red-500">
          &times;
        </button>
      </div>
    </div>
  );
};

export default SortCriterion;