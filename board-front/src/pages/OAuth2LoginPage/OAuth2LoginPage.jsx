import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setTokenLocalStorage } from '../../configs/axiosConfig';
import { useQueryClient } from '@tanstack/react-query';

function OAuth2LoginPage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [ searchParams ] = useSearchParams();         //accessToken 들고옴

    const setAccessToken = async() => {
        const accessToken = searchParams.get("accessToken"); //accessToken 들고옴
        setTokenLocalStorage("AccessToken", accessToken);
        await queryClient.invalidateQueries({queryKey: ["useMeQuery"]});
        navigate("/");
    }

    

    useEffect(() => {
        setAccessToken();
    }, []);


    return (
        <></>
    );
}

export default OAuth2LoginPage;