import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:3000/library';
  apiUrl2 = 'http://localhost:3000/addBook';
  apiUrlBooks = 'http://localhost:3000/books';
  apiUrlNovel = 'http://localhost:3000/bookNovel';

  //get
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
  getAllDataBooks():Observable<any>
  {
    return this._http.get("http://localhost:3000/books");
  }
  getAllDataBook2():Observable<any>
  {
    return this._http.get("http://localhost:3000/bookNovel");
  }
  getAllDataBook3():Observable<any>
  {
    return this._http.get("http://localhost:3000/bookFantasy");
  }
  getAllDataBook4():Observable<any>
  {
    return this._http.get("http://localhost:3000/bookFiction");
  }
  getAllDataBook5():Observable<any>
  {
    return this._http.get("http://localhost:3000/addBook");
  }

  //create

  createData(data:any):Observable<any>
  {
    console.log(data,'createapi=>');
    return this._http.post(`${this.apiUrl}`,data);
  }

    //create2
  createData2(data:any):Observable<any>
  {
    console.log(data,'createapi2=>');
    return this._http.post(`${this.apiUrl2}`,data);
  }

  //delete

  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.apiUrl2}/${ids}`);
  }

  //update
  updateData(id:any, data:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }

  //singledata
  getSingleData(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiUrlBooks}/${ids}`);
  }
  getSingleDataNovel(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiUrlNovel}/${ids}`);
  }
  getTotalRowCount(): Observable<number> {
    return this._http.get<number>(`${this.apiUrl2}/total-row-count`);
  }
}
