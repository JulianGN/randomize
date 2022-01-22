import { useNavigate } from "react-router-dom";

import "./style.css"

function MainMenu(props) {
  let navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    navigate("../", { replace: true });
  }

  return (
    <nav className='main-menu'>
        <ul>
            <li><button onClick={handleClick} className={'btn-clean nav-btn ' + (props.active == 'number' ? 'active' : '') }><i className="fas fa-dice"></i></button></li>
            <li><button className={'btn-clean nav-btn ' + (props.active == 'group' ? 'active' : '')}><i className="fas fa-users"></i></button></li>
            <li><button className={'btn-clean nav-btn ' + (props.active == 'game' ? 'active' : '')}><i className="fas fa-hand-scissors"></i></button></li>
        </ul>
    </nav>
  )
}

export default MainMenu

