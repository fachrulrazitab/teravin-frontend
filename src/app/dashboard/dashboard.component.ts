import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { User } from '../common/user';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[];
  newUser: User = new User();
  
  constructor(private dashboardService: DashboardService) { 

  }

  ngOnInit() {
   this.dashboardService.getTeamMembersSummary().subscribe(
     (respone: User[]) => {
       this.users = respone;
     }
   );
  }

  add(){
    let row = document.createElement('div');  
      row.className = 'row';
      row.innerHTML = `
      <br>
      <input type="text">`;
      document.querySelector('.showInputField').appendChild(row);
  }
  
  onSaveClick(){
    this.dashboardService.insertUser(this.newUser).subscribe((response) => {
      this.users.push(this.newUser);
    }, (error) => {
      console.log(error);
    });
  }

}
