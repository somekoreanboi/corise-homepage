import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-call-action-two',
  templateUrl: './call-action-two.component.html',
  styleUrls: ['./call-action-two.component.css']
})
export class CallActionTwoComponent implements OnInit {
	
	@Input() data : any;
	
	email = "bm@gemizip.com";
	contact_no = "+82-2-6093-5577";

  constructor() { }

  ngOnInit(): void {
  }

}
