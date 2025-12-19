import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { QuartosModel } from 'src/app/shared/models/quartos.model';
import { ResponseApi } from 'src/app/shared/models/response.api';
import { MenubarService } from 'src/app/shared/services/menubar.service';
import { QuartosService } from 'src/app/shared/services/quartos.service';

@Component({
  selector: 'app-quartos',
  standalone: false,
  templateUrl: './quartos.component.html',
  styleUrl: './quartos.component.scss'
})
export class QuartosComponent extends ComponentBase implements OnInit {

  hotelId!: string | null;

  allQuartos: QuartosModel[] = [];

  constructor(
    public override injector: Injector,
    public menubarService: MenubarService,
    public quartosService: QuartosService
  ) {
    super(injector);
  }
 override ngOnInit(): void {
    super.ngOnInit();
    this.hotelId = this.activatedRoute.snapshot.paramMap.get('hotelId');
    // ou, para escutar mudanças:
    this.activatedRoute.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');

      if(this.hotelId) {
        this.getAllQuartos(this.hotelId);
      }
        
    });
  }
  
  getAllQuartos(hotelId: string) {
    this.showLoading();
    this.quartosService.doGetQuartosByHotelId(hotelId).subscribe({
      next: (response: ResponseApi<QuartosModel[]>) => {
        console.log('Resposta da API:', response);
        if ((response.sucesso || response.success) && response.data) {
          this.allQuartos = response.data;
          console.log('Quartos carregados:', this.allQuartos);
        } else {
          this.allQuartos = [];
        }
      },
      error: (error) => {
        const errorMessage = error.message || 'Erro ao carregar quartos do hotel';
          console.error('Erro na resposta:', errorMessage);
          this.toastr.error(errorMessage);
        this.allQuartos = [];
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }
    });
  }

  onEditQuarto(quartoId: string) {
    if (quartoId) {
      this.router.navigate(['/quartos/cadastro', quartoId]);
    } else {
      console.error('ID do quarto não fornecido');
      this.toastr.error('Erro: ID do quarto não encontrado');
    }
  }

  onDeleteQuarto(quartoId: string) {
    if (!this.hotelId) {
      console.error('ID do hotel não encontrado');
      this.toastr.error('Erro: ID do hotel não encontrado');
      return;
    }

    this.showLoading();
    this.quartosService.doDeleteQuarto(this.hotelId, quartoId).subscribe({
      next: (response: ResponseApi) => {
        if (response.sucesso || response.success) {
          this.toastr.success('Quarto excluído com sucesso.');
          this.getAllQuartos(this.hotelId!);
        }
      },
      error: (error) => {
        const errorMessage = error.message || 'Erro ao excluir o quarto';
        console.error('Erro na exclusão:', errorMessage);
        this.toastr.error(errorMessage);
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }
    });
  }

  onAddQuarto() {
    if (this.hotelId) {
      this.router.navigate(['/quartos/cadastro'], {
        queryParams: { hotelId: this.hotelId }
      });
    } else {
      console.error('ID do hotel não encontrado');
      this.toastr.error('Erro: ID do hotel não encontrado');
    }
  }
}
