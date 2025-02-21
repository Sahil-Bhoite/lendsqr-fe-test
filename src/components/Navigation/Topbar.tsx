import './navigation.styles.scss';
import Avatar from '/assets/images/avatar-icon.png';
import Logo from '/assets/logo/lendsqr-icon.svg';
import SearchIcon from '/assets/icons/search-icon.svg';
import Bell from '/assets/icons/bell.png';
import DropDown from '/assets/icons/caret-down.svg';
import { Link } from 'react-router-dom';


interface TopbarProps {
  topbarProps: {
    menuOpen: boolean;
    toggleMenu: () => void;    
  }
}


const Topbar = ({topbarProps}: TopbarProps) => {

  const {menuOpen, toggleMenu} = topbarProps
  return (
    <nav>
      {/* Top Navbar Starts */}
      <section className='top-navbar'>
        <Link to="/users">
          <div>
            <img src={Logo} alt='lendsquare icon' className='lendsqr'/>
          </div>
        </Link>
        <div className='top-options'>
          <div className='search-container'>
            <input className='search-bar' type='search' placeholder='search for anything'/>
            <div>
              <img src={SearchIcon} alt='search icon'/>
            </div>
          </div>
          <div className='profile-container'>
            <p>
              Docs
            </p>
            <div className='notification'>
              <img src={Bell} alt='bell icon' className='bell'/>
              <div>
                Notifications
              </div>
            </div>
            <div className='profile'>
              <img src={Avatar} alt='avatar' className='avatar'/>
              <p>Adedeji</p>
              <img src={DropDown} alt='drop down icon'/>
            </div>
          </div>
        </div>
        <div className={`menu-button ${menuOpen ? "close" : ""}`} onClick={toggleMenu}>         
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </nav>
  )
}

export default Topbar