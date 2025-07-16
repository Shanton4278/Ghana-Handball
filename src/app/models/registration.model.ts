export class registerModel {
  firstName: string = '';
  surname: string = '';
  dateOfBirth: Date | null = null;
  imageUrl: string = '';
  division?: string = '';
  team: string = '';
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
    fromDate: string;
    toDate: string;
  }>;

  constructor() {
    this.formerClubs = [
      { name: '', fromDate: '', toDate: '' }
    ];
  }
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
    url!: string
  }

  export interface mediaResponseModel{
      url: string
    }

  export class getApplicantsModel{
    search!: string
      page!:number
      pageSize!:number
  }
  export interface getApplicantsResponseModel{
      message: string
      data: Data[]
      pagination: Pagination
    }
    
    export interface Data {
      _id: string
      division: string
      imageUrl: string
      firstName: string
      phoneNumber: string
      surname: string
      email: string
    gender: string
      dateOfRegistration: string
      dateOfBirth: string
      presentClub: PresentClub
      formerClubs: FormerClub[]
      idType: string
      idNumber: string
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
    
    export interface Pagination {
      total: number
      page: string
      pageSize: string
      totalPages: number
    }

    export class teamsModel {

    }

    export interface teamsResponseModel{
        status: Status
        data: Data
      }
      
      export interface Status {
        success: boolean
        message: string
        timestamp: string
      }
      
      export interface Data {
        total: number
        page: number
        pageSize: number
        teams: Team[]
      }
      
      export interface Team {
        _id: string
        name: string
        email: string
        createdAt: string
        updatedAt: string
        __v: number
      }

      export class divisionOneTeamModel{
        page!: number;
        pageSize!: number;
      }

      export interface divisionOneTeamResponseModel{
          status: Status
          data: Data
        }
        
        export interface Status {
          success: boolean
          message: string
          timestamp: string
        }
        
        export interface Data {
          total: number
          page: number
          pageSize: number
          teams: Team[]
        }
        
        export interface Team {
          _id: string
          name: string
          email: string
          division: string
          createdAt: string
          updatedAt: string
          __v: number
        }

        export class divisionTwoTeamModel{
          page!: number;
          pageSize!: number;
        }

        export interface divisionTwoTeamResponseModel{
            status: Status
            data: Data
          }
          
          export interface Status {
            success: boolean
            message: string
            timestamp: string
          }
          
          export interface Data {
            total: number
            page: number
            pageSize: number
            teams: Team[]
          }
          
          export interface Team {
            _id: string
            name: string
            email: string
            division: string
            createdAt: string
            updatedAt: string
            __v: number
          }

      