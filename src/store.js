import { configureStore } from '@reduxjs/toolkit';

import ManageAccountReducer from "./Modules/ManageAccount";

export default configureStore({
    reducer: {
        ManageAccount: ManageAccountReducer
    }
});