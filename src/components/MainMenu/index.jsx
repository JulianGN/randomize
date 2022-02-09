import { useNavigate } from "react-router-dom";

import "./style.css"

function MainMenu(props) {
  let navigate = useNavigate();

  async function goNumbers(e) {
    e.preventDefault();
    navigate("../", { replace: true });
  }
  async function goGroups(e) {
    e.preventDefault();
    navigate("/groups", { replace: true });
  }
  async function goPSR(e) {
    e.preventDefault();
    navigate("/paper-scissors-rock", { replace: true })
  }

  return (
    <nav className='main-menu'>
        <ul>
            <li><button onClick={goNumbers} className={'btn-clean nav-btn ' + (props.active == 'number' ? 'active' : '') }><i className="fas fa-dice"></i></button></li>
            <li><button onClick={goGroups} className={'btn-clean nav-btn ' + (props.active == 'groups' ? 'active' : '')}><i className="fas fa-users"></i></button></li>
            <li><button onClick={goPSR} className={'btn-clean nav-btn ' + (props.active == 'game' ? 'active' : '')}><i className="fas fa-hand-scissors"></i></button></li>
        </ul>
    </nav>
  )
}

export default MainMenu

