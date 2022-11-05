import { Navigate } from 'react-router-dom';

import MyPage from '../Pages/MyPage';
import PersonalMain from '../Pages/PersonalMain';

export const PrivatePage = ({authenticate}) => {
    return authenticate == true ?
    <MyPage></MyPage> :
    <Navigate to="/login"></Navigate>
}

export const PrivateColor = ({authenticate}) => {
    return authenticate == true ?
    <PersonalMain></PersonalMain>:
    <Navigate to="/login"></Navigate>
}