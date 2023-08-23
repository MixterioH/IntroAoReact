import styled from 'styled-components'


export const StyledButton = styled.button`
    width: 200px;
    height: 100px;
    background-color: ${(props) => props.corVermelha ? props.corVermelha : "blue"};
    cursor: pointer;

    &:hover{
        background-color: red;
    }

    &:active{
        border: 20px solid pink;
    }

`