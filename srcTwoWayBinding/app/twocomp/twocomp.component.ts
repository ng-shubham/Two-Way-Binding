import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twocomp',
  templateUrl: './twocomp.component.html',
  styleUrls: ['./twocomp.component.css']
})
export class TwocompComponent implements OnInit {

  public username="";
  constructor() { }

  ngOnInit() {
  }

}
