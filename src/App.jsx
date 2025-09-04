import React, { useState } from 'react'; // Import useState
import ClientTable from './components/ClientTable/ClientTable';
import TableToolbar from './components/ClientTable/TableToolbar';
import SortPanel from './components/SortPanel/SortPanel'; // Import the new component
import './index.css';

function App() {
  const [isSortPanelOpen, setIsSortPanelOpen] = useState(false);

  const handleSortByClick = () => {
    setIsSortPanelOpen(true);
  };

  const handleCloseSortPanel = () => {
    setIsSortPanelOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Client List</h1>
      <TableToolbar onSortByClick={handleSortByClick} />
      <ClientTable />
      <SortPanel isOpen={isSortPanelOpen} onClose={handleCloseSortPanel} />
    </div>
  );
}

export default App;