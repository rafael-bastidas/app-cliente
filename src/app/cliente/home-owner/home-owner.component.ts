import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericService } from 'src/app/servicios/generic.service';
import { IntercomService } from 'src/app/servicios/itercom.service';

@Component({
  selector: 'app-home-owner',
  templateUrl: './home-owner.component.html',
  styleUrls: ['./home-owner.component.scss']
})
export class HomeOwnerComponent implements OnInit {

  suscritions: Subscription[] = []
  infoCartelera:SafeHtml = ""
  
  constructor(private toastr: ToastrService, private connectHttp: GenericService, 
    private intercom: IntercomService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadInfoHead()
  }

  loadInfoHead(){
     this.suscritions[0] = this.connectHttp.post({
      url:"general", params:"GET-INFO-HOME-USER", data:localStorage.getItem("tokenUser")
    }).subscribe(result => {
      if (!result.error) {
        this.intercom.announceHeadHomeUser(result.data.infoHeadHomeUser)
        this.infoCartelera = this.sanitizer.bypassSecurityTrustHtml(result.data.infoCartelera)
      } else {
        this.toastr.error(result.msg);
      }
    });
  }

  showSuccess() {
    this.toastr.success('Factura pagada!');
  }

}
