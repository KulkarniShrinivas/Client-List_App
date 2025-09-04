import React from 'react';
import SortCriterion from './SortCriterion';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const SortPanel = ({
  isOpen,
  onClose,
  sortCriteria,
  sortableFields,
  onAddCriterion,
  onRemoveCriterion,
  onToggleOrder,
  onReorderCriteria,
}) => {
  if (!isOpen) {
    return null;
  }

  const availableFields = sortableFields.filter(
    (field) => !sortCriteria.find((c) => c.field === field)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = sortCriteria.findIndex(c => c.field === active.id);
      const newIndex = sortCriteria.findIndex(c => c.field === over.id);
      onReorderCriteria(oldIndex, newIndex);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sort By</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sortCriteria.map(c => c.field)}
            strategy={verticalListSortingStrategy}
          >
            <div className="mb-4">
              {sortCriteria.length === 0 ? (
                <div className="border border-dashed border-gray-300 p-4 rounded-md text-center text-gray-500">
                  Drag and drop sorting criteria here
                </div>
              ) : (
                sortCriteria.map((criteria) => (
                  <SortCriterion
                    key={criteria.field}
                    id={criteria.field}
                    fieldName={criteria.field}
                    sortOrder={criteria.order}
                    onToggleOrder={() => onToggleOrder(criteria.field)}
                    onRemove={() => onRemoveCriterion(criteria.field)}
                  />
                ))
              )}
            </div>
          </SortableContext>
        </DndContext>

        {availableFields.length > 0 && (
          <div className="mt-4">
            <h3 className="text-md font-semibold mb-2">Add New Criterion</h3>
            <div className="flex flex-wrap gap-2">
              {availableFields.map((field) => (
                <button
                  key={field}
                  onClick={() => onAddCriterion(field)}
                  className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md border"
                >
                  + {field}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortPanel;