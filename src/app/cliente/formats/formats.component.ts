import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formats',
  templateUrl: './formats.component.html',
  styleUrls: ['./formats.component.scss']
})
export class FormatsComponent implements OnInit {

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  showSuccess() {
    this.toastr.success('Solicitud cargada exitosamente!');
  }

}
