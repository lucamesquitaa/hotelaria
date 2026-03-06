import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Verifica se há parâmetros OAuth na URL (código, state, etc.)
    const queryParams = this.route.snapshot.queryParams;
    
    if (queryParams['code'] && queryParams['state']) {
      console.log('🔄 OAuth callback detectado no dashboard, redirecionando para oauth-callback');
      console.log('Parâmetros OAuth:', queryParams);
      
      // Redireciona para oauth-callback preservando todos os query params
      this.router.navigate(['/oauth-callback'], { 
        queryParams: queryParams,
        queryParamsHandling: 'preserve'
      });
      
      return;
    }

    console.log('✅ Dashboard carregado normalmente');
  }
}
