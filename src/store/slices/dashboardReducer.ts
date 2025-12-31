import { createAsyncThunk } from "@reduxjs/toolkit";
import { dashboardAdmin } from "../../api/dashboardApi";
import type { Category, DashboardState } from "../../types/dashboard";
import { createSlice } from "@reduxjs/toolkit";

export const fetchDashboardData = createAsyncThunk<
  Category[],            
  void,                  
  { rejectValue: string }
>(
  "dashboard/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await dashboardAdmin();
      return response.data.data; 
    } catch (error: any) {
      return rejectWithValue("Error al cargar el dashboard");
    }
  }
);

const initialState: DashboardState = {
  data: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Error inesperado";
      });
  },
});

export const { clearData } = dashboardSlice.actions;
export default dashboardSlice.reducer;