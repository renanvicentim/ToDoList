import styled from 'styled-components';
import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, rgba(219,28,228,0.8520658263305322) 0%, rgba(47,47,50,1) 100%);    
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 20px;

    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }

    h3 {
        text-align: center;
    }
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    outline: none;
    width: 340px;
    height: 40px;
    padding-left: 20px;
    margin-right: 25px;
    margin-bottom: 40px;
`

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    width: 130px;
    height: 40px;
    border: none;
    color: white;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transform: scale(1.1);
        transition: 0.5s;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
        background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
        box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        width: 500px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        margin-bottom: 30px;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`
export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`