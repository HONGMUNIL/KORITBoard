import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`;


export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 0.1rem solid #dbdbdb;
`;

export const title = css`
    display: flex;


    & > h2{
        font-size: 2rem;
        margin: 0.5rem 0;
    }

    
`;

export const searchItems = css`
    display: flex;

`;

export const emptyButton = css`

`;


export const searchInputBox = css`
    position: relative;
    margin-left: 1rem;
    height: 3rem;
    & > input {
        box-sizing: border-box;
        outline-color: #2684ff;
        height: 100%;
        border: 0.1rem solid #dbdbdb;
        border-radius: 0.4rem;
        width: 20rem;
        padding: 0 4rem 0 1rem;
        font-size: 1rem;
    }

    & > button {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;

    }


`;

export const main = css`
    padding: 1rem;
`;

export const footer = css`
    padding: 1rem;
`;



export const boardListContainer = css`
    margin: 0;
    padding: 0;
    list-style-type: none;

    & > li:nth-of-type(1){
        background-color: #fafafa;
    }

    & > li{
        display: flex;
        height: 3rem;
        align-items: center;
        cursor: default;

        &:not(:nth-of-type(1)):hover{
            border-radius: 0.7rem;
            background-color: #eeeeee;
            cursor: pointer;
        }

        & > div{
            box-sizing: border-box;
            font-size: 1.4rem;
        }
        & > div:not(& > div:nth-last-of-type(1)){
            margin-right: 1rem;
            border-right: 0.1rem solid #dbdbdb;
            
        }
        & > div:nth-of-type(1){
            width:8rem;
            padding-left: 1rem;
        }
        & > div:nth-of-type(2){
            flex-grow: 1;
            display: block;
            width: 13.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-right: 1rem;
            
        }
        & > div:nth-of-type(3){
            width: 15rem;
        }
        & > div:nth-of-type(4){
            width: 5rem;
        }
        & > div:nth-of-type(5){
            width: 10rem;
        }
    }
`;

export const boardCounts = css`
    display: flex;
    justify-content: space-between;
    & > span{
        margin-right: 1rem;
        position: relative;
        cursor: default;

        &:hover > span{
            display: block;
        }

        & + span {
            display: block;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            padding: 0.3rem 0.5rem;
            border-radius: 0.5rem;
            background-color: #fafafa;
            font-size:1.2rem;
            /* display: none; */
        }
    }
  
`;

export const boardWriter = css`
    display: flex;


`;
