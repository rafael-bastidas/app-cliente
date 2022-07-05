import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericService } from 'src/app/servicios/generic.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  suscritions: Subscription[] = []
  
  formRegister: FormGroup = new FormGroup({
    inputNombre: new FormControl(''),
    inputUbicacion: new FormControl(''),
    inputRIF: new FormControl(''),
    inputTotalAptos: new FormControl(''),
    inputTelefonoC: new FormControl(''),
    inputCorreoC: new FormControl(''),
    inputRRSS: new FormControl(''),
    inputNCompleto: new FormControl(''),
    inputDIdentificacion: new FormControl(''),
    inputTelefono2: new FormControl(''),
    inputCorreo: new FormControl(''),
    inputContasena: new FormControl('')
  })

  constructor(private router:Router, private spinner: NgxSpinnerService, private toastr: ToastrService, private connectHttp: GenericService) {}

  ngOnInit(): void {
  }

  showSuccess() {
    this.spinner.show();
    this.suscritions[0] = this.connectHttp.post({
      url:"general", params:"REGISTER-ADMIN", data:this.formRegister.value
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
