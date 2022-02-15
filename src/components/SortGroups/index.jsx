import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import swal from 'sweetalert';

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn, BigInput } from '../UI'

import './style.css'

function SortGroups() {
    let navigate = useNavigate();
    const dispatch = useDispatch();  
    const namesSaved = useSelector(state => state.names)
    const [names, setNames] = useState(namesSaved);
    const [currentName, setCurrentName] = useState('')
    const [overflow, setOverflow] = useState(false)

    function handlePush(){
        if(!currentName)
            return

        const nameRepeated = names.some((name) => name == currentName)
        if(nameRepeated){
            swal({
                title: 'Nome repetido',
                text: 'Escreva outro para que o sorteio ocorra corretamente.',
                icon:"warning",
            })
            return
        }

        setNames(names.concat(currentName))
        setCurrentName('')
        verifyOverflow()
    }

    function deleteUser(nameClicked){
        setNames(names.filter((name) => name != nameClicked))
        verifyOverflow()
    }

    function handlePushEnter(e){
        if (e.key === 'Enter') handlePush()
        verifyOverflow()
    }

    function verifyOverflow(){
        const userContainerShadow = document.querySelector('.user-container-shadow');
        const userContainerHeight = document.querySelector('.user-container-height');

        const activeScroll = userContainerHeight.scrollHeight > userContainerShadow.scrollHeight;

        setOverflow(activeScroll)
    }

    function doSortGroups(){
        const users = [...names]
        dispatch({ type: 'updateNames', payload:users })
        navigate("../config-groups", { replace: true });  
    }

    return (
        <>
            <Header />
            <section>

                <h1>Quero adicionar ao sorteio...</h1>
                <div className='container'>
                    <BigInput onChange={(e) => setCurrentName(e.target.value)} onKeyDown={(e) => handlePushEnter(e)} value={currentName} type="text" id="random-input" name="random-input" autoComplete="off" autoFocus />
                    <button className='btn-clean btn-right' onClick={() => handlePush()}><i className="fas fa-caret-square-right"></i></button>
                </div>
                <div className='container user-container-shadow'>
                    {overflow ? <div className='inner-shadow'></div> : '' }
                    <div className='user-container-height'>
                        <ul className='user-list'>
                            {names.map((name, i) => (
                                <li key={'line-' + i} className='user-line'>{name} <button onClick={() => deleteUser(name)} className='btn-clean'><i className="fas fa-times"></i></button></li>
                            ))}
                        </ul>
                    </div>
                    {overflow ? <div className='inner-shadow'></div> : '' }
                </div>
                {names.length > 2 ? <BigBtn onClick={() => doSortGroups()} className='btn-clean'>sortear</BigBtn> : ''}

            </section>
            <MainMenu active="groups" />
        </>
  )
}

export default SortGroups;