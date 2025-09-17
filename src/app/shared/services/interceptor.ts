//interceptor

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService, private router: Router, private toastr: ToastrService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Ignorar requisições para Google ou OAuth
        const ignoreUrls = ['google', 'oauth'];
        if (ignoreUrls.some(url => req.url.includes(url))) {
            return next.handle(req);
        }
        const token = this.cookieService.get('access_token');
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}