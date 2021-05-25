# cypress-modern-applications

Este projeto foi desenvolvido durante o curso "Testes de aplicações modernas com Cypress", ministrado por "Francisco Wagner Costa Aquino".

## Pré-requisitos para utilizar o projeto
### Instalar o Node.js
### Possuir um editor de texto (nesse projeto foi utilizado o Visual Studio Code)
```
sudo apt install code
```

### Comando para criar Projeto Node:
    npm init -y

## Para instalar o cypress com a última versão disponível com dependencia dev:
    npm install -D cypress

## Para instalar o cypress com uma versão específica que foi feito o teste:
    npm install cypress@3.6.0

## Configurar script no arquivo "package.json" para abrir o cypress:
    "cypress:open": "cypress open"

## Para executar o script que abre o cypress:
    npm run cypress:open

## Para executar sem o script no terminal:
    .node_modules\.bin\cypress open


 # como rodar no cli
```
Para rodar em cli no modo headless podemos pegar o comando que esta na pasta do nosso projeto file packed.jason e executar o comando 
cypress run ("cypress": "cypress run") "npx cypress run" e ele executa em linha do comando, 
e o comando para um test especifico 
npx cypress run --spec cypress/integration/backend.js

```



### Developed Orders

- [x] Testes Funcionais.
- [x] Testes da API.
- [x] Testes de interface

<h4 align="center"> 
	 Status 🚀 Finalizado 
</h4>




