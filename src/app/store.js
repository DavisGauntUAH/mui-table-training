import { configureStore } from '@reduxjs/toolkit'
import addFlagReducer from '../feature/addFlagSlice'
import { apiSlice } from '../feature/api/apiSlice'

export default configureStore({
  reducer: {
    addFlag: addFlagReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(apiSlice.middleware)
})