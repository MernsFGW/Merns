import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadingUser: (state, action) => {
        state.value = Object.assign({}, action.payload);
    },
  },
})

export const { loadingUser } = userSlice.actions

export default userSlice.reducer