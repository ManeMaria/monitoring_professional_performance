# Estrutura do Projeto

Este documento descreve a organização e o propósito de cada pasta e arquivo na estrutura do projeto.

## Visão Geral

O projeto segue uma arquitetura modular baseada em **Domain-Driven Design (DDD)**, com separação clara de responsabilidades e reutilização de código através de componentes e utilitários compartilhados.

## Estrutura de Pastas

```
src/
├── api/                    # Camada de infraestrutura para chamadas de API
├── components/              # Componentes globais compartilhados
├── modules/                 # Módulos organizados por domínio (DDD)
├── routes/                  # Definições de rotas (TanStack Router)
├── shared/                  # Recursos compartilhados globalmente
│   ├── libs/               # Configurações de bibliotecas
│   └── utils/              # Funções utilitárias (formatadores, etc.)
├── main.tsx                # Ponto de entrada da aplicação
├── styles.css              # Estilos globais
├── routeTree.gen.ts        # Árvore de rotas gerada automaticamente
└── reportWebVitals.ts      # Relatório de métricas de performance
```

---

## 📁 `/api`

**Propósito:** Camada de infraestrutura para comunicação com APIs externas.

**Equivalência:** Esta pasta é equivalente à camada de **infrastructure** em arquiteturas limpas.

**Conteúdo:**
- Clientes HTTP (fetch, axios, etc.)
- Configurações de requisições
- Interceptors e middlewares de API
- Tipos relacionados a requisições/respostas de API

**Uso:** Todas as chamadas para APIs externas devem ser centralizadas nesta pasta.

---

## 📁 `/components`

**Propósito:** Armazenar componentes React globais que serão compartilhados por toda a aplicação.

**Características:**
- Componentes reutilizáveis em múltiplos módulos
- Componentes de layout (Header, Footer, Sidebar, etc.)
- Componentes de UI genéricos (Button, Modal, Card, etc.)

**Exemplo:** O componente `Header.tsx` é usado globalmente através do `__root.tsx`.

**Nota:** Componentes específicos de um módulo devem ficar dentro de `modules/{modulo}/components/`.

---

## 📁 `/shared`

**Propósito:** Recursos compartilhados globalmente, de uso genérico em toda a aplicação.

### `/shared/libs`

**Propósito:** Configurações e wrappers de bibliotecas de terceiros.

**Exemplo:**
- `cn.ts` - Utilitário para combinação de classes CSS (usando `clsx` e `tailwind-merge`)
- Configurações de bibliotecas como Zustand, React Hook Form, etc.

### `/shared/utils`

**Propósito:** Funções utilitárias genéricas usadas em múltiplos módulos.

**Estrutura:**
- `/formatters/` - Funções de formatação (datas, números, moedas, etc.)
  - `formattersDates.ts` - Formatadores específicos para datas

**Uso:** Funções que não pertencem a um domínio específico, mas são úteis em vários contextos.

---

## 📁 `/modules`

**Propósito:** Módulos organizados por **Domain-Driven Design (DDD)**, separados por funcionalidade e linguagem ubíqua.

**Conceito:** Cada módulo representa um **domínio** ou **contexto delimitado** da aplicação, com sua própria estrutura interna completa.

### Estrutura Interna dos Módulos

Cada módulo segue uma estrutura padronizada:

```
modules/{modulo}/
├── components/          # Componentes específicos do módulo
├── hooks/               # Hooks customizados do módulo
├── pages/               # Páginas/views do módulo
├── stories/             # Estado global (Zustand stores, Context, etc.)
├── types/               # Tipos TypeScript específicos do módulo
├── utils/               # Utilitários específicos do módulo
│   └── functions/       # Funções auxiliares
└── data/                # Dados iniciais, mocks, fixtures
```

**Por que essa estrutura interna?**
- As pastas `components`, `hooks`, `stories`, `types` e `utils` dentro dos módulos existem porque não houve necessidade de replicá-las fora da pasta `modules`.
- Cada módulo é **auto-contido** e pode ter suas próprias implementações específicas.
- Isso permite que cada domínio tenha sua própria organização interna, mantendo a coesão.

### Exemplo: Módulo `panel`

O módulo `panel` gerencia o painel de monitoramento de performance profissional:

