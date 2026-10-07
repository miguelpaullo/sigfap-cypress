import { toCyString } from "../helpers/kebab.helper";

describe("Criação de conta no sistema", () => {
  context("Criação de conta com dados válidos", () => {
    it("Cria uma conta com dados válidos", () => {
      cy.visit("/");
      cy.get(".css-j9tmj0").click();

      cy.fixture("criar-conta").then((dadosCadastro) => {
        cy.get('[data-cy="nome"]').type(dadosCadastro.nome);
        cy.get('[data-cy="dataNascimento"]').type(dadosCadastro.dataNascimento);
        cy.get('[data-cy="open-sexo"]').click();
        cy.get('[data-cy="' + toCyString(dadosCadastro.sexo) + '"]').click();
        cy.get('[data-cy="documento"]').type(dadosCadastro.cpf);
        cy.get('[data-cy="register-next-button"]').click();
        cy.get('[data-cy="email"]').type(dadosCadastro.email);
        cy.get('[data-cy="senha"]').type(dadosCadastro.senha);
        cy.get('[data-cy="senhaConfirmar"]').type(dadosCadastro.senhaConfirmar);
        cy.get('[data-cy="register-next-button"]').click();
        cy.get(".css-d2d35v").click();
        cy.get('[data-cy="finalizar"]').click();
      });
    });
  });

  context("Autenticação com dados válidos", () => {
    it("Realiza login com credenciais válidas", () => {
      cy.fixture("criar-conta").then((credenciais) => {
        cy.typeLogin(credenciais.email, credenciais.senha);
        cy.get('[data-cy="user-menu"]').should("be.visible");
      });
    });
  });
});