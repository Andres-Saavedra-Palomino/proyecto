import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


	registroForm: FormGroup
	constructor(private router: Router) { }

	ngOnInit() {
		this.registroForm = new FormGroup({
			name: new FormControl(null, Validators.required),
			user: new FormControl(null, Validators.required),
			pass: new FormControl(null, Validators.required),
		})
	}

	registrarUsuario() {
		this.router.navigate(["/login"])
	}

}
