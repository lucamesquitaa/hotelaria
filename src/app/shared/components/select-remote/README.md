# Select Remote Component

Um componente Angular para seleção de dados de APIs remotas com suporte a busca, paginação e seleção múltipla.

## Recursos

- ✅ Busca de dados em APIs remotas
- ✅ Busca/filtro em tempo real
- ✅ Paginação automática
- ✅ Seleção simples e múltipla
- ✅ Compatible com Angular Reactive Forms
- ✅ Loading states
- ✅ Debounce configurável
- ✅ Totalmente customizável

## Como usar

### 1. Importar no módulo

```typescript
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ]
})
```

### 2. Usar no template

#### Exemplo básico:
```html
<app-select-remote
  apiUrl="/api/usuarios"
  placeholder="Selecione um usuário"
  valueProperty="id"
  labelProperty="nome"
  [(ngModel)]="usuarioSelecionado">
</app-select-remote>
```

#### Exemplo com Reactive Forms:
```html
<form [formGroup]="meuForm">
  <app-select-remote
    formControlName="usuario"
    apiUrl="/api/usuarios"
    placeholder="Selecione um usuário"
    valueProperty="id"
    labelProperty="nome">
  </app-select-remote>
</form>
```

#### Exemplo com seleção múltipla:
```html
<app-select-remote
  apiUrl="/api/categorias"
  placeholder="Selecione as categorias"
  valueProperty="id"
  labelProperty="nome"
  [multiple]="true"
  [(ngModel)]="categoriasSelecionadas">
</app-select-remote>
```

#### Exemplo com botão de cadastro:
```html
<app-select-remote
  apiUrl="/api/tipos-produto"
  placeholder="Selecione o tipo de produto"
  valueProperty="id"
  labelProperty="nome"
  [searchable]="true"
  [showAddButton]="true"
  addButtonTooltip="Cadastrar novo tipo de produto"
  [(ngModel)]="tipoSelecionado"
  (addNew)="onCadastrarTipo()">
</app-select-remote>
```

#### Exemplo com busca e parâmetros customizados:
```html
<app-select-remote
  apiUrl="/api/produtos"
  placeholder="Buscar produtos..."
  valueProperty="codigo"
  labelProperty="descricao"
  searchProperty="descricao"
  [searchable]="true"
  [minSearchLength]="2"
  [debounceTime]="500"
  [additionalParams]="{ categoria: 'eletrônicos', ativo: true }"
  (selectionChange)="onProdutoSelecionado($event)">
</app-select-remote>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `apiUrl` | `string` | `''` | URL da API para buscar os dados |
| `placeholder` | `string` | `'Selecione uma opção'` | Texto placeholder |
| `valueProperty` | `string` | `'id'` | Propriedade do objeto para usar como valor |
| `labelProperty` | `string` | `'name'` | Propriedade do objeto para exibir como label |
| `searchProperty` | `string` | `'name'` | Propriedade para busca na API |
| `multiple` | `boolean` | `false` | Permite seleção múltipla |
| `clearable` | `boolean` | `true` | Mostra botão para limpar seleção |
| `disabled` | `boolean` | `false` | Desabilita o componente |
| `searchable` | `boolean` | `true` | Permite busca/filtro |
| `minSearchLength` | `number` | `0` | Mínimo de caracteres para iniciar busca |
| `debounceTime` | `number` | `300` | Tempo de debounce para busca (ms) |
| `pageSize` | `number` | `20` | Itens por página |
| `additionalParams` | `any` | `{}` | Parâmetros adicionais para a API |
| `showAddButton` | `boolean` | `false` | Exibe botão para adicionar novo item |
| `addButtonTooltip` | `string` | `'Adicionar novo item'` | Tooltip do botão de adicionar |
| `maxVisibleTags` | `number` | `3` | Máximo de tags visíveis no multiselect |

## Eventos

| Evento | Tipo | Descrição |
|--------|------|-----------|
| `selectionChange` | `EventEmitter<any>` | Emitido quando a seleção muda |
| `addNew` | `EventEmitter<void>` | Emitido quando o botão de adicionar é clicado |

## Formato esperado da API

### Resposta da API

A API deve retornar dados no seguinte formato:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Item 1"
    },
    {
      "id": 2,  
      "name": "Item 2"
    }
  ],
  "total": 100
}
```

Ou simplesmente um array (sem paginação):

```json
[
  {
    "id": 1,
    "name": "Item 1"
  },
  {
    "id": 2,
    "name": "Item 2"
  }
]
```

### Parâmetros enviados para a API

O componente envia os seguintes parâmetros para a API:

- `page`: Número da página atual
- `limit`: Itens por página
- `[searchProperty]`: Termo de busca (quando `searchable=true`)
- Parâmetros adicionais definidos em `additionalParams`

Exemplo de URL gerada:
```
GET /api/usuarios?page=1&limit=20&name=joão&categoria=admin
```

## Exemplos práticos

### 1. Seletor de Estados/Cidades

```html
<!-- Estados -->
<app-select-remote
  apiUrl="/api/estados"
  placeholder="Selecione o estado"
  valueProperty="codigo"
  labelProperty="nome"
  [(ngModel)]="estadoSelecionado"
  (selectionChange)="onEstadoChange($event)">
</app-select-remote>

<!-- Cidades -->
<app-select-remote
  apiUrl="/api/cidades"
  placeholder="Selecione a cidade"
  valueProperty="id"
  labelProperty="nome"
  [additionalParams]="{ estado: estadoSelecionado }"
  [(ngModel)]="cidadeSelecionada">
</app-select-remote>
```

### 2. Seletor de Usuários com busca

```html
<app-select-remote
  apiUrl="/api/usuarios"
  placeholder="Digite para buscar usuários..."
  valueProperty="id"
  labelProperty="nomeCompleto"
  searchProperty="nome"
  [searchable]="true"
  [minSearchLength]="2"
  [(ngModel)]="usuarioSelecionado">
</app-select-remote>
```

### 3. Seleção múltipla de categorias

```html
<app-select-remote
  apiUrl="/api/categorias"
  placeholder="Selecione as categorias"
  valueProperty="id"
  labelProperty="descricao"
  [multiple]="true"
  [maxVisibleTags]="2"
  [(ngModel)]="categoriasSelecionadas">
</app-select-remote>
```

### 4. Multiselect completo com busca e cadastro

```html
<app-select-remote
  apiUrl="/api/comodidades"
  placeholder="Selecione as comodidades"
  valueProperty="id"
  labelProperty="nome"
  [multiple]="true"
  [searchable]="true"
  [showAddButton]="true"
  [maxVisibleTags]="3"
  addButtonTooltip="Cadastrar nova comodidade"
  [(ngModel)]="comodidadesSelecionadas"
  (addNew)="onCadastrarComodidade()">
</app-select-remote>
```

## Estilização

O componente usa classes CSS que podem ser customizadas:

```scss
.select-remote-container {
  // Customizações do container principal
}

.select-input {
  // Customizações do input
}

.dropdown {
  // Customizações do dropdown
}

.option {
  // Customizações das opções
  
  &.selected {
    // Opção selecionada
  }
  
  &:hover {
    // Hover das opções
  }
}
```