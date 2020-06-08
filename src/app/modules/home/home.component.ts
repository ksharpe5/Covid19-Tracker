import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CountrySummary, Summary } from 'src/app/shared/models/summary';
import { Covid19ApiService } from 'src/app/core/services/covid19-api/covid19-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  globalSummary: Summary;
  showLoading = true;
  countryTableColumns: string[] = ['Country', 'TotalConfirmed', 'TotalDeaths', 'TotalRecovered'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<CountrySummary>();

  constructor(private api: Covid19ApiService) { }

  ngOnInit(): void {
    this.api.getSummary().subscribe({
      next: (response) => {
        console.log(response);
        this.globalSummary = response.Global;


        console.log(this.sort);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = response.Countries.sort((a,b) => b.TotalConfirmed - a.TotalConfirmed);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => this.showLoading = false
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}