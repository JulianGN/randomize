import React from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import swal from 'sweetalert';

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn } from '../UI'

import './style.css';

function ResultSortNumbers() {
    const sortNumbers = useSelector(state => state.sortedNumbers);
    let navigate = useNavigate();

    function copyNumbers(){
        if(!sortNumbers.length) return

        const myNumbers = [...sortNumbers].toString().replaceAll(',',', ');       

        navigator.clipboard.writeText(myNumbers)

        if(sortNumbers.length === 1)
            swal('Seu número foi copiado com sucesso!')
        else
            swal('Seus ' + sortNumbers.length + ' números foram copiados com sucesso!')
    }

    return (
        <>
            <Header />
            <section>
                <ul className='sorted-numbers'>
                    {sortNumbers.map((n) => (
                        <li key={'li-n'+n}>{n}</li>
                    ))}
                </ul>
                <div className='grid1_3'>
                    <BigBtn secondary sizeAuto onClick={() => navigate("../", { replace: true })} className='btn-clean'><i className="fas fa-chevron-left"></i></BigBtn>
                    <BigBtn onClick={() => copyNumbers()} className='btn-clean'>copiar<span className='small-numbers'>{sortNumbers.length} {sortNumbers.length > 1 ? 'números' : 'número'}</span></BigBtn>
                </div>
            </section>
            <MainMenu active="number" />
        </>
  )
}

export default ResultSortNumbers;