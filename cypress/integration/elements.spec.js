/// <reference types = "cypress"/>

describe('Worn with basic elements', () => {
    before(() => { //vai executar antes do primeiro  teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    });
    

    beforeEach(() => { //vai executar antes de cada um dos tests
        cy.reload()
    });
    

it('Text', () => {
    cy.get('body').should('contain', 'Cuidado onde clica, muitas armadilhas...') //busca generica
    cy.get('span').should('contain', 'Cuidado onde clica, muitas armadilhas...')
    cy.get('span').should('contain', 'Cuidado onde clica, muitas armadilhas...') 
    cy.get('.facilAchar').should('contain', 'Cuidado onde clica, muitas armadilhas...') //buscando o elemento com a classe
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    


});

it('Links', () => {
    
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.get('#resultado').should('have.not.text', 'Voltou!')
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
    

});


it('TextFields', () => {
    cy.get('#formNome').type('Cypress Test') //busca por id
    cy.get('#formNome').should('have.value', 'Cypress Test') //vereficar se um texto foi escrito
    
    // cy.get('#elementosForm\\\:sugestoes')
    // .type('text area')
    // .should('have.value', 'Cypress Test')

// cy.get('#elementosForm\\\:sugestoes')
//  clear()
    // .type('Erro {selectall}acerto', {delay:100}) //vai apagar e escrever'acerto' e vereficar se esta correto
    // .should('have.value', 'acerto') //

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('???')
    cy.get('[data-cy=dataSobrenome]').type('Teste12345{backspace}{backspace}').should('have.value', 'Teste123')

});


it('RadioButton', () => {
    cy.get('#formSexoFem')
    .click()
    .should('be.checked')  //vereficar se ele esta selecionado

    cy.get('#formSexoMasc')
    .should('not.be.checked')  //vereficar se o mascolino nao se ele esta selecionado

    cy.get("[name='formSexo']")
    .should('have.length', 2) //busca por propriedade
   
});


it('CheckBox', () => {
    
    cy.get('#formComidaPizza')
    .click()
    .should('be.checked')

    cy.get('[name=formComidaFavorita]')
    .click({multiple:true})
    
    cy.get('#formComidaPizza').should('not.be.checked')
    cy.get('#formComidaVegetariana').should('be.checked')

});


it('ComboBOX', () => {
    cy.get('[data-test=dataEscolaridade]') //podemos enviar tanto como o valor da option da combobox
    .select('2o grau completo')
    .should('have.value', '2graucomp')

    cy.get('[data-test=dataEscolaridade]') // quanto o value da option
    .select('1graucomp')
    .should('have.value', '1graucomp')
    
    cy.get('[data-test=dataEscolaridade] option').should('have.length', 8)
    cy.get('[data-test=dataEscolaridade] option').then($arr =>{
        const values = []
        
        $arr.each(function(){
            values.push(this.innerHTML)
        })
        expect(values).to.include.members(["Superior", "Mestrado"])
    })

});

    // it('Combo Multiplo', () => {
    //     cy.get('[data-testid=dataEsportes]')
    //     .select(['natacao', 'Corrida', 'nada']) //select via array somente com o value do select
        
    //     cy.get('[data-testid=dataEsportes]').then($el =>{
    //     expect($el.val()).to.be.depp.equal(['natacao','corrida','nada'])
    //     expect($el.val()).to.have.length(3)

    //     })
    //     cy.get('[data-testid=dataEsportes]')
    //     .invoke('val')
    //     .should('eql', ['natacao', 'Corrida', 'nada'])
    // });







});


