import { UserData } from "../../lib/types/typesAndInterfaces"
import { useState } from "react"
import MoreOptions from '/assets/icons/more.svg'
import Eye from '/assets/icons/eye.svg'
import Activate from '/assets/icons/activate-user.png'
import Blacklist from '/assets/icons/blacklist-user.png'
import { Link } from "react-router-dom"
import { useAllUsersStore } from "../../lib/store/useAllUsers"


interface UserRowProps {
  userData: UserData
}


const UserRow = ({userData}: UserRowProps) => {
  
  const {
    id,
    dateJoined,
    status,
    organizationName,
    personalInfo,
  } = userData

  const [showMore, setShowMore] = useState<boolean>(false)

  const changeUserStatus = useAllUsersStore((state) => state.changeUserStatus)

  const activateUser = () => {
    changeUserStatus(id, "active")
    setShowMore(false)
  }

  const blacklistUser = () => {
    changeUserStatus(id, "blacklisted")
    setShowMore(false)
  }

  return (
    <div className="user-row">
      <div className="org">
        {organizationName}      
      </div>
      <div className="username">
        {personalInfo.userName}
      </div>
      <div className="email">
        {personalInfo.emailAddress}
      </div>
      <div className="phone-number">
        {personalInfo.phoneNumber}
      </div>
      <div className="date">
        {dateJoined}
      </div>
      <div className="status">
        <span className={`${status}`}>
          {status} 
        </span>
      </div>
      <div className="options">
        <img src={MoreOptions} alt="more options" onClick={() => setShowMore(!showMore)}/>
        <section className={`options-menu ${showMore ? 'open' : ''}`}>
          <div>
            <Link to={`${id}`}>
              <img src={Eye} alt="view details"/> 
              <span>View Details</span>
            </Link>
          </div>
          <div onClick={blacklistUser} className="menu-option blacklist-option">
            <img src={Blacklist} alt="blacklist user"/>
            <span>Blacklist User</span>
          </div>
          <div onClick={activateUser} className="menu-option activate-option">
            <img src={Activate} alt="activate user"/>
            <span>Activate User</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UserRow