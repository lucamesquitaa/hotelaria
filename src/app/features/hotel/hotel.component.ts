import { CommonModule } from '@angular/common';
import { Component, inject, Injector, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Contact, DetalhesModel } from 'src/app/shared/models/hotel.model';
import { CoordenadasService } from 'src/app/shared/services/coordenadas.service';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-hotel',
  standalone: false,
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent extends ComponentBase implements OnInit {
   hotelId!: string | null;
   hotel!: DetalhesModel;
   id!: string;
   center!: any;
   images!: string[];
   category!: string;
   todasIMGS: string[] = [];

    private modalService = inject(NgbModal);
    
  constructor(private route: ActivatedRoute,
              public override injector: Injector,
              private hotelService: HotelService,
              private coordenadasService: CoordenadasService
  ) {
    super(injector);
    this.hotelId = this.route.snapshot.paramMap.get('hotel');
  }

  
  override ngOnInit(): void {
  this.hotelService.doGetAllHoteis().subscribe({
    next: (result) => {
      const hotel = result.find(item => item.url === this.hotelId);
      if (hotel) {
        this.id = hotel.id;
        console.log(hotel.photosStared);
        this.images = hotel.photosStared;

        this.hotelService.doGetHotelId(this.id).subscribe((item) => {
          this.hotel = item[0];
          const cep = item[0].cep.replaceAll('-', '');
          this.coordenadasService.buscarCoordenadas(cep).subscribe(res => {
            if (res.status === 'OK') {
              const location = res.results[0].geometry.location;
              this.center = { lat: location.lat, lng: location.lng };
              console.log('Center carregado:', this.center);
            } else {
              console.error('Erro na geocodificação:', res.status);
            }
          });

          switch (item[0].category) {
            case 1: this.category = 'Resort';
            break;
            case 2: this.category = 'Hotel';
            break;
            case 3: this.category = 'Pousada';
            break;
            default: this.category = 'Hotel';
            break;
          }

          this.todasIMGS = item[0].photos?.map(x => x.url) ?? [];
        });

      } else {
        console.error('Hotel não encontrado');
      }
    }
  });
    
  }
  openLg(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' });
  }

  openWhatsApp(){
    const phoneNumber = this.hotel.contacts?.at(0)?.contact; // Número com DDI e DDD (ex.: 55 + 11 + número)
    const message = encodeURIComponent(`Olá ${this.hotel.contacts?.at(0)?.name}! Gostaria de mais informações.`);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

  compartilhar() {
    if (navigator.share) {
      navigator.share({
        title: this.hotel.name,
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
