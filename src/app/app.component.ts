import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Author: DaiDH
 */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quarterList = ['Q1', 'Q2', 'Q3', 'Q4'];
  dropdownSettings = {
    singleSelection: false,
    idField: 'quarterId',
    textField: 'title',
    selectAllText: 'Select All',
    unSelectAllText: 'Clear selection',
    itemsShowLimit: 4,
    allowSearchFilter: false,
  };
  selectedQuarterList: string[] = [];
  onItemSelect(event: any, checked: boolean) {
    if (this.selectedQuarterList.length > 1) {
      const value=this.quarterList.filter(x=>this.selectedQuarterList.indexOf(x)>=0)
      let first = this.quarterList.findIndex((x) => x == value[0]);
      let last = this.quarterList.findIndex(
        (x) => x == value[value.length - 1]
      );
      if (last - first + 1 > value.length && !checked) {
        const index = this.quarterList.findIndex((x) => x == event);
        if (index < this.quarterList.length / 2) {
          first = index + 1;
        } else
          last =index-1;
      }
      this.selectedQuarterList = this.quarterList.filter(
        (_, index) => index >= first && (last < 0 || index <= last)
      );
    }


  }
}
