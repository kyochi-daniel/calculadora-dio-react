import styled from "styled-components";

export const Container = styled.button`
    padding: 1.25rem;
    
    border: 1px solid #CACACA;

    background-color: #00AAF0;
    color: #fff;

    cursor: pointer;

    font-size: 24px;

    flex: 1;

    transition: 0.2s;

    &:hover {
        filter: brightness(.9);
    }
`