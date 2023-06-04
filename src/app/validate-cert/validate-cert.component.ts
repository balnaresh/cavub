import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpEvent, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Block,BlockData,MyData } from '../ShowBlock.model';


@Component({
  selector: 'app-validate-cert',
  templateUrl: './validate-cert.component.html',
  styleUrls: ['./validate-cert.component.css']
})
export class ValidateCertComponent {
  selectedFile: File | any;
  files: any;
  name: string = "";
  registeredNumber: string = "";
  issuedDate: string = "";
  stream: string = "";
  degree: string = "";
  institution: string = "";

  isModalOpen: boolean = false;
  showbefore: boolean = true;
  showbefore2: boolean = true;
  hashCode: string = "";

  alldata: any;
  myData: MyData | undefined;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('certPDF', this.selectedFile);
    // const headers = new HttpHeaders().set('Api_key', '123456').set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Content-Type', 'multipart/form-data').set("reportProgress", "true").set("observe", "events").set("responseType", "text");
    const headers = new HttpHeaders({
      'Api_key': '123456',
      'Access-Control-Allow-Origin': '*',
    });
    this.http.post('http://127.0.0.1:8000/api/validate', formData, {
      headers,
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const response: any = event.body;
          // Access the response object here
          console.log(response);
          // Update the variables with the response data
          this.myData = JSON.parse(response) as MyData;
        console.log(this.myData);
        // You can access the properties of the object here
        console.log(this.myData.data?.name);
        console.log(this.myData.data?.registeredNumber);
        console.log(this.myData.data?.issuedDate);
        console.log(this.myData.data?.stream);
        console.log(this.myData.data?.degree);
        console.log(this.myData.data?.institution);
        this.alldata=this.myData.data;
        if(this.alldata){
          this.showbefore=false;
        }else{
          this.showbefore2=false;
        }
        }
      })
    )
    .subscribe(
      (data: any) => {
        // Handle success cases if needed
      },
        (error: any) => {
          console.error('Error uploading file:', error);
          // Handle error cases
        }
      );
  }
}
