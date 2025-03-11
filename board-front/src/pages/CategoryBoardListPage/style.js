import { css } from "@emotion/react";

export const scrollLayout = css`

    width: 100%;
    height: 62.5rem;
    overflow-y: auto;


`;


export const cardLayoutGroup = css`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    flex-grow: 1;
`;

export const cardLayout = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.5rem;
    margin: 1rem 0;
    width: 39.9rem;
    height: 15rem;
    
    &:nth-of-type(2n - 1){
        margin-right: 1rem;
        margin-left: 2rem;
    }
    &:nth-of-type(2n){
        margin-right: 2rem;
        margin-left: 1rem;
    }

    & > header{
        
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        height: 6rem;
        box-sizing: border-box;
        border-bottom: 0.1rem solid #dbdbdb;

    }
    & > main{
        
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        box-sizing: border-box;
        flex-grow: 1;
    }
  

`;

export const headerLeft = css`
    display: flex;
    justify-content: center;
`;

export const profileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 0.1rem solid #dbdbdb;
    border-radius: 50%;
    width: 3.9rem;
    height: 3.9rem;
    overflow: hidden;

    & > img{
        width: 100%;
    }
`;


export const boardtTitle = css`
    font-size: 1.8rem;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: default;

`;

export const boardCounts = css`
    display: flex;

    & > span {
        position: relative;
        margin-right: 1rem;
        font-size: 1.8rem;
        cursor: default;

        &:hover > span {
            display: block;
        }

        & > span {
            display: none;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            z-index: 2;
            border-radius: 0.5rem;
            padding: 0.3rem 0.5rem;
            background-color: #000000c6;
            color: #ffffff;
            font-size: 1.4rem;
        }
    }
`;
