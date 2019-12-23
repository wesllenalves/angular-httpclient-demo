import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { faEye, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  faEye = faEye;
  faPenSquare = faPenSquare;
  faTrash = faTrash;
  Users;
    
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((data)=>{
      console.log(data);
      this.Users = data;
    });
     
  }

}
