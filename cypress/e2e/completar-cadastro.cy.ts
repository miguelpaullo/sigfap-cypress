import { toCyString } from "../helpers/kebab.helper";

describe("Completar cadastro no sistema", () => {
  context("Completar cadastro com dados válidos", () => {

    //sempre terá que estar logado
    beforeEach(() => {
        cy.fixture("criar-conta").then((dados) => {
        cy.typeLogin(dados.email, dados.senha);
        cy.get('[data-cy="user-menu"]').should("be.visible");
        cy.abrirPerfil();
      });
    })

    //estamos completando o cadastro do usuário
    it("Completa a seção de endereço com dados válidos", () => {
      cy.fixture("completar-cadastro").then((dados) => {
        cy.get('[data-cy="endereco"]').should("be.visible").click();
        cy.get('[data-cy="endereco.cep"]').type(dados.cep);
        cy.get('[data-cy="endereco.logradouro"]').clear().type(dados.endereco);
        cy.get('[data-cy="endereco.numero"]').clear().type(dados.numero);
        cy.get('[data-cy="endereco.bairro"]').clear().type(dados.bairro);
        cy.get('[data-cy="search-estado"]').click();
        cy.contains(dados.estado).click();
        cy.get('[data-cy="search-municipio"]').click();
        cy.get('[data-cy="' + toCyString(dados.cidade) + '"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.get('.css-1ky4us2.ens3bun6').should("be.visible");
      });
    });

    it("Completa a seção de dados academicos com dados validos", () =>{
        cy.fixture("completar-cadastro").then((dados) => {
            cy.get('[data-cy=dados-academicos').should("be.visible").click();
            cy.get('[data-cy="search-instituicao-id"]').click();
            cy.contains(dados.siglaUF).click();
            cy.get('[data-cy="search-unidade-id"]').click();
            cy.contains(dados.siglaUnidade).click();
            cy.get('[data-cy="search-nivel-academico-id"]').click();
            cy.contains(dados.nivel).click();
            cy.get('[data-cy="lattes"]').clear().type(dados.lattes);
            cy.get('[data-cy="linkedin"]').clear().type(dados.linkedin);
            cy.get('[data-cy="menu-salvar"]').click();
            cy.get('.css-1ky4us2.ens3bun6').should("be.visible");
            cy.get('[data-cy="add-areas-de-conhecimento"]').click();
            cy.get('[data-cy="search-grande-area-id"]').should("be.visible").click();
            cy.get('[data-cy="' + toCyString(dados.areaGrandeConhecimento) + '"]').click();
            cy.get('[data-cy="search-area-id"]').should("be.visible").click();
            cy.contains(dados.areaConhecimento).click();
            cy.get('[data-cy="search-sub-area-id"]').should("be.visible").click();
            cy.contains(dados.subArea).click();
            cy.get('[data-cy="search-especialidade-id"]').should("be.visible").click();
            cy.contains(dados.especialidade).click();
            cy.get('[data-cy="areaDeConhecimento-confirmar"]').click();
            cy.get('.css-1ky4us2.ens3bun6').should("be.visible");
        });
    });

    it("Completa a seção de dados profissionais com dados validos", () =>{
        cy.fixture("completar-cadastro").then((dados) =>{
            cy.get('[data-cy="dados-profissionais"]').should("be.visible").click();
            cy.contains("Possuo vínculo institucional").should("be.visible");
            cy.contains("Possuo vínculo institucional").click();
            cy.wait(3000);
            cy.contains("Possuo vínculo institucional").click();
            cy.get('[data-cy="search-tipo-vinculo-instituciona"]').should("be.visible").click();
            cy.get('[data-cy="' + toCyString(dados.vinculo) + '"]').click();
            cy.contains("Possuo vínculo empregatício").should("be.visible");
            cy.contains("Possuo vínculo institucional").click();
            cy.wait(3000);
            cy.contains("Possuo vínculo institucional").click();
            cy.get('.css-1rhkmrg.e13cwml20').should("be.visible");
            cy.get('[data-cy="vinculoInstitucional.inicioServico"]').click();
            cy.get('[data-cy="vinculoInstitucional.inicioServico"]').clear().type(dados.data);
            cy.get('[data-cy="search-regime-trabalho-id"]').should("be.visible").click();
            cy.get('[data-cy="' + toCyString(dados.regime) + '"]').click();
            cy.get('[data-cy="vinculoInstitucional.funcao"]').clear().type(dados.funcao);
            cy.get('[data-cy="vinculoInstitucional.inicioFuncao"]').click();
            cy.get('[data-cy="vinculoInstitucional.inicioFuncao"]').clear().type(dados.dataFuncao);
            cy.get('[data-cy="menu-salvar"]').click();
            cy.get('.css-1ky4us2.ens3bun6').should("be.visible");
        });
    });

    it("Completa a seção de documentos pessoais com dados válidos", () => {
        cy.fixture("completar-cadastro").then((dados) => {
            cy.get('[data-cy="documentos-pessoais"]').should("be.visible").click();
            cy.contains("Selecione uma opção").should("be.visible").click();
            cy.get('[data-cy="documento-de-identificacao-com-f"]').click();
            
            //Como os testes são executados várias vezes, quando ja se tem um arquivo upado
            //vamos apaga-lo e realizar o upload novamente
            cy.get('body').then(($body) => {
                if ($body.text().includes('.pdf')) {
                    cy.get('[data-icon="trash"]').click();
                }
            });

            cy.get('[data-cy="usuarioAnexo-upload"]').selectFile('cypress/fixtures/rg.pdf', {force: true});
            cy.get('.css-1ky4us2.ens3bun6').should("be.visible");

        });
    });

  });
});