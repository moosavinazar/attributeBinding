import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCorrect: boolean = false;

  isModified: boolean = true;
  isCancelled: boolean = true;

  styles = {};
  classes = {};

  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '8rem',
      'color': 'red'
    };

    this.classes = {
      'big-font-size': this.isModified,
      'cancelled-color': this.isCancelled
    }
  }
}
