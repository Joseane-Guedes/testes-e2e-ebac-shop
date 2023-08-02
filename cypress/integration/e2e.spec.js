/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    //  Passo-a-passo
    //  Acessando a pagina de produtos 
    //  Aqui vamos utilizar o que aprendemos em aula tratando de Hooks a fim de diminuir a quantidade de linhas de código melhorando a performance do teste

    beforeEach(() => {
        cy.visit('/produtos')
    });

    // Utilizando conceito de variáveis para fazer o pedido de 4 produtos 
    // Preenchendo algumas opções de checkout com dados fakes
    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        let quantidade = 4

        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

        cy.visit('checkout')
        let nome = faker.internet.userName()
        let sobrenome = faker.internet.userName()
        let email = faker.internet.email()
        let senha = faker.internet.password()

        cy.Endereco(nome, sobrenome, 'Rua teste', 'Casa', 'Cidade teste', 'São paulo', '58083-003', '(93) 3227-7144', email, senha)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})



