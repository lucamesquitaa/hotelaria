import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentBase } from 'src/app/shared/components/component.base';
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
   id!: string;
    center!: any;
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

        this.hotelService.doGetHotelId(this.id).subscribe((item) => {
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
        });

      } else {
        console.error('Hotel não encontrado');
      }
    }
  });
    
  }
}
