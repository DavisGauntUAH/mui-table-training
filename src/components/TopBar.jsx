import React from 'react'
import { Typography, AppBar,Toolbar, } from '@mui/material'
import TableRowsIcon from '@mui/icons-material/TableRows';

const TopBar = () => {
  return (
    <AppBar position='relative' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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