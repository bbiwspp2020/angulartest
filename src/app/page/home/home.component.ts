import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators
} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup | any;
  submitted = false;
  filingType: any = 0
  constructor(
    private formBuilder: FormBuilder
  ) { }
  todayDate: Date = new Date();
  Years: Date = new Date();
  checkMonth: any
  saleAmount: string = ""
  taxAmount: string = ""
  surcharge: string = ""
  penalty: string = ""
  totalAmount: string = ""
  years: any = []
  year: string = ''
  month: any
  page: any = 1
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
  data: any
  ngOnInit(): void {
    this.getYear()
    this.getMonth()
    this.data = sessionStorage.getItem('data')
    if (this.data) {
      this.taxData = JSON.parse(this.data)
      this.filingType = this.taxData.filingType
      this.month = this.taxData.month
      this.year = this.taxData.year
      this.filingType = this.taxData.filingType
    }
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

  onFocus() {
    this.saleAmount = this.saleAmount.replace(/,/g, '')
  }
  onFocusVAT() {
    this.taxAmount = this.taxAmount.replace(/,/g, '')
  }

  tax: any
  onBlur() {
    let total = Number(this.saleAmount) * 0.007
    let surcharge = Number(this.saleAmount) * 0.1
    this.saleAmount = this.saleAmount.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',').replace(/\.[0-9]{3}\r|\n*$'/g, '')
    this.taxAmount = total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    this.tax = this.taxAmount
    this.surcharge = surcharge.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    Number(this.saleAmount) == 0 ? this.penalty = '' : this.penalty = '200.00'
    let sum = Number(this.taxAmount.replace(/[^0-9.]/g, '')) + Number(this.surcharge.replace(/[^0-9.]/g, '')) + Number(this.penalty.replace(/[^0-9.]/g, ''))
    this.totalAmount = sum.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    this.totalAmount = this.totalAmount
  }

  onBlurVAT() {
    if (Number(this.taxAmount) > 0) {
      this.taxAmount = this.taxAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }

  check(e: any) {
    let data = Number(this.tax)
    let max = Number(data + 20)
    let min = Number(data - 20)
    if (Number(e.target.value) > max) {
      alert('Invalid Tax')
      this.taxAmount = this.tax
    }
    if (Number(e.target.value) < min) {
      alert('Invalid Tax')
      this.taxAmount = this.tax
    }
  }
  test() {
    this.saleAmount = this.saleAmount.replace(/[^0-9.]/g, '').replace(/\.[0-9]{3}\r|\n*$'/g, '')
  }

  back() {
    document.getElementById('Ordinary')?.click()
  }
  taxData: any
  next() {
    if (!this.month || !this.year || !this.saleAmount || !this.taxAmount) {
      alert('Invalid Data')
      return
    }
    let data: any = {
      filingType: this.filingType,
      month: this.month,
      year: this.year,
      saleAmount: this.saleAmount,
      taxAmount: this.taxAmount,
      surcharge: this.surcharge,
      penalty: this.penalty,
      totalAmount: this.totalAmount,
    }

    this.taxData = data
    sessionStorage.setItem('data', JSON.stringify(this.taxData))
    window.location.href = "confirm"
  }



}
