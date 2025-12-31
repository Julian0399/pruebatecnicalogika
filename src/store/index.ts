import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import dashboardReducer from "./slices/dashboardReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;