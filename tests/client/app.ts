import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: '<h1>Working!</h1><p>{{greeting}}, World!</p>'
})
class App {
  constructor() {
    this.greeting = 'Hello';
  }
}

bootstrap(App);