import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ids',
  templateUrl: './ids.component.html',
  styleUrls: ['./ids.component.css'],
})
export class IdsComponent implements OnInit {
  @Input() title: string = '';
  @Input() ids: any[] = [];
  @Output() selectedValue = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  detectedId(event: any) {
    this.selectedValue.emit();
  }
}
