import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

import MyPage from '../Pages/MyPage';
import PersonalMain from '../Pages/PersonalMain';

export const PrivatePage = ({authenticate}) => {
    const accountlist = useSelector((state) => state.ManageAccount.accountlist);

    return accountlist[0].logined == true ?
    <MyPage></MyPage> :
    <Navigate to="/login"></Navigate>
}

export const PrivateColor = ({authenticate}) => {
    const accountlist = useSelector((state) => state.ManageAccount.accountlist);

    return accountlist[0].logined == true ?
    <PersonalMain></PersonalMain>:
    <Navigate to="/login"></Navigate>
}