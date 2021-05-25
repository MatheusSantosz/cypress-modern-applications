/// <reference types = "cypress"/>
describe('esperas...', () => {
    before(() => { //vai executar antes do primeiro  teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });
    
    beforeEach(() => { //vai executar antes de cada um dos tests
        cy.reload()
  
    });  


    it('Wrap', () => {
        const obj = {nome : 'User', idade:20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')
        
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el =>{
            // $el.type ('funciona')
            cy.wrap($el).type('Funciona')
        })


    });
it('Its..', () => {
    const obj = {nome : 'User', idade:20}
        
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {nome : 'User', idade:20, endereco:{rua:'dos bobos'}}
        cy.wrap(obj2).should('have.property', 'nome', 'User')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)




});

it('Invoke', () => {
    const getValue=() => 1;
    const soma=(a, b) => a+b;
    cy.wrap({fn:getValue}).invoke('fn').should('be.equal', 1)
    cy.wrap({fn:soma}).invoke('fn', 2, 5).should('be.equal', 7)




});





});