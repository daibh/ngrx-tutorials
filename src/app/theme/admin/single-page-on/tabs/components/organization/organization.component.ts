import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  page = 4;
  constructor() { }

  ngOnInit() {
  }

  onPageChange = $event => {
    console.log($event);
  }

}
