import React from 'react';

const Cell = ({ row }) => {
  return <div className='cell-grid' key={row}></div>
}

export {
  Cell
}
