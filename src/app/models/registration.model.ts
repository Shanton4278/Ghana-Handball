export class registerModel {
  firstName: string = '';
  surname: string = '';
  dateOfBirth: Date | null = null;
  imageUrl: string = '';
  division?: string ;
  dateOfRegistration: Date | null = null;
  gender: string = '';
  email: string = '';
  phoneNumber: string = '';
  idType: 'Ghana Card' | 'Passport' | 'Voter ID' | 'Driver License' | null = null;
  idNumber: string = '';
  presentClub: {
    name: string;
    fromDate: Date | null;
    toDate: Date | null;
  } = {
    name: '',
    fromDate: null,
    toDate: null
  };
  formerClubs: Array<{
    name: string;
    fromDate: Date;
    toDate: Date;
  }> = [];
       }
      

export interface registerResponseModel{
    division: string
    imageUrl: string
    firstName: string
    phoneNumber: string
    surname: string
    dateOfRegistration: string
    dateOfBirth: string
    presentClub: PresentClub
    formerClubs: FormerClub[]
    idType: string
    idNumber: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface PresentClub {
    name: string
    fromDate: string
    toDate: string
  }
  
  export interface FormerClub {
    name: string
    fromDate: string
    toDate: string
  }

  export class mediaModel{
    imageUrl!: string
  }

  export interface mediaResponseModel{
      imageUrl: string
    }
    

      