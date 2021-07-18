import { OnInit } from "@angular/core"
import { Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      console.log('Check route resolver data')
      this.users=data.users;
      console.log(data);

    })
  }

}
