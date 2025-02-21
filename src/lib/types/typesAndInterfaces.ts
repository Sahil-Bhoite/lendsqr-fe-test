export interface UserData {
  id: string;
  dateJoined: string;
  status: string;
  organizationName: string;
  personalInfo: {
    avatar: string;
    fullName: string;
    userName:string;
    phoneNumber: string;
    emailAddress: string;
    bank: string;
    bvn: string;
    accountNumber: string;
    savings: number;
    tier: number;
    specialCode: string;
    gender: string;
    maritalStatus: string;
    children: number;
    typeOfResidence: string;
  };
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    companyEmail: string;
    monthlyIncome: number[];
    loanRepayment: number;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  }[];
}

export interface FilterInterface {
  organization: string;
  username: string;
  email: string;
  date: string; 
  phoneNumber: string;
  status: string;
}