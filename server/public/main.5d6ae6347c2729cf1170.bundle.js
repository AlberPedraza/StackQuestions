webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},1:function(e,t){},"4uzM":function(e,t){e.exports='<div *ngIf="!auth.user">\n  <div class="jumbotron">\n    <h1 class="display-3">Welcome to Stack questions</h1>\n\n    <h3 class="lead">Login</h3>\n    <hr class="my-4">\n  </div>\n<form>\n  <div class="form-group">\n    <label class="col-form-label col-form-label-lg" for="inputLarge">Username</label>\n    <input class="form-control form-control-lg" type="text" [(ngModel)]="username" name="username" placeholder="" id="inputLarge">\n  </div>\n  <div class="form-group">\n    <label class="col-form-label col-form-label-lg" for="inputLarge">Password</label>\n    <input class="form-control form-control-lg" type="password" [(ngModel)]="password" name="password" placeholder="" id="inputLarge">\n  </div>\n  <button class="btn btn-primary btn-lg" (click)="login(username,password)"> login </button>\n</form>\n\n\n<p class="error"> {{ error }} </p>\n<hr class="my-4">\n<a class="btn" routerLink="/signup"><h3>signup</h3></a>\n<hr class="my-4">\n</div>\n<div *ngIf="auth.user">\n  <div class="jumbotron">\n    <h1 class="display-3">Welcome {{auth.user.username}}</h1>\n    <hr class="my-4">\n  </div>\n  <hr class="my-4">\n<a href="#" class="btn btn-outline-primary" routerLink="/profile"><h2>Your profile</h2></a>\n<hr class="my-4">\n  <br>\n</div>\n'},"8BBg":function(e,t){e.exports='<hr class="my-4">\n<div class="jumbotron">\n  <h1 class="display-3">Events</h1>\n  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class="my-4">\n</div>\n\n<hr class="my-4">\n\n<div class="container">\n\n  <div class="row justify-content-start">\n\n    <div class=" col-4" *ngFor="let ev of events">\n      <div class="card">\n\n        <div class="card-header"></div>\n        <div class="card-body">\n          <h4 class="card-title">{{ev.name}}</h4>\n          <p class="card-text">{{ev.descriptions}}</p>\n          <p class="card-text"><span>Participants: </span>{{ev.participants.length}}</p>\n          <p class="card-text"><strong>Tag: </strong>{{ev.tags}}</p>\n          <a href="#" class="btn btn-primary" routerLink="/events/{{ev._id}}">See this</a>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n'},BwoT:function(e,t){e.exports='<div *ngIf="!conferences">\n  <p class="error"> {{ error }} </p>\n</div>\n<hr class="my-4">\n<div class="container">\n  <h1>Conference:</h1>\n  <div class="row justify-content-start">\n\n    <div class=" col-6">\n      <hr class="my-4">\n      <div class="card text-white bg-primary ">\n\n        <div class="card-header"></div>\n        <div class="card-body">\n          <h4 class="card-title"><h1>{{conferences.name}}</h1></h4>\n          <p class="card-text">{{conferences.descriptions}}</p>\n          <p class="card-text"><strong>{{conferences.categories}}</strong></p>\n          <p class="card-text"><strong>Creator:</strong> {{conferences.creator.username}}</p>\n\n        </div>\n\n      </div>\n      <hr class="my-4">\n      <div class="col-6" *ngIf="auth.user.username == conferences.creator.username">\n        <button type="button" class="btn btn-secondary" routerLink="/events/{{conferences._id}}/signup"><h3>Create event</h3></button>\n      </div>\n    </div>\n  </div>\n  <hr class="my-4">\n\n  <ol class="breadcrumb">\n    <li class="breadcrumb-item active">\n      <h2>Conference events</h2></li>\n  </ol>\n\n  \x3c!-- <div class="" *ngFor="let a of conferences.events">\n<div><h3>{{a.name}}</h3></div>\n<div class="">\n  <strong>participants:</strong> <h4>{{a.participants.length}}</h4>\n</div>\n  <div><strong>Descriptions:</strong>\n    <p>{{a.descriptions}}</p>\n   </div>\n  <button type="button" class="btn btn-outline-primary" routerLink="/events/{{a._id}}">see event</button>\n  <hr>\n</div>\n --\x3e\n\n\n  <div class="row justify-content-start">\n\n    <div class=" col-4" *ngFor="let a of conferences.events">\n      <div class="card">\n\n        <div class="card-header">{{a.tags}}</div>\n        <div class="card-body">\n          <h4 class="card-title">{{a.name}}</h4>\n          <p class="card-text">{{a.descriptions}}</p>\n          <p class="card-text"><span>Participants: </span>{{a.participants.length}}</p>\n          <a href="#" class="btn btn-primary" routerLink="/events/{{a._id}}">See this</a>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n<hr class="my-4">\n      <button type="button" class="btn btn-primary" routerLink="/conferences"><h3>see conferences</h3></button>\n<hr class="my-4">\n'},ByJ9:function(e,t){e.exports='<hr class="my-4">\n<h2> Event: </h2>\n\n<div *ngIf="!events">\n  <p class="error"> {{ error }} </p>\n</div>\n\n<div class="" *ngIf="events">\n  <div class="row justify-content-start">\n\n    <div class=" col-8">\n      <hr class="my-4">\n      <div class="card text-white bg-primary ">\n\n        <div class="card-header"></div>\n        <div class="card-body">\n          <h1 class="card-title">{{events.name}}</h1>\n          <p class="card-text"><strong>{{events.categories}}</strong></p>\n          <p class="card-text">{{events.descriptions}}</p>\n          <div class="card-text">  <strong>Participants:</strong> <h3>{{events.participants.length}}</h3> </div>\n\n        </div>\n\n      </div>\n      <hr class="my-4">\n    </div>\n  </div>\n  <button type="button" class="btn btn-outline-primary" name="button" (click)="followEventBtn(events._id)">Follow the event</button>\n\n\x3c!-- <a href="#" [routerLink]="[\'/events/\'+conf._id+\'/edit\']">Edit your profile</a> --\x3e\n\n</div>\n<br>\n<br>\n\n<app-questions-chat *ngIf="events" [events]="events"></app-questions-chat>\n'},Byax:function(e,t){e.exports='<h2> Event signup </h2>\n\n<div>\n  <form (ngSubmit)="submitForm(myForm)" #myForm="ngForm">\n    <label> Name </label>\n    <input type="text" [(ngModel)]="name" name="name" required/>\n    <br>\n    <label> Descriptions </label>\n    <input type="descriptions" [(ngModel)]="descriptions" name="descriptions" required/>\n    <br>\n    <button type="submit"> signup </button>\n      <p class="error"> {{ error }} </p>\n  </form>\n</div>\n'},"CT/g":function(e,t){e.exports='<nav class="navbar navbar-expand-lg navbar-light bg-light">\n  <div class="container">\n  <a class="navbar-brand" href="#" routerLink="/">Stack Question</a>\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n\n  <div class="collapse navbar-collapse" id="navbarColor03">\n    <ul class="navbar-nav mr-auto">\n      <li class="nav-item">\n        <a class="nav-link" href="#" routerLink="/conferences">Conferences</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#" routerLink="/events">Events</a>\n      </li>\n\n    </ul>\n    <div class="dropdown">\n  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      <span *ngIf="auth.user">Hi, {{auth.user.username}}</span>\n      <span *ngIf="!auth.user">into to Stack questions</span>\n  </button>\n  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n    <a *ngIf="auth.user" class="dropdown-item" href="#" routerLink="/profile">My profile</a>\n    <a *ngIf="!auth.user" class="dropdown-item" href="#" routerLink="/login">Login</a>\n    <a *ngIf="!auth.user" class="dropdown-item" href="#" routerLink="/signup">Signup</a>\n  </div>\n</div>\n  </div>\n\n\n</div>\n</nav>\n'},G5Tb:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"span.badge.badge-primary.badge-pill{font-size:1.5em}button.page-item.page-link{border:2px solid}.list-group ul li{list-style:none}",""]),e.exports=e.exports.toString()},I6vk:function(e,t){e.exports='<div class="container ">\n  <div class="jumbotron">\n    <h1 class="display-3">Signup</h1>\n    <h2 class="display-4">conferences</h2>\n  </div>\n\n\n<form (ngSubmit)="submitForm(myForm)" #myForm="ngForm">\n\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Name</label>\n    <input type="text" [(ngModel)]="name" name="name" class="form-control" placeholder="" required />\n  </div>\n\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Descriptions</label>\n    <input [(ngModel)]="descriptions" name="descriptions" class="form-control" placeholder="" required />\n  </div>\n\n\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Categories</label>\n    <input [(ngModel)]="categories" name="categories" class="form-control" placeholder="" />\n  </div>\n\n  <button class="btn btn-primary btn-lg" type="submit"> signup </button>\n    <p class="error"> {{ error }} </p>\n</form>\n</div>\n'},NK3r:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},PjwQ:function(e,t){e.exports='<div class="signup_user">\n\n<div class="jumbotron">\n  <h1 class="display-3">Signup</h1>\n  <h2 class="display-4">User</h2>\n</div>\n\n<div *ngIf="auth.user">\n  <h2>Welcome {{auth.user.username}}</h2>\n</div>\n<div *ngIf="!auth.user">\n<form (ngSubmit)="submitForm(myForm)" #myForm="ngForm">\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Username</label>\n    <input type="text" [(ngModel)]="username" name="username" class="form-control" placeholder="" required />\n  </div>\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Password</label>\n    <input type="password" [(ngModel)]="password" name="password" class="form-control" placeholder="" required />\n  </div>\n\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">name</label>\n    <input type="password" [(ngModel)]="name" name="name" class="form-control" placeholder="" />\n  </div>\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Email</label>\n    <input type="email" [(ngModel)]="email" name="email" class="form-control" placeholder="" />\n  </div>\n\n<br>\n  <button type="submit" class="btn btn-primary btn-lg"> signup </button>\n    <p class="error"> {{ error }} </p>\n</form>\n</div>\n\n<div *ngIf="auth.user">\n  <hr class="my-4">\n<a href="#" class="btn btn-outline-primary" routerLink="/profile"><h2>Your profile</h2></a>\n<hr class="my-4">\n</div>\n</div>\n'},QYZy:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},QtsI:function(e,t){e.exports='<ol class="breadcrumb">\n  <li class="breadcrumb-item active">\n    <h2>Questions</h2>\n  </li>\n</ol>\n\n<ul class="list-group">\n  <li *ngFor="let mInit of questions" class="list-group-item d-flex justify-content-between align-items-center">\n    <ul>\n      <li><strong>{{mInit.owner.username}}: </strong></li>\n      <li>{{mInit.message}}</li>\n      <hr class="my-4">\n      <li><button type="button" class="page-item page-link" (click)="upQuestions(mInit)" name="button">+1</button></li>\n    </ul>\n    <ul>\n      <li><span class="badge badge-primary badge-pill">{{mInit.score}}</span></li>\n    </ul>\n  </li>\n</ul>\n\n<ul class="list-group">\n  <li *ngFor="let m of questions_s.messages" class="list-group-item d-flex justify-content-between align-items-center">\n    <ul>\n      <li><strong>{{m.user}}: </strong></li>\n      <li>{{m.message}}</li>\n      <hr class="my-4">\n      <li><button type="button" class="page-item page-link" (click)="upQuestions(m)" name="button">+1</button></li>\n    </ul>\n    <ul>\n      <li><span class="badge badge-primary badge-pill">{{m.score}}</span></li>\n    </ul>\n\n  </li>\n</ul>\n\n<hr class="my-4">\n<div class="form-group">\n  <input class="form-control form-control-lg" type="text" placeholder="Here your question" [(ngModel)]="m">\n  <hr class="my-4">\n  <button class="btn btn-primary" (click)="sendContent(m); m=\'\'"> <h3>Send Message</h3> </button>\n</div>\n'},"S+2c":function(e,t){e.exports="<p>\n  conferences-edit works!\n</p>\n"},UF1j:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},YuZA:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="YuZA"},YxvK:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},"bW/2":function(e,t){e.exports='<div *ngIf="auth.user">\n  <div class="container ">\n    <div class="jumbotron">\n      <h1 class="display-3">Edit</h1>\n      <h2 class="display-4">Your profile, {{auth.user.username}}</h2>\n    </div>\n\n<form (ngSubmit)="submitForm(myForm)" #myForm="ngForm">\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Username</label>\n    <input type="text" [(ngModel)]="username" name="username" class="form-control" placeholder="" required />\n  </div>\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Password</label>\n    <input type="password" [(ngModel)]="password" name="password" class="form-control" placeholder="" required />\n  </div>\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Name</label>\n    <input type="text" [(ngModel)]="name" name="name" class="form-control" placeholder="" required />\n  </div>\n  <div class="form-group">\n    <label class="col-form-label" for="inputDefault">Email</label>\n    <input type="email" [(ngModel)]="email" name="email" class="form-control" placeholder="" required />\n  </div>\n  <button class="btn btn-primary btn-lg" type="submit"> signup </button>\n    <p class="error"> {{ message }} </p>\n</form>\n</div>\n</div>\n'},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("LMZF"),o=n("x8Hs"),s=n("RyBE"),i=n("0nO6"),a=n("TMwh"),c=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},l=function(){function e(){this.title="StackQuestions"}return e=c([Object(r.n)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]})],e)}(),u=n("UHIZ"),p=(n("GQSG"),n("HT7u"),n("U6yM")),f=!0,d="",h=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},m=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},g=d+"/api/user",b=function(){function e(e,t){this.http=e,this.router=t,this.options={withCredentials:!0},this.loginEvent=new r.v,this.isLoggedIn().subscribe()}return e.prototype.getUser=function(){return this.user},e.prototype.handleError=function(e){var t=e.json().message;return console.error(t),p.a.throw(e.json().message)},e.prototype.handleUser=function(e){return this.user=e,this.loginEvent.emit(this.user),this.user},e.prototype.listOneUser=function(e){var t=this;return this.http.get(g+"/"+e,this.options).map(function(e){return e.json()}).map(function(e){return t.handleUser(e)}).catch(function(e){return t.handleError(e)})},e.prototype.signup=function(e){var t=this;return this.http.post(g+"/signup",e.value,this.options).map(function(e){return e.json()}).map(function(e){return t.handleUser(e)}).catch(function(e){return t.handleError(e)})},e.prototype.edit=function(e){var t=this;return console.log("este es el id",this.user._id),console.log("entra aqu\xed",e.value.username),this.http.put(g+"/"+this.user._id+"/edit",e.value,this.options).map(function(e){return e.json()}).map(function(e){t.handleUser(e)}).catch(function(e){return t.handleError(e)})},e.prototype.login=function(e,t){var n=this;return console.log("Login with user:"+e+" and password "+t),this.http.post(g+"/login",{username:e,password:t},this.options).map(function(e){return e.json()}).map(function(e){return n.handleUser(e)}).catch(function(e){return n.handleError(e)})},e.prototype.logout=function(){var e=this;return this.http.get(g+"/logout",this.options).map(function(e){return e.json()}).map(function(t){return e.handleUser(null)}).catch(function(t){return e.handleError(t)})},e.prototype.isLoggedIn=function(){var e=this;return console.log(this.user),this.http.get(g+"/loggedin",this.options).map(function(e){return e.json()}).map(function(t){return e.handleUser(t)}).catch(function(t){return e.handleError(t)})},e=h([Object(r.A)(),m("design:paramtypes",[a.a,u.b])],e)}(),v=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},y=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(){function e(e){this.auth=e}return e.prototype.login=function(e,t){this.auth.login(e,t).subscribe()},e.prototype.logout=function(){this.auth.logout().subscribe()},e.prototype.ngOnInit=function(){},e=v([Object(r.n)({selector:"app-login",template:n("4uzM"),styles:[n("v8Xq")]}),y("design:paramtypes",[b])],e)}(),_=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},R=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(){function e(e,t){this.auth=e,this.router=t}return e.prototype.submitForm=function(e){var t=this;this.auth.signup(e).subscribe(function(e){return t.router.navigate(["/profile",e._id])})},e.prototype.logout=function(){this.auth.logout().subscribe()},e.prototype.ngOnInit=function(){},e=_([Object(r.n)({selector:"app-signup",template:n("PjwQ"),styles:[n("QYZy")]}),R("design:paramtypes",[b,u.b])],e)}(),O=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},w=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(){function e(e,t){this.auth=e,this.router=t}return e.prototype.submitForm=function(e){var t=this;this.auth.edit(e).subscribe(function(e){return t.router.navigate(["/profile"])})},e.prototype.ngOnInit=function(){},e=O([Object(r.n)({selector:"app-user-edit",template:n("bW/2"),styles:[n("NK3r")]}),w("design:paramtypes",[b,u.b])],e)}(),E=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},k=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(){function e(e){this.auth=e}return e.prototype.ngOnInit=function(){var e=this;this.auth.isLoggedIn().subscribe(function(t){return e.user=t})},e=E([Object(r.n)({selector:"app-user-profile",template:n("v6by"),styles:[n("lX1N")]}),k("design:paramtypes",[b])],e)}(),q=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},S=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},D=d+"/api/conferences",F=function(){function e(e,t){this.http=e,this.router=t,this.options={withCredentials:!0},this.loginEvent=new r.v}return e.prototype.handleError=function(e){var t=e.json().message;return console.error(t),p.a.throw(e.json().message)},e.prototype.handleConferences=function(e){return this.conferences=e,console.log("entrando a conferences"),console.log("esto es handle:",this.conferences),this.loginEvent.emit(this.conferences),this.conferences},e.prototype.getConferences=function(){var e=this;return this.http.get(""+D,this.options).map(function(e){return e.json()}).catch(function(t){return e.handleError(t)})},e.prototype.addEventForm=function(){var e=this;return console.log("addEventForm"),this.http.get(""+D,this.options).map(function(e){return e.json()}).catch(function(t){return e.handleError(t)})},e.prototype.listOneConferences=function(e){var t=this;return console.log("esto es listOneser---\x3e",this.conferences),this.http.get(D+"/"+e,this.options).map(function(e){return e.json()}).catch(function(e){return t.handleError(e)})},e.prototype.signup=function(e){var t=this;return this.http.post(D+"/signup",e.value,this.options).map(function(e){return e.json()}).catch(function(e){return t.handleError(e)})},e=q([Object(r.A)(),S("design:paramtypes",[a.a,u.b])],e)}(),M=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},L=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(){function e(e,t){this.conferences_s=e,this.router=t}return e.prototype.submitForm=function(e){var t=this;this.conferences_s.signup(e).subscribe(function(e){return t.router.navigate(["/conferences",e._id])})},e.prototype.ngOnInit=function(){},e=M([Object(r.n)({selector:"app-conferences-signup",template:n("I6vk"),styles:[n("YxvK")]}),L("design:paramtypes",[F,u.b])],e)}(),Q=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Y=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},U=function(){function e(){}return e.prototype.ngOnInit=function(){},e=Q([Object(r.n)({selector:"app-conferences-edit",template:n("S+2c"),styles:[n("iEEU")]}),Y("design:paramtypes",[])],e)}(),B=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},T=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},N=function(){function e(e,t,n){this.auth=e,this.route=t,this.conferences_s=n}return e.prototype.ngOnInit=function(){var e=this;this.route.params.subscribe(function(t){return e.conferences_s.listOneConferences(t.id).subscribe(function(t){return e.conferences=t})})},e=B([Object(r.n)({selector:"app-conferences-profile",template:n("BwoT"),styles:[n("iNvm")]}),T("design:paramtypes",[b,u.a,F])],e)}(),A=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Z=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},J=function(){function e(e){this.conferences_s=e}return e.prototype.ngOnInit=function(){var e=this;this.conferences_s.getConferences().subscribe(function(t){return e.conferences=t})},e=A([Object(r.n)({selector:"app-conferences-get",template:n("iZzV"),styles:[n("ePjq")]}),Z("design:paramtypes",[F])],e)}(),z=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},H=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},W=d+"/api/events",G=function(){function e(e,t){this.http=e,this.router=t,this.options={withCredentials:!0},this.loginEvent=new r.v}return e.prototype.handleError=function(e){var t=e.json().message;return console.error(t),p.a.throw(e.json().message)},e.prototype.handleEvents=function(e){return this.events=e,console.log("entrando a events"),console.log("esto es handle:",this.events),this.loginEvent.emit(this.events),this.events},e.prototype.getEvents=function(){var e=this;return console.log("getEvents"),this.http.get(""+W,this.options).map(function(e){return e.json()}).catch(function(t){return e.handleError(t)})},e.prototype.listOneEvents=function(e){var t=this;return this.http.get(W+"/"+e,this.options).map(function(e){return e.json()}).catch(function(e){return t.handleError(e)})},e.prototype.signup=function(e,t){var n=this;return console.log("id --\x3e",t),this.http.post(W+"/"+t+"/signup",e.value,this.options).map(function(e){return e.json()}).catch(function(e){return n.handleError(e)})},e.prototype.followEvent=function(e){var t=this;return console.log("idEvent services",e.idEvent),this.http.post(W+"/"+e.idEvent+"/follow",e,this.options).map(function(e){return e.json()}).catch(function(e){return t.handleError(e)})},e=z([Object(r.A)(),H("design:paramtypes",[a.a,u.b])],e)}(),K=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},X=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},V=function(){function e(e){this.events_s=e}return e.prototype.ngOnInit=function(){var e=this;console.log("entraaaaaaaaaaaaaa"),this.events_s.getEvents().subscribe(function(t){return e.events=t})},e=K([Object(r.n)({selector:"app-events-get",template:n("8BBg"),styles:[n("eQ1J")]}),X("design:paramtypes",[G])],e)}(),$=n("Un6q"),ee=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},te=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},ne=function(){function e(e,t,n,r){this.events_s=e,this.route=t,this.router=n,this._location=r}return e.prototype.ngOnInit=function(){},e.prototype.submitForm=function(e){var t=this;this.route.params.subscribe(function(n){return t.events_s.signup(e,n.idConference).subscribe(function(e){t.events=e,t.router.navigate(["/conferences/",n.idConference])})})},e.prototype.backClicked=function(){this._location.back()},e=ee([Object(r.n)({selector:"app-events-signup",template:n("Byax"),styles:[n("UF1j")]}),te("design:paramtypes",[G,u.a,u.b,$.f])],e)}(),re=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},oe=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},se=function(){function e(e,t){this.route=e,this.events_s=t}return e.prototype.ngOnInit=function(){var e=this;this.route.params.subscribe(function(t){return e.events_s.listOneEvents(t.id).subscribe(function(t){return e.events=t})})},e.prototype.followEventBtn=function(e){var t=this;this.events.idEvent=e,this.events_s.followEvent(this.events).subscribe(function(e){return t.events=e})},e=re([Object(r.n)({selector:"app-events-profile",template:n("ByJ9"),styles:[n("kyol")]}),oe("design:paramtypes",[u.a,G])],e)}(),ie=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:j},{path:"signup",component:x},{path:"profile",component:I},{path:"user/:id/edit",component:P},{path:"conferences",component:J},{path:"conferences/signup",component:C},{path:"conferences/:id/edit",component:U},{path:"conferences/:id",component:N},{path:"events",component:V},{path:"events/:idConference/signup",component:ne},{path:"events/:id",component:se}],ae=n("MjLF"),ce=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},le=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},ue=d,pe=ue+"/api/questions",fe=function(){function e(e,t){this.http=e,this.router=t,this.options={withCredentials:!0},this.messages=[],this.loginQuestion=new r.v,console.log("Created chat service"),this.socket=ae.connect(""+ue),this.socket.on("recibe-message",(function(e){console.log('Mensaje Recibido: "'+e.message+'"'),console.log("ON!",e),this.messages.push({user:e.name,message:e.message,score:0}),this.scoreQuestion={score:e.score}}).bind(this))}return e.prototype.handleError=function(e){var t=e.json().message;return console.error(t),p.a.throw(e.json().message)},e.prototype.handleQuestions=function(e){return this.questions=e,console.log("entrando a questions"),console.log("esto es handle:",this.questions),this.loginQuestion.emit(this.questions),this.questions},e.prototype.getQuestions=function(e){var t=this;return console.log("get-idEvents -----------\x3e ()",e),this.http.get(pe+"/"+e,this.options).map(function(e){return e.json()}).catch(function(e){return t.handleError(e)})},e.prototype.clearArray=function(){this.messages=[]},e.prototype.upQuestions=function(e){var t=this;return console.log("idcuestions services",e.idQuestion),this.http.post(pe+"/"+e.idQuestion._id+"/upscore",e.idQuestion,this.options).map(function(e){return e.json()}).catch(function(e){return t.handleError(e)})},e.prototype.sendMessage=function(e){console.log('Mandando mensaje: "'+e+'"'),this.socket.emit("send-message",e),console.log("sssseervv",e.idQuestion.score),this.messages.push({user:"yo",message:e.message,score:0})},e=ce([Object(r.A)(),le("design:paramtypes",[a.a,u.b])],e)}(),de=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},he=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},me=function(){function e(e,t){this.questions_s=e,this.auth=t,this.form={message:String,creator:String,events_id:String,idQuestion:String,username:String,score:0}}return e.prototype.ngOnInit=function(){var e=this;this.auth.isLoggedIn().subscribe(function(t){return e.user=t}),this.questions_s.getQuestions(this.events._id).subscribe(function(t){return e.questions=t}),this.questions_s.clearArray()},e.prototype.upQuestions=function(e){var t=this;console.log("vista,upQuestions",this.form),this.form.idQuestion=e,this.questions_s.upQuestions(this.form).subscribe(function(e){t.questions=e})},e.prototype.sendContent=function(e){console.log("broski",this.events),console.log("user!!!!!!!!",this.user),this.form.message=e,this.form.creator=this.user._id,this.form.username=this.user.username,this.form.events_id=this.events._id,this.questions_s.sendMessage(this.form)},de([Object(r.D)(),he("design:type",Object)],e.prototype,"events",void 0),e=de([Object(r.n)({selector:"app-questions-chat",template:n("QtsI"),styles:[n("G5Tb")]}),he("design:paramtypes",[fe,b])],e)}(),ge=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},be=this&&this.__metadata||function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},ve=function(){function e(e,t){this.auth=e,this.router=t}return e.prototype.ngOnInit=function(){},e=ge([Object(r.n)({selector:"app-user-navbar",template:n("CT/g"),styles:[n("tiMF")]}),be("design:paramtypes",[b,u.b])],e)}(),ye=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},je=function(){function e(){}return e=ye([Object(r.I)({declarations:[l,j,x,I,P,C,N,U,J,V,ne,se,me,ve],imports:[s.a,i.a,a.b,u.c.forRoot(ie)],providers:[b,F,G,fe],bootstrap:[l]})],e)}();f&&Object(r._13)(),Object(o.a)().bootstrapModule(je).catch(function(e){return console.log(e)})},ePjq:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,".btn-outline-primary{color:#fff;background-color:transparent;background-image:none;border-color:#fff}.card-header{font-weight:700}",""]),e.exports=e.exports.toString()},eQ1J:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},efyd:function(e,t){e.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n    <div class="container-fluid">\n      <app-user-navbar></app-user-navbar>\n      <div class="container">\n        <router-outlet></router-outlet>\n\n      </div>\n    </div>\n'},hxJY:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},iEEU:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},iNvm:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},iZzV:function(e,t){e.exports='<hr class="my-4">\n<div class="jumbotron">\n  <h1 class="display-3">Conferences</h1>\n  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class="my-4">\n  <p class="lead">\n    <a class="btn btn-primary btn-lg" href="#" role="button" routerLink="/conferences/signup">Create your conference</a>\n  </p>\n</div>\n<hr class="my-4">\n<div class="container">\n\n  <div class="row justify-content-start">\n\n    <div class=" col-4" *ngFor="let conf of conferences">\n      <div class="card text-white bg-primary ">\n\n        <div class="card-header"></div>\n        <div class="card-body">\n          <h4 class="card-title">{{conf.name}}</h4>\n          <p class="card-text">{{conf.descriptions}}</p>\n          <p class="card-text"><strong>Category: </strong>{{conf.categories}}</p>\n          <a href="#" class="btn btn-outline-primary" routerLink="/conferences/{{conf._id}}">See this</a>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<p class="error"> {{ error }} </p>\n'},kyol:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},lX1N:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()},tiMF:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,".navbar-light .navbar-brand{color:#777;font-size:1.5em}",""]),e.exports=e.exports.toString()},v6by:function(e,t){e.exports='<div *ngIf="auth.user">\n\n<div *ngIf="!user">\n  <p class="error"> {{ error }} </p>\n</div>\n\n<div *ngIf="user">\n      <hr class="my-4">\n  <h2> Hi, {{user.username}} </h2>\n    <hr class="my-4">\n    <h3>Your info</h3>\n    <p>{{user.email}}</p>\n    <p>{{user.name}}</p>\n    <p>{{user.pic_path}}</p>\n    <p>{{user.pic_name}}</p>\n    <hr class="my-4">\n  <a href="#" class="btn btn-outline-primary" routerLink="/user/{{user._id}}/edit">Edit your profile</a>\n      <hr class="my-4">\n  <a href="#" class="btn btn-outline-primary" routerLink="/conferences/signup">create your conference</a>\n    <hr class="my-4">\n\n<a href="#" class="btn btn-outline-primary" routerLink="/conferences">see conferences</a>\n    <hr class="my-4">\n<a href="#" class="btn btn-outline-primary" routerLink="/events">see events</a>\n    <hr class="my-4">\n</div>\n</div>\n'},v8Xq:function(e,t,n){(e.exports=n("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()}},[0]);