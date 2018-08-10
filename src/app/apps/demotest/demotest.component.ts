import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/Test.service';
import { TestData } from '../../items/data';

@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.scss']
})
export class DemotestComponent implements OnInit {

  testData: TestData[];

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.testService.restItemsServiceGetRestItems()
    .subscribe(testData => this.testData = testData);
  }

  
}