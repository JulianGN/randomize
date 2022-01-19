import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { BigBtn, BigInput } from '../UI'

function SortNumbers() {
    const [numbers, setNumbers] = useState(0);
    let navigate = useNavigate();

    const sortedNumbers = [];

    function doSortNumbers() {
        let _sortedNumbers = [...sortedNumbers];

        for(let i = 0; i < numbers; i++) {
            const resultado = Math.round(Math.random() * 100)
            _sortedNumbers.push(resultado)
        }

        navigate("../numbers", { replace: true });       
    }

    return (
        <section>
            <h1>Quero sortear...</h1>
            <BigInput onChange={(e) => setNumbers(e.target.value)} type="text" id="random-input" name="random-input" autoFocus maxLength={3} max={100}/>
            <p>
                <BigBtn className='btn-clean' onClick={() => doSortNumbers()}>sortear</BigBtn>
                <button className='btn-clean'><i className="fas fa-edit"></i></button>
                <span>de 0 a 100</span>
            </p>
        </section>
  )
}

export default SortNumbers;