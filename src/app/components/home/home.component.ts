import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Good } from 'src/app/interfaces/good.interface';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',                          
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  goods:Good[]=[]
  goodsObservable: Subscription = new Subscription;
  add:number=-1;
  

  
  constructor(private gs:GoodsService) { }

  ngOnInit(): void {
    this.goodsObservable= this.gs.getAllGoods().subscribe(data =>{
      this.goods= data.map(element => {
        return{
          id:element.payload.doc.id,
          ...element.payload.doc.data() as {}
        }
      } )
    } )
   }
   ngOnDestroy(){
         this.goodsObservable.unsubscribe()
   }
  addToCart(index:number){
    this.add=+ index
    

  }
  buy(amount:number){

    let sg= this.goods[this.add]
    let data={
      name:sg.name,
       amount:+amount,
       price: sg.price
    }
  }
  


}
