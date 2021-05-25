/// <reference types = "cypress"/>

describe('Worn with alerts', () => {
    before(() => { //vai executar antes do primeiro  teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });
    

    beforeEach(() => { //vai executar antes de cada um dos tests
        cy.reload()
    });

// it('Alerts', () => {
//                          // cy.get('#alert').click()
//                  // cy.on('window:alert', msg =>{
//                  //     console.log(msg)
//                         //     expect(msg).to.be.equal('Alert Simples')
//                                                      // })

// cy.clickAlert('#alert','Alert Simples')

// });

it('Alerts com mock', () => {
    const stub = cy.stub()
    cy.on('window:alert',stub)
        cy.get('#alert').click()

    });

    it('Confirm', () => {
        
        cy.on('window:confirm', msg =>{
            
            expect(msg).to.be.equal('Confirm Simples')
        })
        
        cy.get('#confirm').click()

        });
        // it('dany', () => {
        
        //     cy.on('window:confirm', msg =>{
                
        //         expect(msg).to.be.equal('Negado')
        //         return false
        //     })
            
        //     cy.get('#confirm').click()
    
        //     });

           
            it('Prompt', () => {
                cy.window().then(win =>{
                    cy.stub(win, 'prompt').returns('42')
                     
                    
                });  //vai retornar todo objeto da pagina
                
                cy.on('window:prompt', msg =>{
                    
                    expect(msg).to.be.equal('Confirm')
                    
                 })
                 cy.on('window:confirm', msg =>{
                    
                    expect(msg).to.be.equal('Era 42?')
                   
               })
                 cy.on('window:alert', msg =>{

                     expect(msg).to.be.equal(':D')
                    
                })
                cy.get('#prompt').click()
        
                });



});