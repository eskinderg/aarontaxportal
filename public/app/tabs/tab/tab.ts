import { Component } from 'angular2/core';
import {Tabs} from '../tabs';
import {HeroComponent} from '../../hero/hero';
import {FileComponent} from '../../app/file/file';

@Component({
  selector: 'tab',
  inputs: [
    'title:tab-title',
    'active'
  ],
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
  directives:[HeroComponent,FileComponent]
})
export class Tab {
  title: string;
  active = this.active || false;

  constructor(tabs: Tabs){

   tabs.addTab(this);

  }
}
