/// <reference types = "cypress"/>
describe('esperas...', () => {
    before(() => { //vai executar antes do primeiro  teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });
    
    beforeEach(() => { //vai executar antes de cada um dos tests
        cy.reload()
  
    }); 
    
    it('Goingo back', () => {
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '11/05/2021')

        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '31/12/1969')

        // const dt = new Date (2020, 3, 10,15,23,50)
        // cy.clock(dt.getTime())
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '11/05/2021')

    });



it('Goes to the Future', () => {    

    // cy.get('#buttonTimePassed').click()
    // cy.get('#resultado > span').should('contain', '15865')
    // cy.get('#resultado > span').invoke('text').should('gt', '1586543030000')




});




});  
