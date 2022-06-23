import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericService } from 'src/app/servicios/generic.service';
import { TInfoCondominio } from 'src/app/utils/models/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  suscritions: Subscription[] = []
  
  formLogin: FormGroup = new FormGroup({
    inputUsuario: new FormControl('', Validators.required),
    inputClave: new FormControl('', Validators.required)
  })

  infoCond: TInfoCondominio | undefined

  constructor(private router: Router, private activateRoute: ActivatedRoute, private toastr: ToastrService,
    private spinner: NgxSpinnerService, private connectHttp: GenericService) { }

  ngOnInit(): void {
    this.formLogin.get('CODIGO_CONDOMINIO')?.setValue(this.activateRoute.snapshot.paramMap.get('id'))
    this.loadInfoCond(this.activateRoute.snapshot.paramMap.get('id'))
  }

  loadInfoCond(code:string|null){
    this.spinner.show();
     this.suscritions[0] = this.connectHttp.post({
      url:"general", params:"GET-INFO-COND", data:code
    }).subscribe(result => {
      if (!result.error) {
        this.infoCond = result.data
      } else {
        this.toastr.error(result.msg);
      }
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
    });
  }

  processLogin(){
     this.spinner.show();
     this.suscritions[1] = this.connectHttp.post({
      url:"general", params:"LOGIN", data:this.formLogin.value
    }).subscribe(result => {
      if (!result.error) {
        localStorage.setItem("tokenUser", result.data);
        this.toastr.success(result.msg);
        this.router.navigate(["../home-owner"], {relativeTo: this.activateRoute});
      } else {
        this.toastr.error(result.msg);
      }
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
    });
  }

}
