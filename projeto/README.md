# Projeto MongoDB

## Classes Principais

- A classe de Documento (@Document) para o MongoDB e sua interface de Repositório (MongoRepository).
- Uma interface de cliente Feign (@FeignClient) para se comunicar com o sistema externo de Autorização Digital.

## Estrutura do Projeto

- Entidades MongoDB com anotações Spring Data
- Repositórios para acesso aos dados
- Configuração do MongoDB

## Docker

- O segundo estágio ('run') deve usar uma imagem JRE oficial e enxuta (como 'eclipse-temurin:21-jre') para executar a aplicação.

## Testes

- O teste deve verificar se o método 'consultarTransacao' do client e o método 'save' do repositório são chamados exatamente uma vez.
