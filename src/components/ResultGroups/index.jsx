import React, {useState} from 'react';
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

    return (
        <>
            <Header />
            <section>
                    
                <h1>resultado aqui</h1>
                <div className='container'>
                    <p>resultado aqui</p>
                </div>

                <div className='grid1_3'>
                    <BigBtn secondary sizeAuto onClick={() => navigate("../config-groups", { replace: true })} className='btn-clean'><i className="fas fa-chevron-left"></i></BigBtn>
                    <BigBtn sizeAuto className='btn-clean'>copiar</BigBtn>
                </div>

            </section>
            <MainMenu active="groups" />
        </>
  )
}

export default ResultGroups;