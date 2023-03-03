import { Component } from '@angular/core';
import { IDBService } from './idb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PacoApp';

  constructor(public servicioIDB: IDBService) {
    this.servicioIDB.iniciarIndexedDB();
  }
}
