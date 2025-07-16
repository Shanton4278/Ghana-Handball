import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'ghana-handball';

  constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle("Welcome to Handball Association of Ghana");
  this.meta.updateTag({ name: 'description', content: 'View moments from our handball events and games.' });
}

}
