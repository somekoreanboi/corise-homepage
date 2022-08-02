import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-four',
  templateUrl: './footer-four.component.html',
  styleUrls: ['./footer-four.component.css']
})
export class FooterFourComponent implements OnInit {
	
	about_title = "ABOUT US";
	about_desc = "Corise Technology strives for strong responsibility and bold creativity. This is our core value as an organization";
	
	schedule_title = "OPENING HOURS";
	
	contactList : any = [
		{
			icon: "ti ti-location-pin",
			address: "Unit 302, 6, Yeouidaebang-ro 65-gil, Yeongdeungpo-gu, Seoul, Republic of Korea",
		},
		{
			icon: "ti ti-mobile",
			address: "Phone +82-2-6093-5577",
		},
		{
			icon: "ti ti-email",
			address: "Email bm@gemizip.com",
		},
	]
	

  constructor() { }

  ngOnInit(): void {
  }

}
