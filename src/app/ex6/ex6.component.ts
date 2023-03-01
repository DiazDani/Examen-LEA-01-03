import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.css']
})
export class Ex6Component {
  constructor(private http: HttpClient) {

    this.http.get<any>("http://localhost:3020/api/ex6").forEach((client) =>{
      console.log(client);
      console.log(client._fieldsProto.botiga.mapValue.fields.seu.stringValue);
    })
  }
}
