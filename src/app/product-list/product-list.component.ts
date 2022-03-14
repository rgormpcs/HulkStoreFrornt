import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Product } from 'src/entities/Product';
import { BuyComponent } from '../buy/buy.component';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  totalPrice:any=0;
  buyCarItems: Product[] = []
  Products: Product[] = [
    {
      name: "Scarlet Witch",
      price: 160.00,
      marca: "Marvel",
      image: "http://cdn.shopify.com/s/files/1/0863/0758/products/marvel-select-wandavision-scarlet-witch-collectible-action-figure.jpg?v=1615485618",
      amount: 5
    },
    {
      name: "Batman",
      price: 123.50,
      marca: "DC",
      image: "https://media.gamestop.com/i/gamestop/11169592/McFarlane-Toys-DC-Multiverse-The-Batman-Wave-1-Batman-7-in-Action-Figure?$pdp$",
      amount: 5
    },
    {
      name: "Aeroman",
      price: 100.50,
      marca: "Marvel",
      image: "https://www.mythfactoryshop.com/36132-large_default/Iron-Man-Hot-Toys-The-Origins-CMS07D37-Marvel.jpg",
      amount: 5
    },
    {
      name: "Viuda Negra",
      price: 160.00,
      marca: "Marvel",
      image: "https://sc04.alicdn.com/kf/H0f9db2e5a77d4620a68d392b260185bac.jpg",
      amount: 5
    },
    {
      name: "Harley Quinn",
      price: 160.00,
      marca: "DC",
      image: "https://i.ebayimg.com/thumbs/images/g/Qs0AAOSw09pd8lNS/s-l300.jpg",
      amount: 5
    },
    {
      name: "Aeroman",
      price: 100.50,
      marca: "Marvel",
      image: "https://www.mythfactoryshop.com/36132-large_default/Iron-Man-Hot-Toys-The-Origins-CMS07D37-Marvel.jpg",
      amount: 5
    },
    {
      name: "Viuda Negra",
      price: 160.00,
      marca: "Marvel",
      image: "https://sc04.alicdn.com/kf/H0f9db2e5a77d4620a68d392b260185bac.jpg",
      amount: 5
    },
    {
      name: "Viuda Negra",
      price: 160.00,
      marca: "Marvel",
      image: "https://sc04.alicdn.com/kf/H0f9db2e5a77d4620a68d392b260185bac.jpg",
      amount: 5
    },
    {
      name: "Harley Quinn",
      price: 160.00,
      marca: "DC",
      image: "https://i.ebayimg.com/thumbs/images/g/Qs0AAOSw09pd8lNS/s-l300.jpg",
      amount: 5
    },
    {
      name: "Aeroman",
      price: 100.50,
      marca: "Marvel",
      image: "https://www.mythfactoryshop.com/36132-large_default/Iron-Man-Hot-Toys-The-Origins-CMS07D37-Marvel.jpg",
      amount: 5
    },
    {
      name: "Viuda Negra",
      price: 160.00,
      marca: "Marvel",
      image: "https://sc04.alicdn.com/kf/H0f9db2e5a77d4620a68d392b260185bac.jpg",
      amount: 5
    },
    {
      name: "Harley Quinn",
      price: 160.00,
      marca: "DC",
      image: "https://i.ebayimg.com/thumbs/images/g/Qs0AAOSw09pd8lNS/s-l300.jpg",
      amount: 5
    }


  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  buy(id: number) {
    this.buyCarItems.push(this.Products[id]);
    this.totalPrice=this.buyCarItems.forEach(item1=>item1.price+item1.price)


  }
   buyCar(){
    Swal.fire({
      title: 'Seguro?',
      text: "Desea Finalizar la compra",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'Cancelar',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(["buy"])
        this.buyCarItems=[];
      }
    })

   }


}
