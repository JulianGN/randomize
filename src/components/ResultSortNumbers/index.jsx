import React from 'react';

import { BigBtn } from '../UI'

import './index.css';

function ResultSortNumbers(props) {
    const sortedNumbers = props.sortedNumbers;

    return (
        <section>
            <ul className='sorted-numbers'>
                {sortedNumbers.map((n) => (
                    <li key={'li-n'+n}>{n}</li>
                ))}
            </ul>
            
            <BigBtn className='btn-clean'>copiar</BigBtn>
        </section>
  )
}

export default ResultSortNumbers;