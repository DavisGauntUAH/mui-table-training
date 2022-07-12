import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const coumns = [
    {field: 'id', headerName: 'ID', width: 60},
    {
        field: 'project', 
        headerName: 'Project',
        width: 150,
        editable: false
    },
    {
        field: 'file_name', 
        headerName: 'File Name',
        width: 180,
        editable: false
    },
    {
        field: 'size', 
        headerName: 'Size (MB)',
        width: 110,
        editable: false
    },
]

const DataTable = ({ rows }) => {
  return (
    <Box sx={{ height: 400, width: '65%'}} margin='auto'>
        <DataGrid
            rows={rows}
            columns={coumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            
        />
    </Box>
  )
}

export default DataTable