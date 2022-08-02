import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-four',
  templateUrl: './service-four.component.html',
  styleUrls: ['./service-four.component.css']
})
export class ServiceFourComponent implements OnInit {
	
	serviceList: any[] = [
		{
			image: "pic1.webp",
			icon: "icon1.png",
			title: "Data Distribution",
		},
		{
			image: "pic2.jpg",
			icon: "icon2.png",
			title: "Risk Management",
		},
		{
			image: "pic3.webp",
			icon: "icon3.png",
			title: "Global Stock Service",
		},
	]
	

  constructor() { }

  ngOnInit(): void {
  }

}
