import React from 'react';
import NumbersTable from '../components/NumbersTable';

function NumbersTablePage() {
  return (
    <div className="page">
      <h2>Numbers Table</h2>
      <div style={{ padding: '20px' }}>
        <NumbersTable limit={12} />
      </div>
    </div>
  );
}

export default NumbersTablePage; 