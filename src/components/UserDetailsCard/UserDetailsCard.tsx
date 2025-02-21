import { UserData } from "../../lib/types/typesAndInterfaces"
import './userdetailscard.styles.scss'
import ProfilePhoto from '/assets/icons/user.svg'
import GoldenStar from '/assets/icons/golden-star.svg'
import StarOutline from '/assets/icons/star-outline.svg'

type UserDetailsCardProps = {
  userDetails: UserData
} 


const UserDetailsCard = ({userDetails}: UserDetailsCardProps) => {

  // Destructuring userDetails a bit
  const { personalInfo, educationAndEmployment, socials, guarantors} = userDetails
  
  // Function to render user tier stars
  const renderStars = (number: number) => {
    const stars = []
    for (let i = 1; i <= number; i++) {
      stars.push(<img src={GoldenStar} alt='gold star'/>)
    }

    const emptyStars = 3 - number

    if (emptyStars > 0) {
      for (let i = 1; i <= emptyStars; i++) {
        stars.push(<img src={StarOutline} alt='star outline'/>)
      }
    }
    return stars
  }

  return (
    <section className="details-card">
      <div className="summary">
        <div className="profile">
          <div className="info">
            <div className="avatar">
              <img src={personalInfo.avatar ? personalInfo.avatar : ProfilePhoto} alt="avatar" />
            </div>
            <div className="names">
              <p>{personalInfo.fullName}</p>
              <p>{personalInfo.specialCode}</p>
            </div>
          </div>
          <div className="tier">
            <div>User's Tier</div>
            <div>
              {
                renderStars(personalInfo.tier)
              }
            </div>
          </div>
          <div className="savings">
            <p>
              {personalInfo.savings.toLocaleString('en-NG', { style: 'currency', currency: 'NGN'})}
            </p>
            <p>
              {personalInfo.accountNumber}/{personalInfo.bank}
            </p>
          </div>
        </div>
        <div className="navigation-bar">
          <ul>
            <li>
              <p>General Details</p>
            </li>
            <li>
              <p>Documents</p>
            </li>
            <li>
              <p>Bank Details</p>
            </li>
            <li>
              <p>Loans</p>
            </li>
            <li>
              <p>Savings</p>
            </li>
            <li>
              <p>App and System</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="details">
        <div className="info">
          <p className="header">Personal Information</p>
          <div className="body">
            <div>
              <p className="title">full name</p>
              <p className="content">{personalInfo.fullName}</p>
            </div>
            <div>
              <p className="title">phone number</p>
              <p className="content">{personalInfo.phoneNumber}</p>
            </div>
            <div>
              <p className="title">email address</p>
              <p className="content">{personalInfo.emailAddress}</p>
            </div>
            <div>
              <p className="title">bvn</p>
              <p className="content">{personalInfo.bvn}</p>
            </div>
            <div>
              <p className="title">gender</p>
              <p className="content">{personalInfo.gender}</p>
            </div>
            <div>
              <p className="title">marital status</p>
              <p className="content">{personalInfo.maritalStatus}</p>
            </div>
            <div>
              <p className="title">children</p>
              <p className="content">{personalInfo.children > 0 ? personalInfo.children : 'None'}</p>
            </div>
            <div>
              <p className="title">type of residence</p>
              <p className="content">{personalInfo.typeOfResidence}</p>
            </div>  
          </div>
        </div>
        <div className="info">
          <p className="header">Education and Employment</p>
          <div className="body">
            <div>
              <p className="title">Level of education</p>
              <p className="content">{educationAndEmployment.levelOfEducation}</p>
            </div>
            <div>
              <p className="title">Employment status</p>
              <p className="content">{educationAndEmployment.employmentStatus}</p>
            </div>
            <div>
              <p className="title">Sector of employment</p>
              <p className="content">{educationAndEmployment.sectorOfEmployment}</p>
            </div>
            <div>
              <p className="title">Duration of employment</p>
              <p className="content">{educationAndEmployment.durationOfEmployment}</p>
            </div>
            <div>
              <p className="title">Office email</p>
              <p className="content">{educationAndEmployment.companyEmail}</p>
            </div>
            <div>
              <p className="title">Monthly income</p>
              <p className="content">{
                educationAndEmployment.monthlyIncome[0].toLocaleString('en-NG', { style: 'currency', currency: 'NGN'})
              }-{educationAndEmployment.monthlyIncome[1].toLocaleString('en-NG', { style: 'currency', currency: 'NGN'})}</p>
            </div>
            <div>
              <p className="title">Loan repayment</p>
              <p className="content">{educationAndEmployment.loanRepayment.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="info">
          <p className="header">Socials</p>
          <div className="body">
            <div>
              <p className="title">Twitter</p>
              <p className="content">{socials.twitter}</p>
            </div>
            <div>
              <p className="title">Facebook</p>
              <p className="content">{socials.facebook}</p>
            </div>
            <div>
              <p className="title">Instagram</p>
              <p className="content">{socials.instagram}</p>
            </div>
          </div>
        </div>
        <div className="info">
          <p className="header">Guarantors</p>
          {
            guarantors.map((guarantor, index) => 
              <div className="body" key={index}>
                <div>
                  <p className="title">Full name</p>
                  <p className="content">{guarantor.fullName}</p>
                </div>
                <div>
                  <p className="title">Phone Number</p>
                  <p className="content">{guarantor.phoneNumber}</p>
                </div>
                <div>
                  <p className="title">email address</p>
                  <p className="content">{guarantor.emailAddress}</p>
                </div>
                <div>
                  <p className="title">relationship</p>
                  <p className="content">{guarantor.relationship}</p>
                </div>
              </div>
            )
          }
        
        </div>
      </div>
    </section>
  )
}

export default UserDetailsCard