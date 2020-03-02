import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/authen/services/login.service';
import { switchMap,map,mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

 user:any;
  constructor(private login:LoginService) { }

  ngOnInit() {
    this.login.getCurrentUser()
              .pipe(
                switchMap(user=>{
                  console.log(user);
                  if(!user) return 'e';
                    return  this.login.getCurrentUserDb();
                }),
                map(user=>user)
              )
              .subscribe(user=>{
                if(user!='e') this.user=user
                else
                this.user=null;
                
              },erreur=> console.log)
            
                
  }
  
  logout()
  {
this.login.logoutWithGoogle();
  }

}
