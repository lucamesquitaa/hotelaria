import { Component, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {

  override onReceiveLiterals(): void {
  }
  clickedHeart = false;

  titleDetailsModal!: string;

  itemSelected!: any;

  filteredItens!: any;

  actionOne: PoModalAction = { label: 'Comprar', action: () => console.log("09") };

  category = [
    {
      icon: "po-icon po-icon-device-desktop",
      name: "desktop11"
    },
    {
      icon: "po-icon po-icon-device-desktop",
      name: "desktop22"
    },
    {
      icon: "po-icon po-icon-device-desktop",
      name: "desktop33"
    },
  ];
  
  exemplos = [
    {
      hireStatus: 'hired',
      name: 'James Johnson',
      city: 'Ontario',
      age: 24,
      idCard: 'AB34lxi90',
      email: 'james@johnson.com',
      telephone: '1-541-754-3010',
      jobDescription: 'Systems Analyst',
      url: 'https://po-ui.io/',
      category:"desktop11"
    },
    {
      hireStatus: 'progress',
      name: 'Brian Brown',
      city: 'Buffalo',
      age: 23,
      idCard: 'HG56lds54',
      email: 'brian@brown.com',
      telephone: '1-543-456-9876',
      jobDescription: 'Trainee',
      url: 'https://po-ui.io/',
      category:"desktop11"
    },
    {
      hireStatus: 'canceled',
      name: 'Mary Davis',
      city: 'Albany',
      age: 31,
      idCard: 'DF23cfr65',
      email: 'mary@davis.com',
      telephone: '1-521-223-3232',
      jobDescription: 'Programmer',
      category:"desktop22"
    },
    {
      hireStatus: 'progress',
      name: 'Margaret Garcia',
      city: 'New York',
      age: 29,
      idCard: 'GF45fgh34',
      email: 'margaret@garcia.com',
      telephone: '1-541-344-2211',
      jobDescription: 'Web developer',
      url: 'https://po-ui.io/',
      category:"desktop33"
    },
    {
      hireStatus: 'hired',
      name: 'Emma Hall',
      city: 'Ontario',
      age: 34,
      idCard: 'RF76jut21',
      email: 'emma@hall.com',
      telephone: '1-555-321-3234',
      jobDescription: 'Recruiter',
      url: 'https://po-ui.io/',
      category:"desktop11"
    },
    {
      hireStatus: 'progress',
      name: 'Lucas Clark',
      city: 'Utica',
      age: 32,
      idCard: 'HY21kgu65',
      email: 'lucas@clark.com',
      telephone: '1-541-322-4343',
      jobDescription: 'Consultant',
      category:"desktop22"
    },
    {
      hireStatus: 'progress',
      name: 'Ella Scott',
      city: 'Ontario',
      age: 24,
      idCard: 'UL78flg68',
      email: 'ella@scott.com',
      telephone: '1-229-324-3434',
      jobDescription: 'DBA',
      category:"desktop11"
    },
    {
      hireStatus: 'progress',
      name: 'Chloe Walker',
      city: 'Albany',
      age: 29,
      idCard: 'JH12oli98',
      email: 'chloe@walker.com',
      telephone: '1-518-222-1212',
      jobDescription: 'Programmer',
      category:"desktop22"
    }
  ];

  ngAfterViewInit(){
    this.filteredItens = [...this.exemplos];
  }

  showDetailPage(item: any) {
    this.router.navigate([`details/${item.idCard}`]);
  }

  onClickHeart(){
    this.clickedHeart = !this.clickedHeart;
    console.log(this.clickedHeart)
  }

  onClickCategory(category: any){
    this.filteredItens = this.exemplos.filter(x => x.category == category.name);
  }
}
