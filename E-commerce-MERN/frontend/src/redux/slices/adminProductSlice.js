import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`

// Async thunk to fetch admin products
export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async () => {
    const response = await axios.get(
      `${API_URL}/api/admin/products`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return response.data;
  }
);
