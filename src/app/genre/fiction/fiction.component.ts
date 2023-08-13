import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent {
  readDataBook4: any[] = [];
  constructor(private service:ApiserviceService){}

  ngOnInit(): void{

    this.service.getAllDataBook4().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBook4 = res.data;
    });
  }
}
