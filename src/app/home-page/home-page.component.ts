import { Component, OnInit } from '@angular/core';
import {AF} from "../providers/af";
import {FirebaseListObservable} from "angularfire2/database";
import { ImgService } from "../providers/img.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ ImgService ]
})
export class HomePageComponent implements OnInit {

    first_option: Object;
    second_option: Object;

    constructor(public afService: AF, private imgService: ImgService) { }

    ngOnInit() {
        this.imgService
            .getImgList()
            .subscribe( (res: Object[]) => {
                let randomImgOne = Math.floor(Math.random() * 1000) + 1;
                let randomImgTwo = Math.floor(Math.random() * 1000) + 1;
                this.first_option = res[randomImgOne];
                this.second_option = res[randomImgTwo];


            });
    }

    public sendImage(event, url){
        this.afService.saveImage(url);
        location.reload();
    }

}
