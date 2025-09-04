import { useState } from 'react';


const sortableFields = ['name', 'email', 'createdAt', 'updatedAt', 'status'];

const sortByMultipleCriteria = (data, criteria) => {
  if (criteria.length === 0) {
    return data;
  }

  const sortedData = [...data].sort((a, b) => {
    for (const criterion of criteria) {
      const { field, order } = criterion;
      const aValue = a[field];
      const bValue = b[field];

      if (aValue < bValue) {
        return order === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return order === 'asc' ? 1 : -1;
      }
    }
    return 0; 
  });

  return sortedData;
};

export const useMultiSort = (initialData = []) => {
  const [sortCriteria, setSortCriteria] = useState([]);
  const [sortedData, setSortedData] = useState(initialData);

  const addSortCriterion = (field) => {
    if (!sortableFields.includes(field)) return;
    setSortCriteria(prev => {
     
      if (prev.find(c => c.field === field)) {
        return prev;
      }
      const newCriteria = [...prev, { field, order: 'asc' }];
      setSortedData(sortByMultipleCriteria(initialData, newCriteria));
      return newCriteria;
    });
  };


  const removeSortCriterion = (field) => {
    setSortCriteria(prev => {
      const newCriteria = prev.filter(c => c.field !== field);
      setSortedData(sortByMultipleCriteria(initialData, newCriteria));
      return newCriteria;
    });
  };

  const toggleSortOrder = (field) => {
    setSortCriteria(prev => {
      const newCriteria = prev.map(c =>
        c.field === field ? { ...c, order: c.order === 'asc' ? 'desc' : 'asc' } : c
      );
      setSortedData(sortByMultipleCriteria(initialData, newCriteria));
      return newCriteria;
    });
  };


  const reorderCriteria = (oldIndex, newIndex) => {
    setSortCriteria(prev => {
      const newCriteria = [...prev];
      const [removed] = newCriteria.splice(oldIndex, 1);
      newCriteria.splice(newIndex, 0, removed);
      setSortedData(sortByMultipleCriteria(initialData, newCriteria));
      return newCriteria;
    });
  };

  return {
    sortCriteria,
    sortedData,
    sortableFields,
    addSortCriterion,
    removeSortCriterion,
    toggleSortOrder,
    reorderCriteria,
  };
};