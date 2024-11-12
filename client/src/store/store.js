import { configureStore } from "@reduxjs/toolkit"
import authReducer from "@/slice/authSlice";
import adminProductsReducer from "@/slice/admin/productsSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts:adminProductsReducer

    }
})

export default store;