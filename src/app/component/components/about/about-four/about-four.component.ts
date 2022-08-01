import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-four',
  templateUrl: './about-four.component.html',
  styleUrls: ['./about-four.component.css']
})
export class AboutFourComponent implements OnInit {
	
		subtitle= "Corise Technology strives for strong responsibility and bold creativity. This is our core value as an organization ";
		title= "Who we are";
		// description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

		itemList: any[] = [
			{list: "For over 20 years, we have evolved with our Clients and the Market as a value creator of solutions and services. Now Corise Technology is a key player for business and digital transformation in stock markets"},
			{list: "Since the launch of our global market data service in 2015, Corise Technology's business domain has dramatically widened to worldwide financial services as well as domestic solutions. Through a powerful combination of organic and external growth, we became a leading force in financial service solutions"},
			{list: "With more than 150 exchanges in 90 countries, Corise Technology can expertly handle risk Management solutions with global data"},
		]

  constructor() { }

  ngOnInit(): void {
  }

}
