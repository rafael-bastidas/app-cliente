import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  showSuccess() {
    this.toastr.success('Pago enviado exitosamente!');
  }

}
