import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true
}

export const addFlagSlice = createSlice({
    name: 'addFlag',
    initialState,
    reducers: {
        setFlag: state => {
            state.value = !state.value
        }
    }
})

export const { setFlag } = addFlagSlice.actions
export default addFlagSlice.reducer