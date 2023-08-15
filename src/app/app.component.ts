import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator';

  calValue: number = 0;
  FuncT: any = 'NaN';

  onClick(val: string, type: any) {
    if (type == 'number') {
      this.onClicknumber(val);
    } else if (type == 'function') {
      this.onClickfunction(val);
    }
  }

  calnumber: string = 'noValue';

  onClicknumber(val: string) {
    if (this.calnumber !== 'noValue') {
      this.calnumber = this.calnumber + val;
    } else {
      this.calnumber = val;
    }

    this.calValue = parseFloat(this.calnumber);
  }

  firstnumber: number = 0;
  secondnumber: number = 0;

  onClickfunction(val: string) {
    if (val == 'c') {
      this.clearAll();
    } else if (this.FuncT == 'NaN') {
      this.firstnumber = this.calValue;
      this.calValue = 0;
      this.calnumber = 'noValue';
      this.FuncT = val;
    } else if (this.FuncT !== 'NaN') {
      this.secondnumber = this.calValue;
      this.calculateValue(val);
    }
  }

  calculateValue(val: string) {
    if (this.FuncT == '+') {
      const Total = this.firstnumber + this.secondnumber;
      this.totalValue(Total, val);
    }
    if (this.FuncT == '-') {
      const Total = this.firstnumber - this.secondnumber;
      this.totalValue(Total, val);
    }
    if (this.FuncT == '*') {
      const Total = this.firstnumber * this.secondnumber;
      this.totalValue(Total, val);
    }
    if (this.FuncT == '/') {
      const Total = this.firstnumber / this.secondnumber;
      this.totalValue(Total, val);
    }
    if (this.FuncT == '%') {
      const Total = this.firstnumber % this.secondnumber;
      this.totalValue(Total, val);
    }
  }

  totalValue(Total: number, val: string) {
    this.calValue = Total;
    this.firstnumber = Total;
    this.secondnumber = 0;
    this.calnumber = 'noValue';
    this.FuncT = val;
    if (val == '=') {
      this.onEqualpress();
    }
  }

  onEqualpress() {
    this.firstnumber = 0;
    this.secondnumber = 0;
    this.FuncT = 'NaN';
    this.calnumber = 'noValue';
  }

  clearAll() {
    this.firstnumber = 0;
    this.secondnumber = 0;
    this.calValue = 0;
    this.FuncT = 'NaN';
    this.calnumber = 'noValue';
  }
}
