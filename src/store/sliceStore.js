import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboardSlice";
import homeReducer from "../features/homeSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    home: homeReducer,
  },
});
