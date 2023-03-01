import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const departmentSlice = createSlice({
  name: 'idea',
  initialState,
  reducers: {
    loadingDepartment: (state, action) => {
        state.value.push(...action.payload);
    },
    addDepartment: (state, action) => {
        state.value.push(action.payload);
    }, 
    // removeIdea: (state, action) => {
    //     state.value
    // }
  },
})

export const { loadingDepartment, addDepartment } = departmentSlice.actions

export default departmentSlice.reducer