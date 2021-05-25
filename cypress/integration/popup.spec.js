/// <reference types = "cypress"/>

describe('Worn with alerts', () => {


   
    it('popoup diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
         cy.get('#otherButton').click()
         cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')

        })

    });
    it('Deve vereficar se o popup foi invocado', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
       cy.get('#buttonPopUp').click()
        cy.get('@winOpen')

    });
    describe('With links', () => {
        beforeEach(() => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        });
        it('Check popup', () => {
            cy.contains('Popup2')
            .should('have.prop', 'href')
            .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
        });


        it('Should acess popup dinamically', () => {
            cy.contains('Popup2').then($a =>{
                const href = $a.prop('href')
                cy.visit(href)
            })
            cy.get('#tfield').type('funciona')

        });

        it('Should force link on same page', () => {
            cy.contains('Popup2')
            .invoke('removeAttr', 'target')
            .click()
            cy.get('#tfield').type('funciona')
        });
    });
})






