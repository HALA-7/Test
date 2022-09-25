import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserservService } from '../../services/userserv.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any[] = [];
  ids: any[] = [];
  title: string = '';
  constructor(private service: UserservService) {}

  ngOnInit(): void {
    this.getusers();
    this.getIds();
  }

  getusers() {
    this.service.getAllUsers().subscribe((result: any) => {
      this.users = result;
    });
  }
  getIds() {
    this.service.getIduser().subscribe((result: any) => {
      this.ids = result;
    });
  }

  filterUserById(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getIds : this.getOneId(value);
  }
  getOneId(keyword: number) {
    this.service.getUserById(keyword).subscribe((result: any) => {
      this.users = result;
    });
  }
}
