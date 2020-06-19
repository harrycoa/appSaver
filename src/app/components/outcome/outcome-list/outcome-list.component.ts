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

  public months: Array<{}> = [
    { value: 1, label: 'Enero' },
    { value: 2, label: 'Febrero' },
    { value: 3, label: 'Marzo' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Mayo' },
    { value: 6, label: 'Junio' },
    { value: 7, label: 'Julio' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Septiembre' },
    { value: 10, label: 'Octubre' },
    { value: 11, label: 'Noviembre' },
    { value: 12, label: 'Diciembre' },
  ];

  public years: Array<number> = [];
  constructor(
    private outcomeService: OutcomeService,
    private userStorageService: UserStorageService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.year = now.getFullYear();
    // los meses en javascript comienzan en 0
    this.month = now.getMonth() + 1;
    // insertar en el array el año actual
    this.years.push(this.year);
    // procesando data
    this.getAll();
  }

  getAll(): void {
    const request = this.outcomeService.getAll(
      this.year,
      this.month,
      this.userStorageService.user.id
    );
    request.subscribe((data) => {
      this.items = data;
    });
  }
}
