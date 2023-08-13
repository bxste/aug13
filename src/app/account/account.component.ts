import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  readDataBook2: any[] = [];
  readDataBook2s: any[] = [];
  constructor(private service:ApiserviceService){}
  ngOnInit(): void{

    this.service.getAllDataBook2().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBook2 = res.data;
    });

    this.service.getAllDataBooks().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBook2s= res.data;
    });
  }
}
