import { css } from "@emotion/react";

export const layout =css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    flex-grow: 1;

    & > h1 {
        color: #d02121;
        font-size: 3rem;
        cursor: default;
    }

    & > p {
        font-size:2rem;
        cursor: default;
    }
`;