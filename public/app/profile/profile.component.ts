import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroComponent} from '../hero/hero';
import {Tabs} from '../tabs/tabs';
import {Tab} from '../tabs/tab/tab';
import {FileComponent} from '../app/file/file';

// templateUrl:'app/html/app.html',

@Component({
    selector: 'profile',
    templateUrl:'app/profile/profile.html',
    directives: [HeroComponent,Tabs,Tab,FileComponent,ROUTER_DIRECTIVES]
})
/*@RouteConfig([
  {path:'/file', name: 'File', component: FileComponent},
  {path:'/hero', name: 'Hero', component: HeroComponent}
])*/
export class ProfileComponent
{

}
