import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import { setFlag } from '../feature/addFlagSlice';
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const addFlag = useSelector(state => state.addFlag.value)

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant='h4' component='h2' margin={2}>
                    Task Tracker
                </Typography>
            </Grid>
            <Grid item xs={4} 
            display='flex' 
            justifyContent='center'>
                <Button 
                variant='contained' 
                color={addFlag? 'error':'success'} 
                sx={{margin:'auto'}}
                onClick={() => dispatch(setFlag())}>
                    {addFlag ? "close":"add"}
                </Button>
            </Grid>
        </Grid>
    )
}

export default Header