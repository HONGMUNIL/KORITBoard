import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from "../../pages/LoginPage/LoginPage"
import JoinPage from "../../pages/JoinPage/JoinPage"
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { useUserMeQuery } from '../../queries/userQuery';
import { useQueryClient } from '@tanstack/react-query';
import OAuth2LoginPage from '../../pages/OAuth2LoginPage/OAuth2LoginPage';



function AuthRoute(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const queryState = queryClient.getQueryState(["userMeQuery"]);

    useEffect(() => {
        console.log(queryState);
        if (queryState.status === "success") {
            navigate("/");

        }
    }, [queryState]);

    return (
        <>
        {
           queryState.status === "error" &&
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path='/login/oauth2' element={<OAuth2LoginPage />}></Route>
                <Route path="/join" element={<JoinPage />}></Route>
                <Route path="/*" element={<NotFoundPage />} />
    
            </Routes>

        }
        </>
    );
}

export default AuthRoute;