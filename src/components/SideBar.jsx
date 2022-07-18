import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Stack, Toolbar, Typography } from '@mui/material';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const drawerWidth = 240

const SideBar = () => {
    
  return (
    <Drawer
    variant="permanent"
    sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
    >
        <Toolbar>
            <Box sx={{ overflow: 'auto', marginTop:'75px'}} >
                <Stack>
                    <Link to='/task-tracker'>
                        <Box display='flex'>
                            <WebAssetIcon/>
                            <Typography marginLeft={1}>
                                Task Tracker
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/table-demo'>
                        <Box display='flex'>
                            <WebAssetIcon/>
                            <Typography marginLeft={1}>
                                Table Demo
                            </Typography>
                        </Box>
                    </Link>
                </Stack>
            </Box>
        </Toolbar>
    </Drawer>
  )
}

export default SideBar