import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	//onCambioEstado: Subject<boolean> = new Subject<boolean>()

	constructor(private router: Router) { }

	estaLogueado(): boolean {
		return sessionStorage.getItem("usuarioEstado") ? true : false
	}
	login(user: string, pass: string) {
		if (user == "dios" && pass == "123") {
			sessionStorage.setItem("usuarioEstado", "true")
			console.log("sesion Storage", sessionStorage.usuarioEstado)
			this.router.navigate(["/aulas", "calendar"])
			//this.onCambioEstado.next(sessionStorage.usuarioEstado)
		} else {
			sessionStorage.setItem("usuarioEstado", "false")
		}

	}
	logout() {
		sessionStorage.clear()
		this.router.navigate(["/home"])
		//this.onCambioEstado.next(sessionStorage.usuarioEstado)
	}
}
