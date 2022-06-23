import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  showSuccess() {
    this.toastr.success('Cambios guardados exitosamente!');
  }
  
}
