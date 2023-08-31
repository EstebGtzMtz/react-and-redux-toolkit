import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
  },
})

export const { increment } = todoSlice.actions;