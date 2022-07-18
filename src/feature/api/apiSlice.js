import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Task'],
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Task']
        }),
        addNewTask: builder.mutation({
            query: newTask => ({
                url: '/tasks',
                method: 'POST',
                body: newTask
            }),
            invalidatesTags: ['Task']
        }),
        deleteTask: builder.mutation({
            query: taskId => ({
                url: `/tasks/${taskId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Task']
        }),
        updateReminder: builder.mutation({
            query: task => ({
                url: `/tasks/${task.id}`,
                method: 'PUT',
                body: task
            }),
            invalidatesTags: ['Task']
        })
    })
})

export const { 
    useGetTasksQuery, 
    useAddNewTaskMutation,
    useDeleteTaskMutation,
    useUpdateReminderMutation } = apiSlice