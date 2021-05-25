/// <reference types = "cypress"/>

describe('Cypress basic', () => {
 
it('Should visist a page and assert title', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    // const title = cy.title
    // console.log(title)
    //.debug() pegar as informacoes
    //cy.pause() executar passo a passo com gerenciamento do cypress
    cy.title().should('be.equal', 'Campo de Treinamento') //dentro dos parenteses (  uma string que recebe o valor)
    cy.title().should('contain', 'Campo de Treinamento')
    cy.title()
    .should('be.equal', 'Campo de Treinamento')
    .should('contain','Campo')
    cy.title()
    .should('be.equal', 'Campo de Treinamento')
    .and('contain','Campo')

cy.title().then(title => { //should tbm trata promisses
    console.log(title)
})
    //console.log(title)

    cy.title().then(title => { //should tbm trata promisses
        console.log(title)
        cy.get('#formNome').type(title)
    })


    let syncTitle
    cy.title().then(title => { //should tbm trata promisses
        console.log(title)
        cy.get('#formNome').type(title)
        syncTitle =title
    })

    cy.get('[data-cy=dataSobrenome]').then($el=>{
$el.val(syncTitle)
    })
    
    



});

it('Should find and interact with an element', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    cy.get('#buttonSimple')
    .click()
    .should('have.value', 'Obrigado!')



});



});