import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.page.html',
  styleUrls: ['./result-page.page.scss'],
})
export class ResultPagePage implements OnInit {
public id: string;
public productName: string;
public productBrand: string;
public size: string;
public category: string;
public imageLink: string;
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
  this.id=this.route.snapshot.paramMap.get('id');
  this.loadData();
  }

loadData()
{
	console.log('Load Data');
  if(this.id!=undefined)
  {
  if(this.id=='Television')
  {
      	this.productName="Name : LED Television";
      	this.size="Size : 15'";
        this.productBrand="Brand : Samsung";
        this.category="Category : Television";
        this.imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GWlNQEkv9f1vrVIO4bh06rSekRZWdbEmOWWU-L7O6kFaCdee7g";
  }
    else if(this.id=='Mobile')
  {
      this.productName="Name : Iphone XS";
      this.size="Size : 13'";
      this.productBrand="Brand : Apple";
      this.category="Category : Mobile";
      this.imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarf-k1dCBsetKBsE9oYesAvAlzj1HyMunrgDRVTW05eqyhUIX";
  }
    else if(this.id=='Laptop')
  {
      this.productName="Name : Touch Laptop";
      this.size="Size : 15'";
      this.productBrand="Brand : Dell";
      this.category="Category : Laptop";
      this.imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8SHdbu3Xu_6LGsEf64TBBV9SqDudJP9kgWp64M4WNDkX5D5TSw";
  }
}
else
{
  this.id="";
  this.productName="";
  this.size="";
  this.productBrand="";
  this.category="";
  this.imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFZwDuO7bJN1uKm0xrVUu2zAx5NC-L6HUKiLxdcUDO6L3ZcmN";
    
}
}
}
