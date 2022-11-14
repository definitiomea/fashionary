import { createSlice } from "@reduxjs/toolkit";

export const CommentRedux = createSlice({
    name: "ManageReply",
    initialState: {
        replylist: [
            {
                
            }
        ]
    },
    reducers: {
        addreply: (state, action) => {
            let i = 1;
            const reply = {
                comment: action.payload.comment,
                index: i++
            }
            state.replylist.concat(reply);
        },
        deletereply: (state, action) => {
            const delReply = state.replylist.filter((reply) => reply.index !== action.index);
        }
    }
});