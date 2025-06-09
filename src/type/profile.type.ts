export interface IEducation {
  _id: string;
  logo: string;
  name: string;
  major: string;
  fromDate: string;
  toDate: string;
  degree: string;
  gpa: string;
  description?: string;
}

export interface ICompany {
  _id: string;
  logo: string;
  name: string;
  fromDate: string;
  toDate: string;
  position: string;
  description?: string;
}

export interface ISocials {
  _id: string;
  name: string;
  icon: string;
  link: string;
}
export interface IProfile {
  _id: string;
  alias: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  avatarUrl: string;
  bio: string;
  stack: string;
  education: IEducation;
  companies: ICompany[];
  socials: ISocials[];
}
