import logo from '../../logo.svg'

import swal from 'sweetalert';

import './style.css'

function Header() {

    const path = window.location.pathname;

    async function openInfo(){
        let msg = '';
        let title = '';
        
        switch (path) {
            case '/paper-scissors-rock':
                title = 'Jokenpô'
                msg = `...ou Pedra, Papel e tesoura é uma alternativa divertida para tirar a sorte.
                
                Clique no ícone e o sorteio será feito (o resultado pode se repetir).`
                break;

            case '/groups':
            case '/config-groups':
            case '/result-groups':
                title = 'Sorteio de grupos'
                msg = `Insira quantos nomes desejar, apertando Enter ou clicando na setinha ao lado do campo de texto.
                
                O sorteio poderá ser feito com 3 ou mais nomes, sendo o número de grupos limitado ao mínimo de 2 e máximo conforme o número de pessoas inseridas.
                
                Você poderá copiar o resultado ao final para facilitar o compartilhamento.`
                break;                
        
            default:
                title = 'Números aleatórios'
                msg = `Sorteie livremente ou a partir de suas combinações que podem ser personalizadas abaixo do botão de sorteio.
                
                Os números nunca irão se repetir sendo possível optar por incluir ou não o zero.
                
                Para facilitar, algumas pré-definições foram criadas para, por exemplo, Mega Sena e Loto Fácil.
                
                O resultado poderá ser copiado no final para facilitar o compartilhamento.`
                break;
        }

        msg += `\n\nDesenvolvido por Julian Nunes, utilizando HTML/CSS, React, Styled Components, Swal e Pretty Checkbox.`

        swal({
            title:title,
            text: msg,
            content: {
                element: "a",
                attributes: {
                    href: "https://github.com/JulianGN/randomize",
                    target: '_blank',
                    innerText: "Confira em meu GitHub",
                    className: 'github-link',
                }
            },
            icon:"info",
            buttons: {
                cancel: "Fechar",
            },
        })
    }

    function goGitHub(){
        console.log('teste')
    }

    return (
        <header className='header-logo'>
            <img src={logo} alt="Ranzomize Logo" />
            <button onClick={() => openInfo()} className='btn-clean info-right'><i className="fas fa-info-circle"></i></button>
        </header>
    )
  }
  
  export default Header