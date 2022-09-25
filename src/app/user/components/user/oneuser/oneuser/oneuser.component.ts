import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oneuser',
  templateUrl: './oneuser.component.html',
  styleUrls: ['./oneuser.component.css'],
})
export class OneuserComponent implements OnInit {
  @Input() users: any = {};
  constructor() {}

  ngOnInit(): void {}
}
