import { createSlice } from "@reduxjs/toolkit";

import { Navigate } from 'react-router-dom';

export const ManageAccount = createSlice({
    name: 'ManageAccount',
    initialState: {
        accountlist: [
            {
                number: 1,
                id: "1234",
                password: "1234",
                logined: false
            }
        ]
    },
    reducers: {
        login: (state, action) => {
            const tempAccount = {
                id: action.payload.id,
                password: action.payload.password
            }
            if(state.id == tempAccount.id && state.password == tempAccount.password) {
                state.logined = true;
                console.log("logined");
                <Navigate to="/"></Navigate>
            }
            else {
                alert("다시 확인해주세요");
            }
        },
        logout: (state) => {
            state.logined = false;
        }
    }
});

export const { login, logout } = ManageAccount.actions;

export default ManageAccount.reducer;