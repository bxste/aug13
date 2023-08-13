import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.css']
})
export class FantasyComponent {
  readDataBook3: any[] = [];
  constructor(private service:ApiserviceService){}

  ngOnInit(): void{

    this.service.getAllDataBook3().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBook3 = res.data;
    });
  }
}
