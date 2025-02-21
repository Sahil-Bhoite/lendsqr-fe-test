import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '/assets/icons/search-icon.svg';
import Avatar from '/assets/images/avatar-icon.png';
import Bell from '/assets/icons/bell.png';
import ArrowDown from '/assets/icons/dropdown.svg';
import DropDown from '/assets/icons/caret-down.svg';
import Briefcase from '/assets/icons/briefcase.svg';
import Dashboard from '/assets/icons/home.svg';
import Users from '/assets/icons/user-friends.svg';
import Guarantors from '/assets/icons/users.svg';
import Loans from '/assets/icons/sack.svg';
import DecisionModels from '/assets/icons/handshake.svg';
import Savings from '/assets/icons/piggy-bank.svg';
import LoanRequests from '/assets/icons/cash-hand.svg';
import WhiteList from '/assets/icons/user-check.svg';
import Karma from '/assets/icons/user-times.svg';
import SavingsProducts from '/assets/icons/bank.svg';
import FeesAndCharges from '/assets/icons/coins-solid.svg';
import Transactions from '/assets/icons/transactions.svg';
import Services from '/assets/icons/galaxy.svg';
import ServiceAccount from '/assets/icons/user-cog.svg';
import Settlements from '/assets/icons/scroll.svg';
import Reports from '/assets/icons/chart-bar.svg';
import Preferences from '/assets/icons/sliders.svg';
import FeesAndPricing from '/assets/icons/badge-percent.svg';
import AuditLogs from '/assets/icons/clipboard-list.svg';
import SystemsMessages from '/assets/icons/tire.svg';
import Logout from '/assets/icons/sign-out.svg';
import { useNavigate } from 'react-router-dom';

interface sidebarProps  {

  sidebarProps: {
    menuOpen: boolean
    closeMenu: () => void;
  };
}

const Sidebar = ({sidebarProps}: sidebarProps) => {
  
  const {menuOpen, closeMenu} = sidebarProps

  const [resizing , setResizing]= useState<boolean>(false);
  

  // Effect to prevent translate from happening when resizing
  useEffect(()=>{
    const timer = false;
    const setResizingState = ()=>{
      timer ? clearTimeout(timer) : setResizing(true);

      setTimeout(()=>{
        setResizing(false)
      }, 100)
    }

    window.addEventListener('resize', setResizingState)
    return () => window.removeEventListener('resize', setResizingState)
  }, [])
  

  const navClassToggler = ({isActive}:{isActive: boolean}): string => isActive ? "nav-link active-link" : "nav-link"
  const navigate = useNavigate()
  
  const logOut = () => {
    navigate('/')
  }

  return (
    <nav className={`side-navbar ${menuOpen ? "open" : ""}`}
      style={{ 
        transition: `${resizing ? "unset" : "all 0.3s"}`
      }}
    >
    <div className="top-options-container">
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
          <div  className='profile'>
            <img src={Avatar} alt='avatar' className='avatar'/>
            <p>Adedeji</p>
            <img src={DropDown} alt='drop down icon'/>
          </div>
        </div>
      </div>
    </div>
    <div className='side-nav-options'>
      <ul>
        <li>
          <NavLink onClick={closeMenu} className={"nav-link organization"} to="/dashboard">              
            <img src={Briefcase} alt='switch organization'/>
            <p>Switch Organization</p>
            <img src={ArrowDown} alt='arrow down icon' className='arrow-down'/>
          </NavLink>
        </li>
        <li>
          <div className='sub-headings dashboard'>
            <img src={Dashboard} alt='dashboard icon'/>
            <p>Dashboard</p>
          </div>        
        </li>
      </ul>
      <div className='sub-headings'>
        CUSTOMERS
      </div>
      <ul>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users">
            <img src={Users} alt='users icon'/>
            <p>Users</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/guarantors">
            <img src={Guarantors} alt='guarantors icon'/>
            <p>Guarantors</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/loans">
            <img src={Loans} alt='loans icon'/>
            <p>Loans</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/decision-models">
            <img src={DecisionModels} alt='decision models icon'/>
            <p>Decision Models</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/savings">
            <img src={Savings} alt='savings icon'/>
            <p>Savings</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/loan-requests">
            <img src={LoanRequests} alt='loan requests icon'/>
            <p>Loan Requests</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/white-list">
            <img src={WhiteList} alt='whitelist icon'/>
            <p>Whitelist</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/karma">
            <img src={Karma} alt='karma icon'/>
            <p>Karma</p>
          </NavLink>
        </li>
      </ul>
      <div className='sub-headings'>
        BUSINESSES
      </div>
      <ul>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/organization">
            <img src={Briefcase} alt='organization icon'/>
            <p>Organization</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/loans">
            <img src={LoanRequests} alt='loan products icon'/>
            <p>Loan Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/savings">
            <img src={SavingsProducts} alt='savings products icon'/>
            <p>Savings Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/fees-and-charges">
            <img src={FeesAndCharges} alt='fees and charges icon'/>
            <p>Fees and Charges</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/transactions">
            <img src={Transactions} alt='transactions icon'/>
            <p>Transactions</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/services">
            <img src={Services} alt='services icon'/>
            <p>Services</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/service-account">
            <img src={ServiceAccount} alt='service account icon'/>
            <p>Service Account</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/settlements">
            <img src={Settlements} alt='settlements icon'/>
            <p>Settlements</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/reports">
            <img src={Reports} alt='reports icon'/>
            <p>Reports</p>
          </NavLink>
        </li>
      </ul>
      <div className='sub-headings'>
        SETTINGS
      </div>
      <ul>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/preferences">
            <img src={Preferences} alt='preferences icon'/>
            <p>Preferences</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/fees-and-pricing">
            <img src={FeesAndPricing} alt='fees and pricing icon'/>
            <p>Fees and Pricing</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/audit-logs">
            <img src={AuditLogs} alt='audit logs icon'/>
            <p>Audit Logs</p>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={navClassToggler} to="/users/systems-messages">
            <img src={SystemsMessages} alt='systems messages icon'/>
            <p>Systems Messages</p>
          </NavLink>
        </li>
      </ul> 
    </div>
    <div className='side-nav-footer'>
      <div className='sub-heading' onClick={logOut}>
        <img src={Logout} alt='log out icon'/>
        <p>Logout</p>
      </div>
      <small>
        v.1.2.0
      </small>
    </div>         
  </nav>
  )
}

export default Sidebar