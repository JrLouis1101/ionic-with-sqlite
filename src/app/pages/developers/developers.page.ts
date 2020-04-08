import { Component, OnInit } from '@angular/core';
import { DatabaseService, Dev } from './../../services/database.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {

  developers: Dev[] = [];
  products: Observable<any[]>;

developer = {};
product = {};

constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(ready => {
      if (ready){
        this.db.getDevs().subscribe(devs => {
          console.log('devs changed: ', devs);
          this.developers = devs;
        });
        //usando o observable
        this.products = this.db.getProducts();
      }
    })
  }

  addDeveloper(){
    let skills = this.developer['skills'].split(',');
    skills = skills.map(skills => skills.trim());

    this.db.addDeveloper(this.developer['name'], skills)
    .then(_ => {
      this.developer = {};
    });
  }

  addProduct(){
    this.db.addProduct(this.product['name'], this.product['creator'])
    .then(_ => {
      this.product = {};
    });
  }

}
