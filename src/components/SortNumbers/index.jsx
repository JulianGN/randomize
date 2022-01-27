import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import swal from 'sweetalert';

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn, BigInput } from '../UI'

import './style.css'

function SortNumbers() {
    const [numbers, setNumbers] = useState(0);
    const limitNumber = useSelector(state => state.limitNumber);

    let navigate = useNavigate();
    const dispatch = useDispatch();  

    const sortedNumbers = [];

    function doSortNumbers() {
        if(!numbers) {
            swal('Por favor, escolha ao menos um número')
            return
        }
        
        if(numbers < 0) {
            swal(`Por favor, escolha um número entre 0 e ${limitNumber}`)
            return
        }

        if(numbers > limitNumber) {
            swal(`Por favor, escolha um número entre 0 e ${limitNumber}`)
            setNumbers(limitNumber)
            return
        }

        let _sortedNumbers = [...sortedNumbers];

        // TODO testar com Set em vez de Array
        for(let i = 0; i < numbers; i++) {
            const resultado = Math.round(Math.random() * limitNumber)
            if(!_sortedNumbers.some((r) => r == resultado))
                _sortedNumbers.push(resultado)
            else
                i--
        }

        dispatch({ type: 'sortNumbers', payload: _sortedNumbers })
        navigate("../numbers", { replace: true });       
    }

    function addNumber() {
        if(numbers < limitNumber)
            setNumbers(numbers + 1)
    }

    function removeNumber() {
        if(numbers > 0)
            setNumbers(numbers - 1)
    }

    return (
        <>
            <Header />
            <section>
                <h1>Quero sortear...</h1>
                <div className='input-container'>
                    <button onClick={() => removeNumber()} className='btn-clean btn-numbers'>-</button>
                    <BigInput onChange={(e) => setNumbers(+e.target.value)} value={numbers} type="number" id="random-input" name="random-input" autoComplete="off" autoFocus maxLength={limitNumber.toString().length} min={0} max={limitNumber} />
                    <button onClick={() => addNumber()} className='btn-clean btn-numbers'>+</button>
                </div>
                <p>
                    <BigBtn className='btn-clean' onClick={() => doSortNumbers()}>sortear</BigBtn>
                    <button className='btn-clean'><i className="fas fa-edit"></i></button>
                    <span>de 0 a {limitNumber}</span>
                </p>
            </section>
            <MainMenu active="number" />
        </>
  )
}

export default SortNumbers;