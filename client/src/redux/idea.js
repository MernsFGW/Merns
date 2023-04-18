import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const ideaSlice = createSlice({
  name: 'idea',
  initialState,
  reducers: {
    loadingIdea: (state, action) => {
        state.value = action.payload;
    },
    addIdea: (state, action) => {
        state.value.push(action.payload);
    }, 
    removeIdea: (state, action) => {
        state.value = state.value.filter(item => item._id !== action.payload.idea);
    }
  },
})

export const { loadingIdea, addIdea, removeIdea } = ideaSlice.actions

export default ideaSlice.reducer