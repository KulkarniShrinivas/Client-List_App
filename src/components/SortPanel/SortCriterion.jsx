import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortCriterion = ({ fieldName, sortOrder, onToggleOrder, onRemove, id }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center justify-between p-2 mb-2 bg-gray-50 rounded-md border cursor-grab"
    >
      <div className="flex items-center space-x-2" {...listeners}>
       
        <span className="text-gray-400">&#9776;</span>
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