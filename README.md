# Monitoring Professional Performance

## Começando

Para executar esta aplicação:

```bash
npm install
npm run start:dev
```

## Build para Produção

Para fazer o build desta aplicação para produção:

```bash
npm run start:prod
```

## Executando em Produção com Docker

Para executar esta aplicação em produção com Docker:

> produção
```bash
docker-compose -f docker-compose.prod.yml up -d --build client
```

> desenvolvimento (com hot reload)
```bash
docker-compose -f docker-compose.dev.yml up -d --build client
```

## Testes

Este projeto usa [Vitest](https://vitest.dev/) para testes. Você pode executar os testes com:

```bash
npm run test
```

## Estilização

Este projeto usa [Tailwind CSS](https://tailwindcss.com/) para estilização.

## Linting e Formatação

Este projeto usa [Biome](https://biomejs.dev/) para linting e formatação. Os seguintes scripts estão disponíveis:

```bash
npm run lint
npm run format
npm run check
```

## Estrutura do Projeto

Para informações detalhadas sobre a estrutura e organização do projeto, consulte [PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md).
