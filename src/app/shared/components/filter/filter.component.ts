import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() options: any[];
  @Output() filterChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
}
