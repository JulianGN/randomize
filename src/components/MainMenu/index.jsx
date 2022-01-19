import styled from "styled-components"
import "./index.css"

function MainMenu(props) {
  return (
    <nav className='main-menu'>
        <ul>
            <li><button className={'btn-clean nav-btn ' + (props.active == 'number' ? 'active' : '') }><i className="fas fa-dice"></i></button></li>
            <li><button className={'btn-clean nav-btn ' + (props.active == 'group' ? 'active' : '')}><i className="fas fa-users"></i></button></li>
            <li><button className={'btn-clean nav-btn ' + (props.active == 'game' ? 'active' : '')}><i className="fas fa-hand-scissors"></i></button></li>
        </ul>
    </nav>
  )
}

export default MainMenu

