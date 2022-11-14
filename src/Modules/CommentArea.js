import { addreply, deletereply } from "./CommentRedux";
import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback } from "react";

const CommentArea = () => {
    const replylist = useSelector((state) => state.CommentRedux.replylist);

    const [comment, setComment] = useState("");
    
    return (
        <>
        
        </>
    );
}
 
export default CommentArea;