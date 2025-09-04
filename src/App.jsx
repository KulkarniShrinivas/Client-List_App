import React, { useState } from 'react';
import { useMultiSort } from './hooks/useMultiSort'; 
import { clients } from './lib/data'; 

import ClientTable from './components/ClientTable/ClientTable';
import TableToolbar from './components/ClientTable/TableToolbar';
import SortPanel from './components/SortPanel/SortPanel';

import './index.css';

function App() {
  const [isSortPanelOpen, setIsSortPanelOpen] = useState(false);

  
  const {
    sortCriteria,
    sortedData,
    sortableFields,
    addSortCriterion,
    removeSortCriterion,
    toggleSortOrder,
    reorderCriteria, 
  } = useMultiSort(clients); 

  const handleSortByClick = () => {
    setIsSortPanelOpen(true);
  };

  const handleCloseSortPanel = () => {
    setIsSortPanelOpen(false);
  };

  const handleAddCriterion = (field) => {
    addSortCriterion(field);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Client List</h1>
      <TableToolbar onSortByClick={handleSortByClick} />
  
      <ClientTable data={sortedData} />
      <SortPanel
        isOpen={isSortPanelOpen}
        onClose={handleCloseSortPanel}
        sortCriteria={sortCriteria} 
        sortableFields={sortableFields} 
        onAddCriterion={handleAddCriterion} 
        onRemoveCriterion={removeSortCriterion}
        onToggleOrder={toggleSortOrder}
      />
    </div>
  );
}

export default App;