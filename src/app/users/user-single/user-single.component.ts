import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">

        <div class="card" *ngIf="user">
          <figure class="image is-128x128">
            <img class="is-rounded" [src]="user.avatar_url">
          </figure>
            <h2 class="title">{{ user.login }}</h2>
        </div>

      </div> 
    </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {
  user;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    // grab the username out of the url
    this.route.params.subscribe(parms => {
      const username = parms['username'];

      //use the userservice to get data from github api
      this.userService
        .getUser(username)
        .subscribe(user => this.user = user);
    });
  }
}
