import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

	constructor(private autenticacionService: AuthenticationService, private router: Router) { }

	canActivate() {
		/* if (!this.autenticacionService.estaLogueado()) {
			this.router.navigate(["/login"])
			return false
		} */
		return true
	}
}
