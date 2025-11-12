import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProfileTable({ rows, onUpdate, onDelete }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', flex: 1, editable: true },
    { field: 'likes', headerName: 'Likes', width: 120, type: 'number', editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton aria-label="delete" onClick={() => onDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      )
    }
  ];

  const processRowUpdate = (newRow, oldRow) => {
    if (newRow.name.trim() === '') {
      // revert if invalid
      return oldRow;
    }
    onUpdate({ id: newRow.id, name: newRow.name.trim(), likes: Number(newRow.likes) || 0 });
    return newRow;
  };

  return (
    <div style={{ height: 480, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        processRowUpdate={processRowUpdate}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 300 },
          },
        }}
      />
    </div>
  );
}
