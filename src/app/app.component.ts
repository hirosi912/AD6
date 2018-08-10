import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  // restItems: any;
  // restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';
  // restItemsUrl1 = 'http://opendata.hccg.gov.tw/dataset/b545e5ba-b5d3-4f34-925f-727fd79fdcb1/resource/bee7d9c9-9be4-4fea-8ca9-6e00747a8bcd/download/20180704162304009.json';

  // constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getRestItems();
  }

  // // Read all REST Items
  // getRestItems(): void {
  //   this.restItemsServiceGetRestItems()
  //     .subscribe(
  //       restItems => {
  //         this.restItems = restItems;
  //         console.log(this.restItems);
  //       }
  //     )
  // }

  // // Rest Items Service: Read all REST Items
  // restItemsServiceGetRestItems() {
  //   return this.http
  //     .get<any[]>(this.restItemsUrl)
  //     .pipe(map(data => data));
  // }
}
