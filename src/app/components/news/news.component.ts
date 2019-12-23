import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NewsComponent implements OnInit {
  faTrash = faTrash;
  faPenSquare = faPenSquare;
  Users;
  private deletarUser: string;
  private deletarUserId: number;
    
  constructor(private apiService: ApiService, config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.apiService.getUsers().subscribe((data)=>{
      console.log(data);
      this.Users = data;
    });
     
  }

  open(content, user, deletarUserId) {
    this.modalService.open(content);
    this.deletarUser = user;
    this.deletarUserId = deletarUserId;
  }

  deletar(deletarUserId){
    console.log(deletarUserId);
    
  }

}
