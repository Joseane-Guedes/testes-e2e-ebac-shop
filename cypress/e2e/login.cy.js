let dadosLogin

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Login com sucesso usando Comando customizado', () => {
        cy.login(dadosLogin.usuario, dadosLogin.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Deve fazer login com sucesso - sem otimização', () => {
        cy.get('#username').type(dadosLogin.usuario)
        cy.get('#password').type(dadosLogin.senha, { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        // cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac(não é aluno_ebac ? Sair)')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains('Olá, aluno_ebac').should('be.visible');

    })
})

//  Add verificação mais flexível usando a função .contains() - Motivo: Possivelmente houve mudanca no html do site ebacshop