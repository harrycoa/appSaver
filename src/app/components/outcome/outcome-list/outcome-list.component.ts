import { Component, OnInit } from '@angular/core';
import { OutcomeModel } from '../../login/models/outcome.nodel';
import { OutcomeService } from '../../../services/outcome.service';
import { UserStorageService } from '../../../services/user-storage.service';

@Component({
  selector: 'app-outcome-list',
  templateUrl: './outcome-list.component.html',
  styleUrls: ['./outcome-list.component.css'],
})
export class OutcomeListComponent implements OnInit {
  public items: OutcomeModel[] = [];
  public year: number;
  public month: number;

  constructor(
    private outcomeService: OutcomeService,
    private userStorageService: UserStorageService
  ) {}

  ngOnInit(): void {
    let now = new Date();
    this.year = now.getFullYear();
    // los meses en javascript comienzan en 0
    this.month = now.getMonth() + 1;
    // procesando data
    this.getAll();
  }

  getAll(): void {
    let request = this.outcomeService.getAll(
      this.year,
      this.month,
      this.userStorageService.user.id
    );
    request.subscribe((data) => {
      this.items = data;
    });
  }
}
