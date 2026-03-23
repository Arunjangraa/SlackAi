import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dashboardConfig, type DashboardConfig } from '@config';
import { fetchWidgetData } from '@services';

interface DashboardState {
  config: DashboardConfig | null;
  widgetData: Record<string, {
    data: unknown;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }>;
}

const initialState: DashboardState = {
  config: dashboardConfig, // load static config by default, can be fetched too
  widgetData: {},
};

export const loadWidgetData = createAsyncThunk(
  'dashboard/loadWidgetData',
  async (dataSource: string) => {
    const data = await fetchWidgetData(dataSource);
    return { dataSource, data };
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadWidgetData.pending, (state, action) => {
        const dataSource = action.meta.arg;
        if (!state.widgetData[dataSource]) {
          state.widgetData[dataSource] = { data: null, status: 'idle', error: null };
        }
        state.widgetData[dataSource].status = 'loading';
      })
      .addCase(loadWidgetData.fulfilled, (state, action) => {
        const { dataSource, data } = action.payload;
        if (state.widgetData[dataSource]) {
          state.widgetData[dataSource].status = 'succeeded';
          state.widgetData[dataSource].data = data;
        }
      })
      .addCase(loadWidgetData.rejected, (state, action) => {
        const dataSource = action.meta.arg;
        if (state.widgetData[dataSource]) {
          state.widgetData[dataSource].status = 'failed';
          state.widgetData[dataSource].error = action.error.message || 'Failed to fetch';
        }
      });
  },
});

export default dashboardSlice.reducer;
