// import { Component } from '@angular/core';
// import { SelectRemoteComponent } from '../../shared/components/select-remote/select-remote.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-select-remote-example',
//   standalone: true,
//   imports: [CommonModule, FormsModule, SelectRemoteComponent],
//   template: `
//     <div class="container mt-4">
//       <h2>Exemplos de Uso do Select Remote</h2>
      
//       <div class="row">
//         <div class="col-md-6">
//           <h4>1. Seleção Simples de Usuários</h4>
//           <div class="mb-3">
//             <label class="form-label">Selecionar Usuário:</label>
//             <app-select-remote
//               apiUrl="https://jsonplaceholder.typicode.com/users"
//               placeholder="Escolha um usuário..."
//               valueProperty="id"
//               labelProperty="name"
//               [(ngModel)]="selectedUser"
//               (selectionChange)="onUserChange($event)">
//             </app-select-remote>
//             <small class="form-text text-muted">
//               Usuário selecionado: {{ selectedUser || 'Nenhum' }}
//             </small>
//           </div>
//         </div>
        
//         <div class="col-md-6">
//           <h4>2. Seleção com Busca</h4>
//           <div class="mb-3">
//             <label class="form-label">Buscar Posts:</label>
//             <app-select-remote
//               apiUrl="https://jsonplaceholder.typicode.com/posts"
//               placeholder="Digite para buscar posts..."
//               valueProperty="id"
//               labelProperty="title"
//               searchProperty="title"
//               [searchable]="true"
//               [minSearchLength]="2"
//               [(ngModel)]="selectedPost">
//             </app-select-remote>
//             <small class="form-text text-muted">
//               Post selecionado: {{ selectedPost || 'Nenhum' }}
//             </small>
//           </div>
//         </div>
//       </div>
      
//       <div class="row">
//         <div class="col-md-6">
//           <h4>3. Seleção Múltipla</h4>
//           <div class="mb-3">
//             <label class="form-label">Selecionar Álbuns:</label>
//             <app-select-remote
//               apiUrl="https://jsonplaceholder.typicode.com/albums"
//               placeholder="Escolha vários álbuns..."
//               valueProperty="id"
//               labelProperty="title"
//               [multiple]="true"
//               [(ngModel)]="selectedAlbums">
//             </app-select-remote>
//             <small class="form-text text-muted">
//               Álbuns selecionados: {{ selectedAlbums?.length || 0 }}
//             </small>
//           </div>
//         </div>
        
//         <div class="col-md-6">
//           <h4>4. Com Parâmetros Customizados</h4>
//           <div class="mb-3">
//             <label class="form-label">Comentários do Post 1:</label>
//             <app-select-remote
//               apiUrl="https://jsonplaceholder.typicode.com/comments"
//               placeholder="Selecione um comentário..."
//               valueProperty="id"
//               labelProperty="name"
//               searchProperty="email"
//               [additionalParams]="{ postId: 1 }"
//               [(ngModel)]="selectedComment">
//             </app-select-remote>
//             <small class="form-text text-muted">
//               Comentário selecionado: {{ selectedComment || 'Nenhum' }}
//             </small>
//           </div>
//         </div>
//       </div>
      
//       <div class="row mt-4">
//         <div class="col-12">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Valores Selecionados</h5>
//               <pre>{{ getSelectedValues() | json }}</pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `,
//   styles: [`
//     .container {
//       max-width: 1200px;
//     }
    
//     .card {
//       background-color: #f8f9fa;
//     }
    
//     pre {
//       background-color: #2d2d2d;
//       color: #f8f8f2;
//       padding: 1rem;
//       border-radius: 4px;
//       max-height: 200px;
//       overflow-y: auto;
//     }
    
//     .form-label {
//       font-weight: 600;
//       color: #495057;
//     }
    
//     h4 {
//       color: #343a40;
//       margin-bottom: 1rem;
//     }
    
//     h2 {
//       color: #007bff;
//       margin-bottom: 2rem;
//     }
//   `]
// })
// export class SelectRemoteExampleComponent {
//   selectedUser: any = null;
//   selectedPost: any = null;
//   selectedAlbums: any[] = [];
//   selectedComment: any = null;

//   onUserChange(user: any) {
//     console.log('Usuário selecionado:', user);
//   }

//   getSelectedValues() {
//     return {
//       user: this.selectedUser,
//       post: this.selectedPost,
//       albums: this.selectedAlbums,
//       comment: this.selectedComment
//     };
//   }
// }