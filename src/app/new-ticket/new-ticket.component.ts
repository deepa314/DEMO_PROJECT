import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  newTicketForm:FormGroup
  selectedType:string='R'
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.newTicketForm=this.fb.group({
      ipAddress:['',Validators.required],
      issueType:['',Validators.required],

    })
  }

  onSubmit(){

  }

}
