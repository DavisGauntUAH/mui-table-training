import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDeleteTaskMutation, useUpdateReminderMutation } from '../feature/api/apiSlice'

const Task = ({ task, id }) => {
    const [deleteTask, {isLoading}] = useDeleteTaskMutation()
    const [updateReminder, {isLoading:remIsLoading}] = useUpdateReminderMutation()

    const handleClick = async () =>{
        if(!isLoading) {
            try{
                await deleteTask(id)
            } catch (err) {
                console.error('Failed to delete the post: ', err)
            }
        }
    }
    const handleDclick = async () =>{
        if(!remIsLoading) {
            const newTask = {...task, reminder: !task.reminder}
            try{
                await updateReminder(newTask)
            } catch (err) {
                console.error('Failed to delete the post: ', err)
            }
        }
    }

    return (
        <Card 
        sx={{width: '95%', 
        margin: '10px', 
        bgcolor: task.reminder ? '#b8d9bd' : '#d9d9d9'}} 
        variant='outlined'
        onDoubleClick={() =>{handleDclick()}}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant='h6' component='h3' marginLeft={1}>
                        {task.text}
                    </Typography>
                    <Typography variant='body2' component='div' marginLeft={2}>
                        {task.day}
                    </Typography>
                </Grid>
                <Grid item xs={4}
                display='flex' 
                justifyContent='right'>
                    <Button color='error'
                    onClick={() => {handleClick()}}
                    >
                        x
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Task