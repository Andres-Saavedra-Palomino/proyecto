import { Component, OnInit } from '@angular/core';


declare var FB: any;
@Component({
	selector: 'app-log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {



	constructor() { }

	ngOnInit() {
		(window as any).fbAsyncInit = function () {
			FB.init({
				appId: '2208575636108416',
				cookie: true,
				xfbml: true,
				version: 'v4.0'
			});
			FB.AppEvents.logPageView();
		};

		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) { return; }
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

	loginWithFB() {
		console.log("submit login to facebook");

		FB.login((response) => {
			console.log('submitLogin', response);

			if (response.authResponse) {

				//login success
				//login success code here
				//redirect to home page
			}
			else {
				console.log('User login failed');
			}
		});

	}
}
