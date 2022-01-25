import React from 'react';
import { useSelector } from 'react-redux'

import swal from 'sweetalert';

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn } from '../UI'

import './style.css';

function ResultSortNumbers() {
    const sortNumbers = useSelector(state => state.sortedNumbers);

    function copyNumbers(){
        if(!sortNumbers.length) return

        const myNumbers = [...sortNumbers].toString().replaceAll(',',', ');       

        navigator.clipboard.writeText(myNumbers)

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
                <BigBtn onClick={() => copyNumbers()} className='btn-clean'>copiar<span className='small-numbers'>{sortNumbers.length} números</span></BigBtn>
            </section>
            <MainMenu active="number" />
        </>
  )
}

export default ResultSortNumbers;