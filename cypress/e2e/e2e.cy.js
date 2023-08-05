import { faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.login()
    });
    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.visit('produtos')
        cy.AddProdutos('Abominable Hoodie', 'XS', 'Blue')

        cy.visit('produtos/page/2')
        cy.AddProdutos('Atomic Endurance Running Tee (V-neck)', 'M', 'Blue')

        cy.visit('produtos/page/2')
        cy.AddProdutos('Augusta Pullover Jacket', 'M', 'Red')

        cy.visit('produtos/page/2')
        cy.AddProdutos('Autumn Pullie', 'M', 'Purple')

        cy.visit('carrinho')

        cy.get('tr.cart_item').should('have.length', 4)

        cy.visit('checkout')
        let nome = faker.internet.userName()
        let sobrenome = faker.internet.userName()
        let email = faker.internet.email()
        let senha = faker.internet.password()

        cy.Endereco(nome, sobrenome, 'Rua teste', 'Casa', 'Cidade teste', 'São paulo', '58083-003', '(93) 3227-7144', email, senha)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})



