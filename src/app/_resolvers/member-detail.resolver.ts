import { Observable } from 'rxjs/Observable';
import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_model/User";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class MemberDetailResolver implements Resolve<User>{
    /**
     *
     */
    constructor(private userService : UserService, private router : Router, 
        private alertify: AlertifyService) {
       
        
    }
    resolve(route : ActivatedRouteSnapshot) : Observable<User>{
            return this.userService.getUser(route.params['id']).catch( error => {
                this.alertify.error("Problem retrieving data");
                this.router.navigate(['/members']);
                return Observable.of(null);

            })

    }

    
}