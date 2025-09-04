import ClientTable from './components/ClientTable/ClientTable';
import TableToolbar from './components/ClientTable/TableToolbar'; 
import './index.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Client List</h1>
      <TableToolbar />
      <ClientTable />
    </div>
  );
}

export default App;
