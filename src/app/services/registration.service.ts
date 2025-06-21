import { Injectable } from '@angular/core';
import { mediaModel, registerModel } from '../models/registration.model';
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
  setSelectedDivision(division: string) {
    // Ensure exact values with underscores
    const formattedDivision = division.trim().replace(/\s+/g, '_');
    this.selectedDivision = formattedDivision;
    this.registerData.division = formattedDivision;
    
    // Update localStorage
    const storedData = this.getFormData();
    storedData.division = formattedDivision;
    localStorage.setItem('registerData', JSON.stringify(storedData));
  }
  
  // Combine all data for submission
  getRegistrationPayload(): registerModel {
    return this.registerData;
    }

  register(item:registerModel):Observable<any>{
    return this.http.post<registerModel>(environment.baseUrl + '/applicant', item)
  }

  uploadImage(formData: FormData){
    return this.http.post<mediaModel>(environment.baseUrl + '/media/upload', formData)
  }
}
