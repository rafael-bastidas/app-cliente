import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericService } from 'src/app/servicios/generic.service';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.scss']
})
export class RegisterOwnerComponent implements OnInit {

  suscritions: Subscription[] = []
  
  formRegister: FormGroup = new FormGroup({
    inputNApto: new FormControl(''),
    inputNCompleto: new FormControl(''),
    inputDIdentificacion: new FormControl(''),
    inputTelefono2: new FormControl(''),
    inputCorreo: new FormControl(''),
    inputContasena: new FormControl(''),
    CODIGO_CONDOMINIO: new FormControl('')
  })
  
  constructor(private router:Router, private spinner: NgxSpinnerService,
    private toastr: ToastrService, private connectHttp: GenericService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formRegister.get('CODIGO_CONDOMINIO')?.setValue(this.activateRoute.snapshot.paramMap.get('id'))
  }

  showSuccess() {
    this.spinner.show();
    this.suscritions[0] = this.connectHttp.post({
      url:"general", params:"REGISTER-USER", data:this.formRegister.value
    }).subscribe(result => {
      if (!result.error) {
        this.toastr.success(result.msg);
        this.router.navigate([result.data.concat("/login")])
      } else {
        this.toastr.error(result.msg);
      }
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
    });
  }

}
