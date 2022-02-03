import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { Checkbox, Switch, useCheckboxState } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import swal from 'sweetalert';

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn, BigInput } from '../UI'

import './style.css';

function FilterSortNumbers() {
    const numbers = useSelector(state => state.numbers);
    const limitNumber = useSelector(state => state.limitNumber);
    const withZero = useSelector(state => state.withZero);
    let navigate = useNavigate();
    const dispatch = useDispatch();  
    const switchState = useCheckboxState();
    
    const [init, setInit] = useState(0)
    const [btnMega, selectMega] = useState(false);
    const [btnLoto, selectLoto] = useState(false);
    const [btnQuina, selectQuina] = useState(false);
    
    React.useEffect(() => {  
        if(!init && withZero){
            setInit(init + 1)
            switchState.setState(true)
            return
        }
        dispatch({ type: 'updateZero', payload: switchState.state });
        
    }, [switchState.state]);

    function addNumber() {
        if(numbers < limitNumber)
            dispatch({ type: 'updateNumbers', payload: numbers + 1 })
    }

    function removeNumber() {
        if(numbers > 0)
            dispatch({ type: 'updateNumbers', payload: numbers - 1 })
    }

    function addLimit() {
        if(limitNumber < 100)
            dispatch({ type: 'updateLimit', payload: limitNumber + 1 })
    }

    function removeLimit() {
        if(limitNumber > 0)
            dispatch({ type: 'updateLimit', payload: limitNumber - 1 })

        if(limitNumber <= numbers)
            dispatch({ type: 'updateNumbers', payload: numbers - 1 })
    }

    // TODO criar apenas um método para utilizar aqui e no SortNumbers
    const sortedNumbers = [];

    function doSortNumbers() {
        if(!numbers) {
            swal('Por favor, escolha ao menos um número')
            return
        }
        
        if(numbers < 0) {
            swal(`Por favor, escolha um número entre ${withZero ? '0' : '1'} e ${limitNumber}`)
            return
        }

        if(numbers > limitNumber) {
            swal(`Por favor, escolha um número entre ${withZero ? '0' : '1'} e ${limitNumber}`)
            dispatch({ type: 'updateNumbers', payload: limitNumber })
            return
        }

        let _sortedNumbers = [...sortedNumbers];

        // TODO testar com Set em vez de Array
        for(let i = 0; i < numbers; i++) {
            
            const resultado = Math.round(Math.random() * limitNumber)
            
            if(!withZero && resultado === 0){
                i--
                continue
            }               

            if(!_sortedNumbers.some((r) => r == resultado))
                _sortedNumbers.push(resultado)
            else
                i--
        }

        dispatch({ type: 'sortNumbers', payload: _sortedNumbers.sort((a, b) => a - b) })
        navigate("../numbers", { replace: true });       
    }

    function filterMega() {
        selectMega(true);
        selectLoto(false);
        selectQuina(false);

        switchState.setState(false)

        dispatch({ type: 'updateNumbers', payload: 6 })
        dispatch({ type: 'updateLimit', payload: 60 });
    }

    function filterLoto() {
        selectMega(false);
        selectLoto(true);
        selectQuina(false);

        switchState.setState(false)

        dispatch({ type: 'updateNumbers', payload: 5 })
        dispatch({ type: 'updateLimit', payload: 25 });
    }

    function filterQuina() {
        selectMega(false);
        selectLoto(false);
        selectQuina(true);

        switchState.setState(false)

        dispatch({ type: 'updateNumbers', payload: 5 })
        dispatch({ type: 'updateLimit', payload: 80 });
    }    

    return (
        <>
            <Header />
            <section>
                <div className='number-filters'>
                    <h2>Opções pré-definidas</h2>
                    <button onClick={() => filterMega()} className={'btn-clean btn-rounded btn-bordered ' + (btnMega ? 'active' : '')}>6 em 60</button>
                    <button onClick={() => filterLoto()} className={'btn-clean btn-rounded btn-bordered ' + (btnLoto ? 'active' : '')}>15 em 25</button>
                    <button onClick={() => filterQuina()} className={'btn-clean btn-rounded btn-bordered ' + (btnQuina ? 'active' : '')}>5 em 80</button>

                    <h2>ou crie sua combinação</h2>
                    <div className='grid1_1'>
                        <div className='container half'>
                            <button onClick={() => removeNumber()} className='btn-clean btn-numbers'>-</button>
                            <BigInput onChange={(e) => dispatch({ type: 'updateNumbers', payload: +e.target.value })} value={numbers} type="number" id="random-input" name="random-input" autoComplete="off" autoFocus maxLength={limitNumber.toString().length} min={0} max={limitNumber} />
                            <button onClick={() => addNumber()} className='btn-clean btn-numbers'>+</button>
                        </div>
                        
                        <span className='absolute-center'>em</span>

                        <div className='container half'>
                            <button onClick={() => removeLimit()} className='btn-clean btn-numbers'>-</button>
                            <BigInput onChange={(e) => dispatch({ type: 'updateLimit', payload: +e.target.value })} value={limitNumber} type="number" id="random-input" name="random-input" autoComplete="off" autoFocus maxLength={limitNumber.toString().length} min={0} max={limitNumber} />
                            <button onClick={() => addLimit()} className='btn-clean btn-numbers'>+</button>
                        </div>
                    </div>

                    <Checkbox className='checkbox-container' {...switchState}  color="primary">
                        {switchState.state ? 'Zero incluído' : 'Incluir zero?'}
                    </Checkbox>
                </div>
                <div className='grid1_3'>
                    <BigBtn secondary sizeAuto onClick={() => navigate("../", { replace: true })} className='btn-clean'><i className="fas fa-chevron-left"></i></BigBtn>
                    <BigBtn sizeAuto onClick={() => doSortNumbers()} className='btn-clean'>sortear</BigBtn>
                </div>
            </section>
            <MainMenu active="number" />
        </>
  )
}

export default FilterSortNumbers;