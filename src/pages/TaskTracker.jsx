import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link, Typography, Breadcrumbs } from '@mui/material'
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import EventEntry from '../components/EventEntry';
import { useSelector} from 'react-redux'

const TaskTracker = () => {

    const addFlag = useSelector(state => state.addFlag.value) 

  return (
    <Box display='grid' justifyContent='center' marginTop={3}>
        <Breadcrumbs sx={{m: 1}}>
            <Link underline='hover' href='/'>
                <Typography variant='h6'>Home</Typography>
            </Link>
            <Typography variant='h6'>Table Demo</Typography>
        </Breadcrumbs>
        <Paper elevation={3} sx={{width:'500px'}}>
            <Header />
            {addFlag ? <EventEntry /> : ''}            
            <Tasks/>
        </Paper>
    </Box>
  )
}

export default TaskTracker