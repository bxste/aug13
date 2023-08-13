import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  readDataBooks: any[] = [];
  readDataBook2: any[] = [];
  successmsg: any;
  getparamid: any;
  constructor(private service:ApiserviceService, private activatedRoute:ActivatedRoute){}


  ngOnInit(): void{
    this.service.getAllDataBooks().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBooks = res.data;
    });

    this.service.getAllDataBook2().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBook2 = res.data;
    });
    this.getparamid = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>');
      this.userForm.patchValue({
        id:res.data[0].id,
        book_title:res.data[0].book_title,
        author:res.data[0].author,
        book_summary:res.data[0].book_summary,
        book_edition:res.data[0].book_edition,
        book_publisher:res.data[0].book_publisher,
        book_img:res.data[0].book_img, 
      })
    })
  }
  userForm = new FormGroup({
    'id': new FormControl('',Validators.required),
    'book_title': new FormControl('',Validators.required),
    'author': new FormControl('',Validators.required),
    'book_summary': new FormControl('',Validators.required),
    'book_edition': new FormControl('',Validators.required),
    'book_publisher': new FormControl('',Validators.required),
    'book_img': new FormControl('',Validators.required),
  });
  
}
// getAllDataBook2