import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  errormsg:any;
  successmsg:any;
  getparamid: any;

  constructor(private service:ApiserviceService, private activatedRoute:ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.getparamid = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>');
      this.userForm.patchValue({
        id:res.data[0].id,
        stname:res.data[0].stname,
        course:res.data[0].course,
        fee:res.data[0].fee 
      })
    })
  }
  userForm = new FormGroup({
    'id': new FormControl('',Validators.required),
    'stname': new FormControl('',Validators.required),
    'course': new FormControl('',Validators.required),
    'fee': new FormControl('',Validators.required)
  });
  //new
  userSubmit(){
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res:any)=>{
        // console.log(res);
        this.userForm.reset();
      })
    }
    else{
      this.errormsg = 'all fields is required';
      console.log('all fields is required')
    } 

    this.router.navigate(['/read']);
  }
  
  //update
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
