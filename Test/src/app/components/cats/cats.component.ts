import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { ListOwnersPetsService } from "../../services/list-owners-pets.service";
import { OwnersModule } from "../../modules/owners/owners.module";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  OwnersModule: OwnersModule[];

  constructor(private router: Router, private ListOwnersPetsService: ListOwnersPetsService) { }

  ngOnInit() {
    this.ListOwnersPetsService.getOwners()
      .subscribe(data => {
        this.OwnersModule = data;
        console.log(this.OwnersModule);
      });
  }

}