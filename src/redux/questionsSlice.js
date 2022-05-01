import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    value: [],
  },
  reducers: {
    setQuestions: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default questionsSlice.reducer;
export const { setQuestions } = questionsSlice.actions;
    