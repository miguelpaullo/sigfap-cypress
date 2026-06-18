// ***********************************************
// This example commands.ts shows you how to
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

Cypress.Commands.add("typeLogin", (username, password) => {
  cy.visit("/");
  cy.get('[data-cy="email"]').type(username);
  cy.get('[data-cy="senha"]').type(password);
  cy.get('[data-cy="loginButton"]').click(); //Botão Acessar da página principal
});

Cypress.Commands.add("abrirPerfil", () => {
  cy.get('[data-cy="user-menu"]').click();

  cy.get('[data-cy="editar-perfil"]').should("be.visible").click();

  cy.get('[data-cy="dados-pessoais"]').should("be.visible");
});

Cypress.Commands.add("navegacaoSubmissao", (nomeEdital) => {
  cy.get('[data-cy="editais-ver-mais"]').click();

  cy.contains('p', nomeEdital)
    .closest('div')
    .contains('button', 'Visualizar edital')
    .click();

  cy.get('[data-cy="criar-proposta"]').click();
});
