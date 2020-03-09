import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as _interface from "../interface";

@Injectable({
  providedIn: "root"
})
export class ApiServiceService {
  private userRequest: string = "https://jsonplaceholder.typicode.com";
  public userInfo: _interface.User[];
  constructor(private _http: HttpClient) {}

  getIndicator(): Promise<_interface.User[]> {
    return new Promise(resolve => {
      this._http
        .get<_interface.User[]>(`${this.userRequest}/users`)
        .subscribe(result => {
          resolve(result);
        });
    });
  }

  getUserPosts(id: string) {
    return this._http.get<_interface.UserPosts[]>(
      `${this.userRequest}/users/${id}/posts`
    );
  }

  getUserTodos() {
    return this._http.get<_interface.UserPosts[]>(`${this.userRequest}/todos`);
  }
}
