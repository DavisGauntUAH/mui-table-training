import React from 'react'
import { Typography, AppBar,Toolbar, } from '@mui/material'
import TableRowsIcon from '@mui/icons-material/TableRows';

const TopBar = () => {
  return (
    <AppBar position='relative'>
            <Toolbar>
                <TableRowsIcon/>
                <Typography variant='h6'>
                    Table Demo
                </Typography>
            </Toolbar>
        </AppBar>
  )
}

export default TopBar