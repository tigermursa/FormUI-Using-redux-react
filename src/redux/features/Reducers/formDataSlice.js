import { createSlice } from "@reduxjs/toolkit";
import { fetchFormData } from "../Actions/fromDataAction";

const initialState = {
  formData: [],
};

const formDataSlice = createSlice({
  name: "fromData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFormData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.formData = action.payload.data;
    });
  },
});

export default formDataSlice.reducer;
