import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericService } from 'src/app/servicios/generic.service';
import { TInfoCondominio } from 'src/app/utils/models/interfaces';

@Component({
  selector: 'app-home-init',
  templateUrl: './home-init.component.html',
  styleUrls: ['./home-init.component.scss']
})
export class HomeInitComponent implements OnInit {

  suscritions: Subscription[] = []
  allCond: TInfoCondominio[] = []
  selectCond:FormControl = new FormControl('')
  
  constructor(private connectHttp: GenericService, private router: Router) { }

  ngOnInit(): void {
    this.getListCond()
    this.selectCond.valueChanges.subscribe(value => {value !== '' ? this.goLogin(value) : ''})
  }

  getListCond(){
    this.suscritions[0] = this.connectHttp.post({
     url:"general", params:"GET-LIST-COND", data:localStorage.getItem("tokenUser")
   }).subscribe(result => {
     if (!result.error) {
       this.allCond = result.data
     }
   });
 }

 goLogin(code:string){
  this.router.navigate([`/${code}/login`])
 }

}
