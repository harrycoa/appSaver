import { Component, OnInit } from '@angular/core';
import { OutcomeCreateModel } from './models/outcome-create.model';
import { UserStorageService } from '../../../services/user-storage.service';

@Component({
  selector: 'app-outcome-create',
  templateUrl: './outcome-create.component.html',
  styleUrls: ['./outcome-create.component.css'],
})
export class OutcomeCreateComponent implements OnInit {
  public model: OutcomeCreateModel = new OutcomeCreateModel();
  constructor(public userStorageService: UserStorageService) {}

  ngOnInit(): void {
    this.model.userId = this.userStorageService.user.id;
  }

  onSubmit(): void {
    console.log(this.model);
  }
}
