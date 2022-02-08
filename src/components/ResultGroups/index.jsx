import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import swal from 'sweetalert';

import Header from '../Header';
import MainMenu from '../MainMenu';
import { BigBtn, BigInput } from '../UI'

import './style.css'

function ResultGroups() {
    let navigate = useNavigate();
    const dispatch = useDispatch();  
    const groups = useSelector(state => state.groups)

    useEffect(() => {
      if(!groups.length)
          navigate("../groups", { replace: true }); 
    }, []);
    

    function copyGroups(){
        if(!groups.length) return

        const myGroups = [...groups]
        let stringGroups = '';
        // .toString().replaceAll(',',', ');
        myGroups.forEach((g) => stringGroups += g.toString().replaceAll(',',', ') + '\n')       

        navigator.clipboard.writeText(stringGroups)

        swal('Seus ' + myGroups.length + ' grupos foram copiados com sucesso!')
    }

    return (
        <>
            <Header />
            <section>
                    
                <div className='container groups'>
                    {groups.map((group, i) => (
                        <ul key={'group-' + i}>
                            <h2>Grupo {i + 1}</h2>
                            {group.map((user, j) => (
                                <li key={'user-list-' + j}>{user}</li>
                            ))}
                        </ul>
                    ))}
                </div>

                <div className='grid1_3'>
                    <BigBtn secondary sizeAuto onClick={() => navigate("../config-groups", { replace: true })} className='btn-clean'><i className="fas fa-chevron-left"></i></BigBtn>
                    <BigBtn onClick={() => copyGroups()} sizeAuto className='btn-clean'>copiar</BigBtn>
                </div>

            </section>
            <MainMenu active="groups" />
        </>
  )
}

export default ResultGroups;