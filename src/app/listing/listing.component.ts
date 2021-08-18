import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  searchValue: any;
  isLoading: any;
  data: any = [];
  p: number = 1;
  filterValues: any = ['todate', 'fromdate', 'answer', 'view', 'min', 'max', 'page', 'pagesize', 'order', 'sort'];
  parameters: any = '';
  constructor(private appservice: AppService, private router: Router) {}

  ngOnInit() { }

  redirect(element:any) {
    localStorage.setItem('details',JSON.stringify(element));
    this.router.navigateByUrl('/detailsView');
  }

  generateString() {
    const length = this.filterValues.length;
    for (let i = 0; i < length; i++) {
      var value = this.getvalueById(this.filterValues[i]);
      if (value) {
        if (this.parameters) {
          if (this.filterValues[i] == ('todate' || 'fromdate' || 'min' || 'max')) {
            const timestamp = new Date(value).getTime() / 1000;
            this.parameters = this.parameters + '&' + this.filterValues[i] + '=' + timestamp
          }
          else {
            this.parameters = this.parameters + '&' + this.filterValues[i] + '=' + value
          }
        }
        else {
          if (this.filterValues[i] == ('todate' || 'fromdate' || 'min' || 'max')) {
            const timestamp = new Date(value).getTime() / 1000;
            this.parameters = this.parameters + '&' + this.filterValues[i] + '=' + timestamp
          }
          else {
            this.parameters = '&'+this.filterValues[i]+'='+ value
          }
        }
      }
    }
  }

  submitData() {
    this.isLoading = true;
    this.generateString();
    this.appservice.getQuestionList(this.parameters).subscribe((data: any) => {
      this.isLoading = false;
      this.data = data.items;
    },
      error => {
        this.isLoading = false;
        console.log(error);
      });
  }

  getvalueById(id: string) {
    const result = (<HTMLInputElement>document.getElementById(id));
    return result.value;
  }
}

