import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  formpage!: FormGroup;
  public Submitted = false
  status: any
  event: any
  product: any = []
  constructor(private fb: FormBuilder, private FormService: FormService,
    private route: ActivatedRoute,
    private router: Router) {
    this.formpage = this.fb.group({
      name: [''],
      status: [''],
      present: ['1'],
    });
  }

  ngOnInit(): void {
    this.status = [
      'Active', 'Inactive'
    ];
    this.get()
  }
  onsubmit() {
    console.log(this.formpage.value);
    this.Submitted = true;
    console.log(this.formpage.value.present);
    

    console.log(this.product.length);
    if (this.product.length > 0) {


      const dataExist1 = this.product.find((res: any) => res.present === this.formpage.value.present)
      console.log(dataExist1);

      if (dataExist1.present == '1') {
        alert('already is submitted')
      } else if(dataExist1.present == '0') {
        this.FormService.login(this.formpage.value).subscribe(
          res => {
            console.log(res)
          })
      }

    }
    else {
      this.FormService.login(this.formpage.value).subscribe(
        res => {
          console.log(res)
        })
    }
  }
  get() {
    this.FormService.getLogin().subscribe(
      res => {
        console.log(res)
        this.product = res
      })
  }
  checkpresent(event: any) {
    if (event.target.checked) {
      this.formpage.value.present = '1'
    } else {
      this.formpage.value.present = '0'
    }
  }
}
