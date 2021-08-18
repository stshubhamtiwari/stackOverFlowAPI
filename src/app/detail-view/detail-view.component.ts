import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  data: any;
  owner:any;

  constructor() {
     this.data = JSON.parse(localStorage.getItem('details') || '{}');
     
     this.owner = this.data.owner;
     console.log(this.owner,this.data);

   }

  ngOnInit(): void {
   
  }

}
