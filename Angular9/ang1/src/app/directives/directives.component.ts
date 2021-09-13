import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
  <h2 *ngIf="display; then thenBlock; else elseBlock">
    Welcome to Angular9 App
  </h2>

  <ng-template #thenBlock>
    <h2>This is from the THEN Template</h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>This is from the ELSE Template</h2>
  </ng-template>
  `,
  styles: []
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  display = false;

  ngOnInit(): void {
  }

}
