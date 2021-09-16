import React, { useEffect, useState } from "react";
import UserInfoManager from '../../Services/RailsApi/UserInfoManager';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';


export const UserStack = () => {
    const userId = useSelector(state => state.user.id);
    const [stack, setStack] = useState("");


    const getUserStack = async() => {
        const detail = await UserInfoManager.getDetails(userId)
        console.log(detail)
        setStack(detail.stack)
    }

}