import React, { useState } from 'react';
import SortCriterion from './SortCriterion';
const SortPanel = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  // Temporary mock data
  const mockSortCriteria = [
    { id: '1', fieldName: 'Client Name', sortOrder: 'asc' },
    { id: '2', fieldName: 'Created At', sortOrder: 'desc' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sort By</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>
        
        
        <div className="mb-4">
          {mockSortCriteria.map(criteria => (
            <SortCriterion
              key={criteria.id}
              fieldName={criteria.fieldName}
              sortOrder={criteria.sortOrder}
              onToggleOrder={() => alert(`Toggle order for ${criteria.fieldName}`)}
              onRemove={() => alert(`Remove ${criteria.fieldName}`)}
            />
          ))}
        </div>

        <div className="border border-dashed border-gray-300 p-4 rounded-md text-center text-gray-500">
          Add sort criteria (e.g., from a dropdown)
        </div>
      </div>
    </div>
  );
};

export default SortPanel;