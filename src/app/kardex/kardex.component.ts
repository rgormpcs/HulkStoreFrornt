import { Component, OnInit } from '@angular/core';
import { kardex } from 'src/entities/kardex';
import { Product } from 'src/entities/Product';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {

  KardexGroup: kardex[] = [
    {
      product: "Scarlet Witch",
      date: "10-05-2022",
      amountEnter: 1,
      amountExit: 1,
      total: 0
    },
    {
      product: "Batman",
      date: "10-06-2022",
      amountEnter: 5,
      amountExit: 4,
      total: 1
    },
    {
      product: "Airoman",
      date: "10-06-2022",
      amountEnter: 5,
      amountExit: 4,
      total: 1
    },
    {
      product: "Viuda Negra",
      date: "10-06-2022",
      amountEnter: 5,
      amountExit: 4,
      total: 1
    },
    {
      product: "Harley Quinn",
      date: "10-06-2022",
      amountEnter: 5,
      amountExit: 4,
      total: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
