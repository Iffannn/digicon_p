import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //authorization: ''
    }),
  };
  numfound: any;
  book: any[] = [];
  constructor(private http: HttpClient) {}
  form: FormGroup = new FormGroup({
    keyword: new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.search();
  }

  search() {
    this.getData('b00030126').subscribe((response: any) => {
      console.log(response)
    });
  }
  
  

  getData(keyword: string) {
    let baseUrl = `http://localhost:8081/getsolr_id/` + keyword;
    //console.log(environment.apiurl);
    return this.http.get<any>(baseUrl, this.httpOptions);
  }

}
