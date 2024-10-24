import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  intervalID: any;
  time = 300;
  // minutes = this.time / 60;
  // seconds = this.time % 60;
  formattedTime = '5:00';

  buttonLabel = 'Start';
  isTimerRunning = false;
  hasStarted = false;

  handleAction() {
    if (!this.hasStarted) {
      this.start();
      this.buttonLabel = 'Pause';
      this.hasStarted = true;
      this.isTimerRunning = true;
    } else {
      if (!this.isTimerRunning) {
        this.Resume();
        this.buttonLabel = 'Pause';
        this.isTimerRunning = true;
      } else {
        this.Pause();
        this.buttonLabel = 'Resume';
        this.isTimerRunning = false;
      }
    }
  }

  start() {
    this.intervalID = setInterval(() => {
      this.time = this.time - 1;
      // console.log(this.time);
      let minutes = Math.floor(this.time / 60);
      let seconds = this.time % 60;
      // console.log(Math.floor(this.time / 60));
      if (this.time === 0) {
        clearInterval(this.intervalID);
        this.isTimerRunning = false;
        this.hasStarted = false;
        this.buttonLabel = 'Start';
      }
      this.formattedTime =
        minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }, 1000);
  }
  Pause() {
    clearInterval(this.intervalID);
  }
  Resume() {
    if (this.time === 0) {
      clearInterval(this.intervalID);
    } else this.start();
  }

  onReset() {
    clearInterval(this.intervalID);
    this.time = 300;
    this.formattedTime = '5:00';
    this.isTimerRunning = false;
    this.hasStarted = false;
    this.buttonLabel = 'Start';
  }
}
