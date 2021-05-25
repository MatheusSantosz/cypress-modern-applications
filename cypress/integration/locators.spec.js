/// <reference types = "cypress"/>

describe('Worn with basic elements', () => {
    before(() => { //vai executar antes do primeiro  teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });


    beforeEach(() => { //vai executar antes de cada um dos tests
        cy.reload()
    });

    it('comandos jquary', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelausuarios tbody > tr:eq(0) td:nth-child(3) >input')
        cy.get('[onclick*=\'Francisco\']')
       




    });
    it('using xpath', () => {
        cy.xpath('//input')
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
       

    });

});