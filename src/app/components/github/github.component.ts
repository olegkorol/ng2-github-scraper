import { Component, OnInit } from '@angular/core';
import {FetchGithubService} from "../../services/fetch-github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [FetchGithubService]
})
export class GithubComponent implements OnInit {
  username: string;
  user: string;
  repos: any;
  errorMessage: string;

  constructor(private fetchGithubService:FetchGithubService) {
  }

  ngOnInit() {
    console.log('component: initialized...')
  }

  search() {
    console.log(this.username);
    this.user = '';
    this.errorMessage = '';
    this.repos = '';
    
    this.fetchGithubService.getUser(this.username)
        .subscribe(
            fetchedUser => this.user = fetchedUser,
            error => this.errorMessage = <any>error
        );
    this.fetchGithubService.getRepos(this.username)
        .subscribe(
            fetchedRepos => this.repos = fetchedRepos,
            error => this.errorMessage = <any>error
        );
  }
}
