import { Component, OnInit, Input } from '@angular/core';
import { OutcomeModel } from '../../../login/models/outcome.model';

@Component({
  selector: 'app-outcome-detail',
  templateUrl: './outcome-detail.component.html',
  styleUrls: ['./outcome-detail.component.css']
})
export class OutcomeDetailComponent implements OnInit {
  public model: OutcomeModel;

  // setter parametro de entrada
  @Input()
  set entry(model: OutcomeModel){
    this.model = model;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
