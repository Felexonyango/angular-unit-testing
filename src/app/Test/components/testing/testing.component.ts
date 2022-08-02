import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/Test.model';
import { TestingService } from '../../service/testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

 posts:Ipost[]=[]

  

  constructor(private testservice:TestingService) { }

  ngOnInit(): void {
   this.getpost()
  }

  getpost(){
    this.testservice.getpost().subscribe(data=>{
      this.posts=data
      console.log(this.posts)
    }
    )
  }


}
