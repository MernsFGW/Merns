import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const ideaSlice = createSlice({
  name: 'idea',
  initialState,
  reducers: {
    loadingIdea: (state, action) => {
        state.value.push(...action.payload);
    },
    addIdea: (state, action) => {
        state.value.push(action.payload);
    }, 
    // removeIdea: (state, action) => {
    //     state.value
    // }
  },
})

export const { loadingIdea, addIdea } = ideaSlice.actions

export default ideaSlice.reducer