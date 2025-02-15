# Gestão de pedidos e pagamentos com Kafka

## Contexto
- Projeto desenvolvido para estudo dos Sistemas Distribuídos, utilizando o Apache Kafka como mensageria.
- Neste exemplo utilizamos o Kafka para comunicação entre os microsserviços de Pedidos e Pagamentos. Também é utilizado o Prisma com MySQL para persistência dos dados. A infraestrutura é gerenciada pelo Docker Compose.

## Tecnologias
- Node.js
- TypeScript
- NestJS
- Jest
- Prisma ORM
- MySQL
- Apache Kafka
- Docker Compose

## Comandos

```bash
# Instalar dependências
$ yarn install

# Iniciar a aplicação
$ yarn run start

# Iniciar a aplicação em modo de desenvolvimento
$ yarn run start:dev

# Iniciar a aplicação em modo de produção
$ yarn run start:prod
```
