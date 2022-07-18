import { Container} from '@mui/material'
import React from 'react'
import Task from './Task'
import { useGetTasksQuery } from '../feature/api/apiSlice'

const Tasks = () => {

  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTasksQuery()

  let content

  if (isLoading){
    content = <></>
  } else if (isSuccess) {
    content = tasks.map((task) => <Task task={task} key={task.id} id={task.id} />)
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <Container display='flex'>
      {content}
        
    </Container>
  )
}

export default Tasks