/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
     /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

})

beforeEach(() => {
    cy.visit('minha-conta')
    cy.login()

});

afterEach(() => {
    cy.screenshot()
});


it('Deve Fazer um pedido completo na loja Ebac Shop de Ponta a Ponta' , () => {
    //Todo


            cy.get('.page-title') .should('contain' , 'Minha conta')

            cy.addProdutos('Atlas Fitness Tank', 'M', 'Blue' , 1)
            cy.addProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'M', 'Blue', 1)
            cy.addProdutos('Atomic Endurance Running Tee (V-neck)', 'M', 'Blue', 1)
            cy.addProdutos('Augusta Pullover Jacket', 'M', 'Blue', 1)


            cy.get('.woocommerce-message > .button').click()

            cy.get('.checkout-button').click()
            cy.get('#terms') .click()
            cy.get('#place_order') . click()

            cy.get('.page-title') .should('contain' , 'PEDIDO RECEBIDO')


    })




    