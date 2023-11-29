import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFormData = createAsyncThunk(
  "formData/fetchFormData",
  async () => {
    try {
      const response = await axios.get(
        "https://crud-operation-red.vercel.app/api/data/users/allUsers"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
