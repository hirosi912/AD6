import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { TestService } from '../../services/Test.service';
import { TestData } from '../../items/data';
import { Globals } from '../../globals';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.scss']
})
export class DemotestComponent implements OnInit {
  @ViewChild('SMT') SMT: TemplateRef<any>;
  @ViewChild('Assy') Assy: TemplateRef<any>;
  source: LocalDataSource;
  testData: TestData[];
  currentPanel: object ;

  constructor(
    private testService: TestService,
    private globals: Globals) {
      var index = globals.ctg.findIndex(item => item.name == globals.role);
      this.currentPanel = globals.ctg[index];
    }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.testService.restItemsServiceGetRestItems()
    .subscribe(testData => {
      // this.testData = testData,
      this.source = new LocalDataSource(testData);
      this.settings = this.settings;
    });
  }

  settings = {
    columns: {
      日期: {
        title: '日期',
        filter: true
      },
      名稱: {
        title: '名稱',
        filter: true
      },
      檢體編號1: {
        title: '檢體編號1',
        filter: false
      },
      檢體編號2: {
        title: '檢體編號2',
        filter: false
      }
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>'
    }
  }
}

// export let settings = {
//   columns: {
//     id: {
//       title: 'ID',
//       filter: false
//     },
//     name: {
//       title: 'Full Name',
//       filter: false
//     },
//     username: {
//       title: 'User Name',
//       filter: false
//     },
//     email: {
//       title: 'Email',
//       filter: false
//     }
//   }
// }