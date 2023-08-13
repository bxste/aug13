import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent {

  readDataBooks: any[] = [];
  constructor(private service:ApiserviceService){}
  
  ngOnInit(): void{

    this.service.getAllDataBooks().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBooks = res.data;
    });
  }
}
