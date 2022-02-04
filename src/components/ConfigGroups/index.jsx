import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import swal from 'sweetalert';

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn, BigInput } from '../UI'

import './style.css'

function ConfigGroups() {
    let navigate = useNavigate();
    const dispatch = useDispatch();  
    const names = useSelector(state => state.names)
    const [numberGroups, setNumberGroups] = useState(2);

    function addNumber() {
        if(numberGroups < names.length)
            setNumberGroups(numberGroups + 1)
    }

    function removeNumber() {
        if(numberGroups > 2)
            setNumberGroups(numberGroups - 1)
    }

    function doSortGroups(){
        const groups = Array();

        for(let i = 0; i < numberGroups; i++){
            groups.push([])
        }

        const namesToSort = [...names];
        let iGroup = 0;
        
        for(let i = 0; i < names.length; i++){
            if(iGroup >= numberGroups)
                iGroup = 0

            const iNames = Math.floor(Math.random() * namesToSort.length)

            const sortedName = namesToSort.splice(iNames, 1)
            groups[iGroup].push(sortedName.toString())            

            iGroup++
        }
        
        dispatch({ type: 'updateGroups', payload: groups })
        navigate("../result-groups", { replace: true });  
    }

    return (
        <>
            <Header />
            <section>
                    
                <h1>Quero sortear os {names.length} nomes em...</h1>
                <div className='container'>
                    <button onClick={() => removeNumber()} className='btn-clean btn-numbers'>-</button>
                    <BigInput onChange={(e) => setCurrentName(e.target.value)} value={numberGroups} type="number" id="random-input" name="random-input" autoComplete="off" autoFocus />
                    <button onClick={() => addNumber()} className='btn-clean btn-numbers'>+</button>
                </div>
                <p>grupos</p>

                <div className='grid1_3'>
                    <BigBtn secondary sizeAuto onClick={() => navigate("../groups", { replace: true })} className='btn-clean'><i className="fas fa-chevron-left"></i></BigBtn>
                    <BigBtn sizeAuto onClick={() => doSortGroups()} className='btn-clean'>sortear</BigBtn>
                </div>

            </section>
            <MainMenu active="groups" />
        </>
  )
}

export default ConfigGroups;