import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'stackOverFlowAPI';
  searchValue:any;
  isLoading:any;
   data:any=[];
   p: number = 1;
   fromDate:any;
   toDate:any;
   answer:any;
   view:any;
   min:any;
   max:any;
   page:any;
   pagesize:any;
  constructor(private appservice:AppService,private router:Router){

  }

  ngOnInit(){
     this.getQuestionList();
  }

  getQuestionList(){
    //  this.appservice.getQuestionList().subscribe((data:any)=>{
    //    this.data =  data.items;
    //  },
    //  error =>{
    //     console.log(error);
    //  }); 
  }

  redirect(){
    this.router.navigateByUrl('/detailsView');
  }

  submitData(){
       this.isLoading=true;
      const toDate = this.getvalueById('toDate');
      const fromDate = this.getvalueById('fromDate');
      const date1 = new Date(toDate).getTime()/1000;
      const date2 = new Date(fromDate).getTime()/1000;
      const answer = this.getvalueById('answer');
      const view = this.getvalueById('view');
      const min = this.getvalueById('min');
      const max = this.getvalueById('max');
      const page = this.getvalueById('page');
      const pagesize = this.getvalueById('pagesize');
      const order = this.getvalueById('selected-order');
      const sort = this.getvalueById('selected-sort');

      let stringdata = '&fromdate='+date2+'&todate='+date1+'&view='+view+'&answer='+answer+'&min='+min+'&max='+max+'&page='+page+'&pagesize='+pagesize+'&order='+order+'&sort='+sort;
      this.appservice.getQuestionList(stringdata).subscribe((data:any)=>{
        this.isLoading=false;
        this.data =  data.items;
      },
      error =>{
         console.log(error);
      });

  }

  getvalueById(id: string){
    const result = (<HTMLInputElement> document.getElementById(id));
    return result.value;
  }
}
