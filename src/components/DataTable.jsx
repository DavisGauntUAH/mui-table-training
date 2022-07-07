import React from 'react'
import { Container } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const coumns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'project', 
        headerName: 'Project',
        width: 150,
        editable: false
    },
    {
        field: 'fileName', 
        headerName: 'File Name',
        width: 180,
        editable: false
    },
    {
        field: 'size', 
        headerName: 'Size (MB)',
        width: 100,
        editable: false
    },
]

const row = [
    {
        id: 1,
        size: 7133,
        project: "LIS",
        fileName: "lis_img_1.png"
    },
    {
        id: 2,
        size: 8606,
        project: "NALMA",
        fileName: "nalma_img_1.png"
    },
    {
        id: 3,
        size: 3980,
        project: "LIS",
        fileName: "lis_img_2.png"
    },
    {
        id: 4,
        size: 5233,
        project: "NALMA",
        fileName: "nalma_img_2.png"
    },
    {
        id: 5,
        size: 9346,
        project: "LIS",
        fileName: "lis_img_3.png"
    },
    {
        id: 6,
        size: 6436,
        project: "NALMA",
        fileName: "nalma_img_3.png"
    },
    {
        id: 7,
        size: 7330,
        project: "LIS",
        fileName: "lis_img_4.png"
    },
    {
        id: 8,
        size: 6011,
        project: "NALMA",
        fileName: "nalma_img_4.png"
    },
    {
        id: 9,
        size: 8429,
        project: "LIS",
        fileName: "lis_img_5.png"
    }

]

const DataTable = () => {
  return (
    <Container style={{marginTop: '100px'}}>
        <Box sx={{ height: 400, width: '70%'}} margin='auto'>
            <DataGrid
                rows={row}
                columns={coumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                
            />
        </Box>
    </Container>
  )
}

export default DataTable