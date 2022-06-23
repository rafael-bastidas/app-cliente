import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Subscription } from 'rxjs';
import { IntercomService } from 'src/app/servicios/itercom.service';
import { THeadHomeUser } from 'src/app/utils/models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  suscritions: Subscription[] = []
  infoHeadHomeuser: THeadHomeUser | undefined

  constructor(private router: Router, private intercom: IntercomService) { }

  ngOnInit(): void {
    this.suscritions[0] = this.intercom.itemHeadHomeUser$.subscribe(item => {
      this.infoHeadHomeuser = item;
    })
  }

  selectHome() {
    let urlCurrent = this.router.routerState.snapshot.url;
    if (urlCurrent === "" || urlCurrent === "/register" || urlCurrent === "/login"){
      this.router.navigate([""])
    } else {
      this.router.navigate([urlCurrent.split("/")[1].concat("/home-owner")])
    }
  }

}
