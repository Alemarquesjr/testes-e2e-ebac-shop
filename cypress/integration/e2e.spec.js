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
});

afterEach(() => {
    cy.screenshot()
});


it('Deve Fazer um pedido completo na loja Ebac Shop de Ponta a Ponta' , () => {
    //Todo

    cy.fixture('perfil').then(dados => {
        cy.get('#username') .type(dados.usuario)
            cy.get('#password') .type(dados.senha,{log: false})
            cy.get('.woocommerce-form > .button') .click()

            cy.get('.page-title') .should('contain' , 'Minha conta')

            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Green').click()
            cy.get('.single_add_to_cart_button').click()
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.get('.post-3680 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-XS').click()
            cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
            cy.get('.single_add_to_cart_button').click()
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.get(':nth-child(2) > .page-numbers').click()
            cy.get('.post-3345 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Black').click()
            cy.get('.single_add_to_cart_button').click()
            cy.get('#primary-menu > .menu-item-629 > a').click()
            cy.get(':nth-child(3) > .page-numbers').click()
            cy.get('.post-3936 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Orange').click()
            cy.get('.single_add_to_cart_button').click()

            cy.get('.woocommerce-message > .button').click()

            cy.get('.checkout-button').click()
            cy.get('#terms') .click()
            cy.get('#place_order') . click()

            cy.get('.page-title') .should('contain' , 'PEDIDO RECEBIDO')






    })








    
})