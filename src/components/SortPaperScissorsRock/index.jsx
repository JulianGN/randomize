import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn, BigInput } from '../UI'
import paperImage from '../../imgs/paper.svg'
import scissorsImage from '../../imgs/scissors.svg'
import rockImage from '../../imgs/rock.svg'

import './style.css'

function SortPaperScissorsRock() {
    let navigate = useNavigate();
    const dispatch = useDispatch();  
    const [gameImage, setGameImage] = useState(paperImage);    
    const [gameResult, setResult] = useState([]);  

    const doSortGame = () => {
        const randomNumber = Math.ceil(Math.random() * 3);
        let sorted = gameImage
        let text;

        switch (randomNumber) {
            case 2:
                sorted = scissorsImage
                text = 'Tesoura'
                break;
            case 3:
                sorted = rockImage
                text = 'Pedra'
                break;                                
        
            default:
                sorted = paperImage
                text = 'Papel'
                break;
        }  

        setGameImage(sorted);
        setResult(gameResult.concat(text));
    }

    return (
        <>
            <Header />
            <section className='no-margin'>

                <h1>Clique abaixo para sortear entre<br/>Pedra, Papel e Tesoura...</h1>
                <GameBg onClick={() => doSortGame()} image={gameImage}></GameBg>
                <h2 className='current-result'>{gameResult[gameResult.length - 1]}</h2>

                {/* <BigBtn onClick={() => doSortGroups()} className='btn-clean'>sortear</BigBtn> */}

            </section>
            <MainMenu active="game" />
        </>
  )
}

const GameBg = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    height: 70vh;
    max-height: 240px;
    width: 100%;
    transition: .25s;
    cursor: pointer;

    &:active{
        transform: translateY(-1rem);
    }
`;


export default SortPaperScissorsRock;