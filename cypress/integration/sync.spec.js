/// <reference types = "cypress"/>
describe('esperas...', () => {
    before(() => { //vai executar antes do primeiro  teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });
    
    beforeEach(() => { //vai executar antes de cada um dos tests
        cy.reload()
  

  
    });

    it('Deve aguardar o elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
        
    });
    
    
    it('Deve fazer retrys', () => {
        //cy.get('#novoCampo').should('not.exist')
         
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist').type('funciona')
        //cy.get('#novoCampo').type('funciona')
        
    });
    
    it('uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li ').find('span')
        .should('contain', 'Item 1')

        // cy.get('#buttonList').click()
        // cy.get('#lista li ').find('span')
        // .should('contain', 'Item 2')


        cy.get('#lista li span')
        .should('contain', 'Item 2')//quando ele nao passa na assertiva ele tenta o primeiro comando novamente


        //cy.get('#buttonListDOM')
        
    });


it('uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout:1000}).should('exist') // "defaultCommandTimeout":1000 posso usar no cypress jason para aplicacao toda

        // cy.get('#buttonListDOM').click()
        // // cy.wait(5000)
        // cy.get('#lista li span' ,{timeout:30000}).click()
        // .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
        .should('have.length', 1)
        cy.get('#lista li span')
        .should('have.length', 2)



        
});


it('click retry', () => {
    
    cy.get('#buttonCount').click().click()
    .should('have.value', '111')
});

it('should vs then', () => {
    cy.get('#buttonListDOM').click()
    cy.get('#lista li span').then($el =>{  // $el por convencao que esta se referenciando ao jquery
        console.log($el)
        expect($el).to.have.length(1)
        return 2
    }).and('eq', 2)
    //.and('have.id', 'buttonListDOM')
    




});

});
