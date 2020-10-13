import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginInputModel } from '@core/models/loginInputModel.model';

@Component({
  selector: 'app-logi',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginsComponent implements OnInit {
  @Input() imagen: string;
  @Input() model: LoginInputModel;
  @Output() loginClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  loginOnClick(){
    this.loginClicked.emit();
  }
}
