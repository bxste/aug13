import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.css']
})
export class SingleDataComponent {
  errormsg:any;
  successmsg:any;
  getparamid: any;
  readDataBooks: any[] = [];

  constructor(private service:ApiserviceService, private activatedRoute:ActivatedRoute, private router: Router){}

  ngOnInit(): void{
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
        stud_name:res.data[0].stud_name,
        stud_id:res.data[0].stud_id,
        stud_email:res.data[0].stud_email,
        stud_phone:res.data[0].stud_phone,
      });
      this.readDataBooks = res.data;
    });

  }
  userForm = new FormGroup({
    'id': new FormControl('',Validators.required),
    'book_title': new FormControl('',Validators.required),
    'author': new FormControl('',Validators.required),
    'book_summary': new FormControl('',Validators.required),
    'book_edition': new FormControl('',Validators.required),
    'book_publisher': new FormControl('',Validators.required),
    'book_img': new FormControl('',Validators.required),
    'stud_name': new FormControl('',Validators.required),
    'stud_id': new FormControl('',Validators.required),
    'stud_email': new FormControl('',Validators.required),
    'stud_phone': new FormControl('',Validators.required),
  });
  //new
  userSubmit(){
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.service.createData2(this.userForm.value).subscribe((res:any)=>{
        // console.log(res);
        this.userForm.reset();
      });
    }
    else{
      this.errormsg = 'all fields is required';
      console.log('all fields is required')
    } 

    this.router.navigate(['/issued-books']);
  }
  
  
  // update
  userUpdate(){
    console.log(this.userForm.value,'updatedform');
    if(this.userForm.valid){
      this.service.updateData(this.userForm.value,this.getparamid).subscribe((res:any)=>{
        console.log(res, 'resupdated');
        this.successmsg = res.message;
      })
    }else{
      this.errormsg = 'all fiels is required'
    }
  }
}
