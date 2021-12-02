import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() {
    if (!window.indexedDB) {
      console.log('Your browser doesn\'t support a stable version of IndexedDB. Such and such feature will not be available.');
    } else {
      console.log('Your browser support a stable version of IndexedDB.');
      // this.openIndexedDB();
    }
  }


  // -------------------------------
  // SESSION & LOCAL STORAGE
  // -------------------------------


  setToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getFromLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  deleteFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  setToSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  getFromSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }

  deleteFromSessionStorage(key: string) {
    sessionStorage.removeItem(key);
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }
}
