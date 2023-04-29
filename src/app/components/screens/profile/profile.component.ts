import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: string
  password: string

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  login() {
    const { username, password } = this

    this.http
      .post('http://localhost:3000/login', { username, password })
      .subscribe(
        res => {
          // Indicate that the login attempt was successful.
          console.log('Login successful')
          // this.router.navigate(['/'])
        },
        err => {
          // Indicate that the login attempt failed.
          console.log(err)
        }
      )
  }
}