- **components/**: Componentes específicos do painel (PanelForm, PanelHeader, PanelLegend, etc.)
- **hooks/**: Hooks para gerenciamento de formulários e localStorage
- **pages/**: Páginas do painel (Panel, PanelCommitment, PanelDelivery, etc.)
- **stories/**: Store Zustand para gerenciamento de estado global do painel
- **types/**: Tipos como `Task`, `Category`, `Status`, `Priority`, `MonthProgress`
- **utils/**: Funções auxiliares como manipulação de localStorage
- **data/**: Dados iniciais e categorias padrão

---

## 📁 `/routes`

**Propósito:** Definições de rotas usando **TanStack Router**.

**Estrutura:**
- `__root.tsx` - Rota raiz da aplicação (layout principal)
- `index.ts` - Exportações de rotas
- `painel/` - Rotas do módulo de painel
  - `compromisso.tsx`, `comunicacao.tsx`, `delivery.tsx`, etc.
  - `route.tsx` - Configuração de rota pai

**Características:**
- Rotas são definidas como componentes React
- O `routeTree.gen.ts` é gerado automaticamente pelo TanStack Router
- Cada rota pode ter seu próprio layout e lógica

---

## 📄 Arquivos na Raiz

### `main.tsx`
Ponto de entrada da aplicação React. Responsável por:
- Inicializar o router (TanStack Router)
- Renderizar a aplicação
- Configurar o StrictMode

### `styles.css`
Estilos globais da aplicação (CSS/Tailwind).

### `routeTree.gen.ts`
Arquivo gerado automaticamente pelo TanStack Router contendo a árvore de rotas tipada. **Não deve ser editado manualmente**.

### `reportWebVitals.ts`
Função para relatório de métricas de performance web (Core Web Vitals).

---

## Princípios de Organização

### 1. **Separação por Domínio (DDD)**
- Cada módulo representa um domínio específico
- Módulos são independentes e auto-contidos
- Linguagem ubíqua é refletida na estrutura

### 2. **Reutilização**
- Componentes globais em `/components`
- Utilitários genéricos em `/shared/utils`
- Configurações de libs em `/shared/libs`

### 3. **Infraestrutura**
- Chamadas de API centralizadas em `/api`
- Rotas definidas em `/routes`

### 4. **Coesão e Acoplamento**
- Módulos mantêm alta coesão interna
- Baixo acoplamento entre módulos
- Dependências claras através de imports explícitos

---

## Convenções de Nomenclatura

- **Pastas**: kebab-case (ex: `panel-category-navigation`)
- **Componentes**: PascalCase (ex: `PanelForm.tsx`)
- **Hooks**: camelCase com prefixo `use` (ex: `useFormChange.tsx`)
- **Utilitários**: camelCase (ex: `formattersDates.ts`)
- **Tipos**: PascalCase (ex: `Task`, `Category`)
- **Arquivos de índice**: `index.ts` para exportações

---

## Fluxo de Dados

```
API (api/) 
  ↓
Módulo (modules/{modulo}/)
  ├── pages/ (UI)
  ├── components/ (Componentes)
  ├── hooks/ (Lógica de estado)
  ├── stories/ (Estado global)
  └── utils/ (Transformações)
  ↓
Shared (shared/)
  ├── libs/ (Configurações)
  └── utils/ (Utilitários genéricos)
```

---

## Boas Práticas

1. **Componentes específicos** → `modules/{modulo}/components/`
2. **Componentes globais** → `components/`
3. **Funções genéricas** → `shared/utils/`
4. **Funções específicas do módulo** → `modules/{modulo}/utils/`
5. **Chamadas de API** → `api/`
6. **Tipos globais** → Considerar `shared/types/` (se necessário)
7. **Tipos de módulo** → `modules/{modulo}/types/`

---

## Adicionando um Novo Módulo

Ao criar um novo módulo, siga a estrutura padrão:

```
modules/{novo-modulo}/
├── components/
│   └── index.ts
├── hooks/
│   └── index.ts
├── pages/
│   └── index.ts
├── stories/
│   └── index.ts
├── types/
│   └── index.ts
└── utils/
    └── index.ts
```

Cada pasta deve ter um `index.ts` para facilitar as importações.

---

## Observações Importantes

- A estrutura interna dos módulos (`components`, `hooks`, `stories`, `types`, `utils`) existe apenas dentro de `modules/` porque não houve necessidade de replicá-las fora.
- Isso permite flexibilidade para cada módulo ter sua própria organização interna.
- Mantenha a consistência: se um módulo precisa de algo, adicione na estrutura interna do módulo, não globalmente.
