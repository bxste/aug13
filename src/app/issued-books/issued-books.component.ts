import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent {
  readData: any;
  successmsg: any;
  singleData: any;
  constructor(private service:ApiserviceService){}

  ngOnInit(): void{
    this.service.getAllDataBook5().subscribe((res)=>{
      console.log(res,"res==>");

      this.readData = res.data;
    });

  }

  deleteID(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res, 'deleteres==>');  this.service.getAllDataBook5().subscribe((res)=>{
        console.log(res,"res==>");
  
        this.readData = res.data;
      });
      // this.successmsg = res.message;
    });
  }
  
  // fetchSingleData(id: number): void {
  //   this.service.getSingleData(id).subscribe(
  //     (data) => {
  //       this.singleData = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching single data:', error);
  //     }
  //   );
  // }
}
