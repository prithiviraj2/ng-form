import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableForm!:FormGroup
  constructor(private fb:FormBuilder) {}
  obj:any={
    name: 'vdvd', age: 33
  }
  ngOnInit(): void {
    this.tableForm=this.fb.group({
      name:[""],
      age:[""]
    })
    
  }

  submit(){
    console.log(this.tableForm.value)
    console.log(this.obj)
    this.obj={
      name: 'www', age: 99
    }
  }

}
