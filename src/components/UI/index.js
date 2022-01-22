import styled from "styled-components";

export const BigBtn = styled.button`
    background: var(--main-yellow);
    width: 100%;
    min-height: 65px;
    font-size: 1.75rem;
    margin: 1rem 0;
`;

export const BigInput = styled.input`
    background-color: unset;
    border: unset;
    border-bottom: 2px solid var(--dark-green);
    margin-top: 1rem;
    font-size: 4rem;
    width: 99%;
    text-align: center;
    outline: unset;

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button  {
        -moz-appearance: none;
        -webkit-appearance: none; 
        appearance: none; 
        margin: 0; 
    }
`