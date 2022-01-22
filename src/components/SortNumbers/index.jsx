import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn, BigInput } from '../UI'

function SortNumbers() {
    const [numbers, setNumbers] = useState(0);
    let navigate = useNavigate();
    const dispatch = useDispatch();  

    const sortedNumbers = [];

    function doSortNumbers() {
        if(!numbers) return

        let _sortedNumbers = [...sortedNumbers];

        // TODO testar com Set em vez de Array
        for(let i = 0; i < numbers; i++) {
            const resultado = Math.round(Math.random() * 100)
            if(!_sortedNumbers.some((r) => r == resultado))
                _sortedNumbers.push(resultado)
            else
                i--
        }

        dispatch({ type: 'sortNumbers', payload: _sortedNumbers })
        navigate("../numbers", { replace: true });       
    }

    return (
        <>
            <Header />
            <section>
                <h1>Quero sortear...</h1>
                <BigInput onChange={(e) => setNumbers(e.target.value)} type="number" id="random-input" name="random-input" autoComplete="off" autoFocus maxLength={3} max={100} />
                <p>
                    <BigBtn className='btn-clean' onClick={() => doSortNumbers()}>sortear</BigBtn>
                    <button className='btn-clean'><i className="fas fa-edit"></i></button>
                    <span>de 0 a 100</span>
                </p>
            </section>
            <MainMenu active="number" />
        </>
  )
}

export default SortNumbers;