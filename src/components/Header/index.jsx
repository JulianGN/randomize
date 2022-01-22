import logo from '../../logo.svg'

import './style.css'

function Header() {
    return (
        <header className='header-logo'>
            <img src={logo} alt="Ranzomize Logo" />
            <button className='btn-clean info-right'><i className="fas fa-info-circle"></i></button>
        </header>
    )
  }
  
  export default Header