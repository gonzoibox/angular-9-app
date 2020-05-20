import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Server-1', 'Server-2'];
  ifShowDetails = false;
  detailsLogArray = [];
  numberOfDetailsClicks = 0;
  clicks = false;
  userName = '';

  constructor() {
    setTimeout(() => {this.allowNewServer = true}, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  isNameEmpty() {
    return this.userName == '' ? true : false; 
  }

  resetUserName() {
    this.userName = '';
  }

  showDetails() {
    this.ifShowDetails = !this.ifShowDetails;
    this.numberOfDetailsClicks = this.numberOfDetailsClicks + 1;
    this.detailsLogArray.push(this.numberOfDetailsClicks);
    if(this.numberOfDetailsClicks > 5) {this.clicks = true}
  }

}
