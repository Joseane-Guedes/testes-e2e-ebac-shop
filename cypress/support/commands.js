// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('Endereco', (Nome, Sobrenome, Endereço, Casa, Cidade, Estado, Cep, Telefone, Email, senha) => {
    cy.get('#billing_first_name').clear().type(Nome)
    cy.get('#billing_last_name').clear().type(Sobrenome)
    cy.get('#billing_address_1').clear().type(Endereço)
    cy.get('#billing_address_2').clear().type(Casa)
    cy.get('#billing_city').clear().type(Cidade)
    cy.get('#select2-billing_state-container').type(Estado + '{enter}')
    cy.get('#billing_postcode').clear().type(Cep)
    cy.get('#billing_phone').clear().type(Telefone)
    cy.get('#billing_email').clear().type(Email)
    cy.get('#terms').click()
    cy.get('#place_order').click()
    // cy.get('#createaccount').check()
    // cy.get('#account_password').type(senha)
    // cy.get('#terms').check()
    // cy.get('#place_order').click()
})

Cypress.Commands.add('AddProdutos', (Produto, Tamanho, Cor) => {
    cy.contains('[class="product-block grid"]', Produto).click()
    cy.get(`.button-variable-item-${Tamanho}`).click()
    cy.get(`.button-variable-item-${Cor}`).click()

    cy.get('.single_add_to_cart_button').click()
})


Cypress.Commands.add('login', (email, senha) => {
    cy.visit('minha-conta')
    email = Cypress.env('email')
    senha = Cypress.env('password')
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.contains('.button', 'Login').click()
})