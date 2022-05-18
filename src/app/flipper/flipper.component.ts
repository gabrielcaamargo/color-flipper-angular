import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-flipper',
  templateUrl: './flipper.component.html',
  styleUrls: ['./flipper.component.css']
})
export class FlipperComponent implements OnInit {

  colorsList: any[] = [
    '#0B0500',
    '#7DDE92',
    '#44BBA4',
    '#7FB800',
    '#C5D86D',
    '#E7BB41',
    '#007EA7',
    '#53687E',
    '#E06D06',
    '#F72585',
    '#f00',
    '#4E4187',
    '#0D2C54'
  ]

  getRandomNumber(): any{
    return Math.floor(Math.random() * this.colorsList.length)
  }

  @ViewChild('resultDiv') results: ElementRef;

  generateRandomColor(){
    // console.log(this.results.nativeElement.style)
    this.results.nativeElement.style.background = this.colorsList[this.getRandomNumber()]
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
