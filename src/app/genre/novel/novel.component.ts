import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})
export class NovelComponent {
  readDataBook2: any[] = [];
  constructor(private service:ApiserviceService){}

  ngOnInit(): void{

    this.service.getAllDataBook2().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBook2 = res.data;
    });
  }
}
