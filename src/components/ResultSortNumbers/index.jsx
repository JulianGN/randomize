import React from 'react';
import { useSelector } from 'react-redux'

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn } from '../UI'

import './style.css';

function ResultSortNumbers() {
    const sortNumbers = useSelector(state => state.sortedNumbers);

    return (
        <>
            <Header />
            <section>
                <ul className='sorted-numbers'>
                    {sortNumbers.map((n) => (
                        <li key={'li-n'+n}>{n}</li>
                    ))}
                </ul>
                <BigBtn className='btn-clean'>copiar</BigBtn>
            </section>
            <MainMenu active="number" />
        </>
  )
}

export default ResultSortNumbers;