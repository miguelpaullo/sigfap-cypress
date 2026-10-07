import { toCyString } from "../helpers/kebab.helper";

const TEMPO_ESPERA_CARREGAMENTO = 3000;

function removerArquivoSeExistir() {
  cy.get("body").then(($body) => {
    if ($body.text().includes(".pdf")) {
      cy.get('[data-icon="trash"]').click();
    }
  });
}

describe("Completar cadastro no sistema", () => {
  context("Completar cadastro com dados válidos", () => {
    beforeEach(() => {
      cy.fixture("criar-conta").then((credenciais) => {
        cy.typeLogin(credenciais.email, credenciais.senha);
        cy.get('[data-cy="user-menu"]').should("be.visible");
        cy.abrirPerfil();
      });
    });

    it("Completa a seção de endereço com dados válidos", () => {
      cy.fixture("completar-cadastro").then((endereco) => {
        cy.get('[data-cy="endereco"]').should("be.visible").click();
        cy.get('[data-cy="endereco.cep"]').type(endereco.cep);
        cy.get('[data-cy="endereco.logradouro"]')
          .clear()
          .type(endereco.endereco);
        cy.get('[data-cy="endereco.numero"]').clear().type(endereco.numero);
        cy.get('[data-cy="endereco.bairro"]').clear().type(endereco.bairro);
        cy.get('[data-cy="search-estado"]').click();
        cy.contains(endereco.estado).click();
        cy.get('[data-cy="search-municipio"]').click();
        cy.get('[data-cy="' + toCyString(endereco.cidade) + '"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.get(".css-1ky4us2.ens3bun6").should("be.visible");
      });
    });

    it("Completa a seção de dados academicos com dados validos", () => {
      cy.fixture("completar-cadastro").then((dadosAcademicos) => {
        cy.get("[data-cy=dados-academicos").should("be.visible").click();
        cy.get('[data-cy="search-instituicao-id"]').click();
        cy.contains(dadosAcademicos.siglaUF).click();
        cy.get('[data-cy="search-unidade-id"]').click();
        cy.contains(dadosAcademicos.siglaUnidade).click();
        cy.get('[data-cy="search-nivel-academico-id"]').click();
        cy.contains(dadosAcademicos.nivel).click();
        cy.get('[data-cy="lattes"]').clear().type(dadosAcademicos.lattes);
        cy.get('[data-cy="linkedin"]').clear().type(dadosAcademicos.linkedin);
        cy.get('[data-cy="menu-salvar"]').click();
        cy.get(".css-1ky4us2.ens3bun6").should("be.visible");
        cy.get('[data-cy="add-areas-de-conhecimento"]').click();
        cy.get('[data-cy="search-grande-area-id"]')
          .should("be.visible")
          .click();
        cy.get(
          '[data-cy="' +
            toCyString(dadosAcademicos.areaGrandeConhecimento) +
            '"]'
        ).click();
        cy.get('[data-cy="search-area-id"]').should("be.visible").click();
        cy.contains(dadosAcademicos.areaConhecimento).click();
        cy.get('[data-cy="search-sub-area-id"]').should("be.visible").click();
        cy.contains(dadosAcademicos.subArea).click();
        cy.get('[data-cy="search-especialidade-id"]')
          .should("be.visible")
          .click();
        cy.contains(dadosAcademicos.especialidade).click();
        cy.get('[data-cy="areaDeConhecimento-confirmar"]').click();
        cy.get(".css-1ky4us2.ens3bun6").should("be.visible");
      });
    });

    it("Completa a seção de dados profissionais com dados validos", () => {
      cy.fixture("completar-cadastro").then((dadosProfissionais) => {
        cy.get('[data-cy="dados-profissionais"]').should("be.visible").click();
        cy.contains("Possuo vínculo institucional").should("be.visible");
        cy.contains("Possuo vínculo institucional").click();
        cy.wait(TEMPO_ESPERA_CARREGAMENTO);
        cy.contains("Possuo vínculo institucional").click();
        cy.get('[data-cy="search-tipo-vinculo-instituciona"]')
          .should("be.visible")
          .click();
        cy.get(
          '[data-cy="' + toCyString(dadosProfissionais.vinculo) + '"]'
        ).click();
        cy.contains("Possuo vínculo empregatício").should("be.visible");
        cy.contains("Possuo vínculo institucional").click();
        cy.wait(TEMPO_ESPERA_CARREGAMENTO);
        cy.contains("Possuo vínculo institucional").click();
        cy.get(".css-1rhkmrg.e13cwml20").should("be.visible");
        cy.get('[data-cy="vinculoInstitucional.inicioServico"]').click();
        cy.get('[data-cy="vinculoInstitucional.inicioServico"]')
          .clear()
          .type(dadosProfissionais.data);
        cy.get('[data-cy="search-regime-trabalho-id"]')
          .should("be.visible")
          .click();
        cy.get(
          '[data-cy="' + toCyString(dadosProfissionais.regime) + '"]'
        ).click();
        cy.get('[data-cy="vinculoInstitucional.funcao"]')
          .clear()
          .type(dadosProfissionais.funcao);
        cy.get('[data-cy="vinculoInstitucional.inicioFuncao"]').click();
        cy.get('[data-cy="vinculoInstitucional.inicioFuncao"]')
          .clear()
          .type(dadosProfissionais.dataFuncao);
        cy.get('[data-cy="menu-salvar"]').click();
        cy.get(".css-1ky4us2.ens3bun6").should("be.visible");
      });
    });

    it("Completa a seção de documentos pessoais com dados válidos", () => {
      cy.fixture("completar-cadastro").then((dadosDocumentos) => {
        cy.get('[data-cy="documentos-pessoais"]').should("be.visible").click();
        cy.contains("Selecione uma opção").should("be.visible").click();
        cy.get('[data-cy="documento-de-identificacao-com-f"]').click();

        //Como os testes são executados várias vezes, quando ja se tem um arquivo upado
        //vamos apaga-lo e realizar o upload novamente
        removerArquivoSeExistir();

        cy.get('[data-cy="usuarioAnexo-upload"]').selectFile(
          "cypress/fixtures/rg.pdf",
          { force: true }
        );
        cy.get(".css-1ky4us2.ens3bun6").should("be.visible");
      });
    });
  });
});
