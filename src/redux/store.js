import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "./features/Reducers/formDataSlice";

const store = configureStore({
  reducer: {
    fromData: formDataSlice,
  },
});

export default store;
