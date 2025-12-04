import { CommonModule } from '@angular/common';
import { Component, inject, Injector, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Contact, DetalhesModel } from 'src/app/shared/models/hotel.model';
import { CoordenadasService } from 'src/app/shared/services/coordenadas.service';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { MapsLoaderService } from 'src/app/shared/services/maps.loader.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-hotel',
  standalone: false,
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent extends ComponentBase implements OnInit {
   hotelId!: string | null;
   hotel!: DetalhesModel | undefined;
   id!: string;
   center!: any;
   images!: string[];
   category!: string;
   todasIMGS: string[] = [];

    private modalService = inject(NgbModal);
    
  constructor(private route: ActivatedRoute,
              public override injector: Injector,
              private hotelService: HotelService,
              private coordenadasService: CoordenadasService,
              private mapsLoader: MapsLoaderService
  ) {
    super(injector);
    this.hotelId = this.route.snapshot.paramMap.get('hotel');
  }

  
  override ngOnInit(): void {
  this.showLoading();
  this.mapsLoader.load().then(() => {
      this.hotelService.doGetAllHoteis().subscribe({
    next: (result) => {
      
      const hotel = result.data?.find(item => item.url === this.hotelId);
      if (hotel) {
        this.id = hotel.id;
        console.log(hotel.photosStared);
        this.images = hotel.photosStared;

        this.hotelService.doGetHotelId(this.id).subscribe({
          next: (item) => {
            this.hotel = item.data;
            this.coordenadasService.buscarCoordenadas(`${this.hotel?.address} ${this.hotel?.number}, ${this.hotel?.city} - ${this.hotel?.cep}`).subscribe({
              next: (res) => {
                if (res.status === 'OK') {
                  const location = res.results[0].geometry.location;
                  this.center = { lat: location.lat, lng: location.lng };
                  console.log('Center carregado:', this.center);
                } else {
                  console.error('Erro na geocodificação:', res.status);
                }
              },
              error: (err) => {
                console.error('Erro ao buscar coordenadas:', err);
              },
              complete: () => {
                this.hideLoading();
              }
            });

            this.todasIMGS = this.hotel?.photos?.map(x => x.url) ?? [];
          },
          error: (err) => {
            console.error('Erro ao buscar hotel por ID:', err);
            this.hideLoading();
          },
          complete: () => {
            this.hideLoading();
          }
        });
      } else {
        console.error('Hotel não encontrado');
        this.hideLoading();
      }
    },
    error: (err) => {
      console.error('Erro ao buscar todos os hotéis:', err);
      this.hideLoading();
    }
    });
  });
  
    
  }
  openLg(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' });
  }

  openWhatsApp(){
    const phoneNumber = this.hotel?.contacts?.at(0)?.contact; // Número com DDI e DDD (ex.: 55 + 11 + número)
    const message = encodeURIComponent(`Olá ${this.hotel?.contacts?.at(0)?.name}! Gostaria de mais informações.`);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

  compartilhar() {
    if (navigator.share) {
      navigator.share({
        title: this.hotel?.name,
        text: 'Visite este hotel incrível!',
        url: window.location.href
      })
      .then(() => console.log('Compartilhado com sucesso!'))
      .catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
      alert('O compartilhamento não é suportado neste navegador.');
    }
  }
}
