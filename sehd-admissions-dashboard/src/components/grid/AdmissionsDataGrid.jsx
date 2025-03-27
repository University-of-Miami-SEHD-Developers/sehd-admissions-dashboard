import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { rows, cols } from '../../data/Spring24';


export default function AdmissionsDataGrid({ rows, cols }) {
  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={cols}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
