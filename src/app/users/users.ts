import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user-service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users.html',
})
export class Users implements OnInit {
  users: any[] = [];
  selectedUser: any = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  edit(user: any) {
    this.selectedUser = { ...user };
  }

  async update() {
    const ok = confirm('Are you sure you want to update this user?');
    if (!ok) return;

    await this.userService.updateUser(this.selectedUser.id, {
      email: this.selectedUser.email,
      role: this.selectedUser.role,
    });

    alert('User updated successfully');
    this.selectedUser = null;
  }

  async delete(user: any) {
    const ok = confirm(`Are you sure you want to delete ${user.email}?`);
    if (!ok) return;

    await this.userService.deleteUser(user.id);
    alert('User deleted successfully');
  }
}
