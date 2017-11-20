import { FeaturedUsersService } from './../services/featured-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured-chef',
  templateUrl: './featured-chef.component.html',
  styleUrls: ['./featured-chef.component.css']
})
export class FeaturedChefComponent implements OnInit {

  constructor(private featuredUsersService: FeaturedUsersService) {}
  featuredUsers = [];

  getFeaturedUsers() {
    this.featuredUsersService.getAllUsers()
    .subscribe(
      data => this.featuredUsers = data);
  }

  ngOnInit() {
    this.getFeaturedUsers();
  }

}
