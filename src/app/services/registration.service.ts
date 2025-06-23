import { Injectable } from '@angular/core';
import { getApplicantsModel, mediaModel, registerModel } from '../models/registration.model';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }


  private registerData: registerModel = new registerModel()
  private selectedDivision: string | null = null;
  
  setFormData(data: registerModel) {
    this.registerData = {
      ...this.registerData,  
      ...data,              
      division: data.division || this.selectedDivision || this.registerData.division 
    };
    localStorage.setItem('registerData', JSON.stringify(this.registerData)); 
  }
  
  getFormData(): registerModel {
    const stored = localStorage.getItem('registerData');
    return stored ? JSON.parse(stored) : new registerModel();
  }
  // setSelectedDivision(division: string) {
  //   const formattedDivision = division.trim().replace(/\s+/g, '_');
  //   this.selectedDivision = formattedDivision;
  //   this.registerData.division = formattedDivision;
  //   console.log('[Service] Division received from component:', formattedDivision);
    
  //   // Update localStorage
  //   const storedData = this.getFormData();
  //   storedData.division = formattedDivision;
  //   localStorage.setItem('registerData', JSON.stringify(storedData));
  // }

  setSelectedDivision(division: string) {
    const formattedDivision = division.trim().replace(/\s+/g, '_');
    this.selectedDivision = formattedDivision;
  
    // Update both in-memory and stored registerData
    const storedData = this.getFormData();
    storedData.division = formattedDivision;
    this.registerData = { ...this.registerData, ...storedData }; // ✅ keep memory in sync
  
    localStorage.setItem('registerData', JSON.stringify(this.registerData));
  
    console.log('[Service] Division set and stored:', formattedDivision);
  }
  
  // Combine all data for submission
  getRegistrationPayload(): registerModel {
    return this.registerData;
    }

    getDivision(): string | null {
      const data = this.getFormData();
      return data.division || null;
    }

  register(item:registerModel):Observable<any>{
    return this.http.post<registerModel>(environment.baseUrl + '/applicant', item)
  }

  uploadImage(formData: FormData){
    return this.http.post<mediaModel>(environment.baseUrl + '/media/upload', formData)
  }

  fetchApplicants(item: getApplicantsModel):Observable<any>{
    let url = `${environment.baseUrl}/applicant`

    let isFirstParam = true;

    if (item.search){
      url += `${isFirstParam ? '?' : '&'}search=${item.search}`;
      isFirstParam = false;
    }
      if (item.page) {
        url += `${isFirstParam ? '?' : '&'}page=${item.page}`;
        isFirstParam = false;
      }
      if (item.pageSize) {
        url += `${isFirstParam ? '?' : '&'}pageSize=${item.pageSize}`;
        isFirstParam = false;
      }
      return this.http.get<getApplicantsModel>(url)
  }
}
