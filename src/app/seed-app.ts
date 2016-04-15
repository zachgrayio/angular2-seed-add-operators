import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';


import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/distinct'
// relative paths to node_modules don't work any better:
//import '../../node_modules/rxjs/add/operator/distinct'

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})
@RouteConfig([
  { path: '/home',       component: Home,        name: 'Home', useAsDefault: true },
  { path: '/about',      component: About,       name: 'About' },
  { path: '/github/...', component: RepoBrowser, name: 'RepoBrowser' },
])
export class SeedApp {

  constructor() {
    Observable.of(1,2,3,4,4,5,5,6)

      .distinct()
      //ERROR in [default] <path>/angular2-seed-add-operators/src/app/seed-app.ts:31:7
      //Property 'distinct' does not exist on type 'Observable<number>'.

      .subscribe(n => console.log(n));
  }

}
