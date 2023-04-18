import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import ideaReducer from './idea';

export const store = configureStore({
  reducer: {
    user: userReducer,
    idea: ideaReducer,
  },
})  