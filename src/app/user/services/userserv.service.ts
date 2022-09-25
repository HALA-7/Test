import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserservService {
  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get('http://fakeuserapi.com/users');
  }
  getIduser() {
    return this.http.get('http://fakeuserapi.com/users/ids');
  }
  getUserById(keyword: number) {
    return this.http.get('http://fakeuserapi.com/users/' + keyword);
  }
}
