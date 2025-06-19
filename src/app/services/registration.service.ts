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

// Store regular form data
// setFormData(data: registerModel) {
//   // this.registerData = {...this.registerData, ...data};
//   this.registerData = {
//     ...data,
//     division: data.division || this.registerData.division
//   };
//   localStorage.setItem('registerData', JSON.stringify(data));
//   console.log('Current merged payload:', this.registerData);
// }
setFormData(data: registerModel) {
  // Merge new data while keeping existing division if not provided
  this.registerData = {
    ...this.registerData,  // Existing data (including division)
    ...data,              // New form data
    division: data.division || this.selectedDivision || this.registerData.division 
  };
  
  this.updateLocalStorage();
  localStorage.setItem('registerData', JSON.stringify(this.registerData));
  console.log('Merged Payload:', this.registerData);
}

private updateLocalStorage() {
  localStorage.setItem('registerData', JSON.stringify(this.registerData));
}

getFormData(): registerModel {
  // return this.registerData;
  if (this.registerData) return this.registerData;

  const stored = localStorage.getItem('registerData');
  return stored ? JSON.parse(stored) : new registerModel();
}

// Store selected division
setSelectedDivision(division: string) {
  // this.selectedDivision = division;
  this.selectedDivision = division
  this.registerData.division = division;
  const stored = localStorage.getItem('registerData');
  const storedData = stored ? JSON.parse(stored) : {};
  storedData.division = division;
  localStorage.setItem('registerData', JSON.stringify(storedData));
}

// Combine all data for submission
getRegistrationPayload(): registerModel {
  // return {
  //   ...this.registerData,
  //   division: this.selectedDivision || ''
  // };
  return this.registerData;
}

  register(item:registerModel):Observable<any>{
    return this.http.post<registerModel>(environment.baseUrl + '/applicant', item)
  }

  uploadImage(formData: FormData){
    return this.http.post<mediaModel>(environment.baseUrl + '/media/upload', formData)
  }
}
