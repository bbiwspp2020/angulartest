import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
data:any
todayDate: Date = new Date();
  Years: Date = new Date();
filingType:any = ''
checkMonth: any
saleAmount: string = ""
taxAmount: string = ""
surcharge: string = ""
penalty: string = ""
totalAmount: string = ""
years: any = []
year: string = ''
month:any
page:any = 1
months: any = [
  { value: '01', month: 'January', status: 1 },
  { value: '02', month: 'February', status: 2 },
  { value: '03', month: 'March', status: 3 },
  { value: '04', month: 'April', status: 4 },
  { value: '05', month: 'May', status: 5 },
  { value: '06', month: 'June', status: 6 },
  { value: '07', month: 'July', status: 7 },
  { value: '08', month: 'August', status: 8 },
  { value: '09', month: 'September', status: 9 },
  { value: '10', month: 'October', status: 10 },
  { value: '11', month: 'November', status: 11 },
  { value: '12', month: 'December', status: 12 },
]

taxData:any
  constructor() { }

  ngOnInit(): void {
  this.data = sessionStorage.getItem('data')
  this.taxData = JSON.parse(this.data)
  console.log(this.taxData);
  
  this.getMonth()
  this.getYear()
  }

  getYear() {
    const today = new Date();
    let yyyy = today.getFullYear();
    this.years.push({ year: yyyy });
    for (let i = 0; i < 3; i++) {
      yyyy--;
      this.years.push({ year: yyyy });
    }
  }

  getMonth() {
    this.checkMonth = this.todayDate.getMonth()
    this.checkMonth = this.checkMonth + 1
  }

  submit(){
   window.location.href=''
  }

}
