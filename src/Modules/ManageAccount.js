import { createSlice } from "@reduxjs/toolkit";

export const ManageAccount = createSlice({
    name: 'ManageAccount',
    initialState: {
        accountlist: [
            {
                number: 1,
                id: "aaaa",
                password: "aaaa",
                nickname: "테스트유저",
                logined: false
                /* admin: true */
            }
        ]
    },
    reducers: {
        login: (state, action) => {
            const tempAccount = {
                id: action.payload.id,
                password: action.payload.password
            }
            if(state.accountlist[0].id == tempAccount.id && state.accountlist[0].password == tempAccount.password) {
                state.accountlist[0].logined = true;
                console.log(state.accountlist[0].logined);
                console.log("logined");
            }
            else {
                alert("다시 확인해주세요");
            }
        },
        logout: (state) => {
            state.accountlist[0].logined = false;
        }
    }
});

export const { login, logout } = ManageAccount.actions;

export default ManageAccount.reducer;