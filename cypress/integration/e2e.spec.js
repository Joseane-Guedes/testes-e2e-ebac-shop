// import { faker } from '@faker-js/faker';

// context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
//     /*  Como cliente 
//         Quero acessar a Loja EBAC 
//         Para fazer um pedido de 4 produtos 
//         Fazendo a escolha dos produtos
//         Adicionando ao carrinho
//         Preenchendo todas opções no checkout
//         E validando minha compra ao final */

//     //  Passo-a-passo
//     //  Acessando a pagina de produtos 
//     //  Aqui estou utilizando o que aprendemos em aula tratando de Hooks a fim de diminuir a quantidade de linhas de código melhorando a performance do teste

//     // beforeEach(() => {
//     //     cy.visit('/produtos')
//     // });

//     // Utilizando conceito de variáveis para fazer o pedido de 4 produtos 
//     // Preenchendo algumas opções de checkout com dados fakes
//     // Adicionando produtos no carrinho com comando customizado.
//     it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
//         cy.visit('/produtos')
//         cy.produto('Abominable Hoodie', 'XS', 'Blue')

//         cy.visit('/produtos/page/2')
//         cy.produto('Atlas Fitness Tank', 'XS', 'Blue')

//         cy.visit('/produtos/page/2')
//         cy.produto('Atomic Endurance Running Tee (Crew-Neck)', 'S', 'Black')

//         cy.visit('/produtos/page/2')
//         cy.produto('Autumn Pullie', 'M', 'Purple')

//         cy.visit('carrinho')
//         cy.get('tr.cart_item').should('have.length', 3)


//         cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

//         cy.visit('checkout')
//         let nome = faker.internet.userName()
//         let sobrenome = faker.internet.userName()
//         let email = faker.internet.email()
//         let senha = faker.internet.password()

//         cy.Endereco(nome, sobrenome, 'Rua teste', 'Casa', 'Cidade teste', 'São paulo', '58083-003', '(93) 3227-7144', email, senha)
//         cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
//     });
// })



