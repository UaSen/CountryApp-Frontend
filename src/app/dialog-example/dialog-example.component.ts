import { Component, OnInit, Inject} from '@angular/core';
import * as module from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {


  constructor(@Inject(module.MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
