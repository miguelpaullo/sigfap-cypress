import { toCyString } from "../helpers/kebab.helper";

describe("Submeter proposta no sistema", () => {
  context("Submeter proposta com dados válidos", () => {

    beforeEach(() => {
        cy.fixture("criar-conta").then((dados) => {
        cy.typeLogin(dados.email, dados.senha);
      });
    })
    
    it("Completa Informações iniciais com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        cy.navegacaoSubmissao("Edital 2026-0001 Sig Cypress");
        cy.get('[data-cy="titulo"]').should("be.visible").click();
        cy.get('[data-cy="titulo"]').type(dados.titulo);
        cy.get('[data-cy="search-tipo-evento-id"]').click();
        cy.contains(dados.evento).click();
        cy.get('[data-cy="search-estado-execucao-evento"]').click();
        cy.contains(dados.estado).click();
        cy.get('[data-cy="search-municipio-execucao-evento"]').click();
        cy.contains(dados.cidade).click();
        cy.get('[data-cy="duracao"]').click();
        cy.get('[data-cy="duracao"]').clear().type(dados.duracao);
        cy.get('[data-cy="instituicao-executora-id"]').click();
        cy.get('[data-cy="search-unidade-executora-id"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Completa Informações Complementares com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="informacoes-complementares"]').click();
        cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-218-item-pequena-faturamento-ano-de-r-360"]').should("be.visible").click();
        cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-219"]').type(dados.perguntaComplementar);
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Confirma Dados pessoais com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="coordenacao"]').click();
        cy.get('[data-cy="dados-pessoais"]').click();

        cy.get('[data-cy="criadoPor.nome"]').should("be.visible").click();
        cy.get('[data-cy="sexo"]').clear().type(dados.sexo);
        cy.get('[data-cy="search-pais-id"]').clear().type(dados.pais);
        cy.get('[data-cy="search-raca-cor-id"]').clear().type(dados.raca);
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Confirma Endereço com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="coordenacao"]').click();
        cy.get('[data-cy="endereco"]').click();

        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Confirma Dados Academicos com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="coordenacao"]').click();
        cy.get('[data-cy="dados-academicos"]').click();

        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Confirma Dados Profissionais com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
      
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="coordenacao"]').click();
        cy.get('[data-cy="dados-profissionais"]').click();

        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Completa Descrição com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="apresentacao"]').click();
        cy.get('[data-cy="descricao"]').click();

        cy.get('[data-cy="formularioPropostaDescritiva.pergunta-221-item-opcao-1"]').should("be.visible").click();
        cy.get('[data-cy="formularioPropostaDescritiva.pergunta-222"]').type(dados.perguntaComplementar);
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Completa a seção Bolsa com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="apresentacao"]').click();
        cy.get('[data-cy="orcamento"]').click();
        cy.get('[data-cy="bolsa"]').click();

        cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="search-modalidade-bolsa-id"]').click(); 
        cy.contains("AT").click(); 
        cy.get('[data-cy="search-nivel-bolsa-id"]').click();
        cy.contains("NS (R$ 770,00)").click(); 
        cy.get('[data-cy="rubricaBolsaForm.quantidade"]').clear().type(dados.quantidadeBolsa);
        cy.get('[data-cy="search-duracao"]').click();
        cy.contains("4").click(); 
        cy.get('[data-cy="rubricaBolsaForm.valorTotal"]').clear().type(dados.valorTotal);
        cy.get('[data-cy="rubricaBolsa-confirmar"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Completa o Financiamento com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="apresentacao"]').click();
        cy.get('[data-cy="orcamento"]').click();

        cy.get('[data-cy="faixa-de-financiamento"]').click();
        cy.get('[data-cy="search-faixa-financiamento-id"]').click();
        cy.contains("Faixa A (R$ 500,00 - R$ 10.000,00)").click(); 
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Completa a seção anexos com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {

        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="anexos"]').click();
        cy.get('[data-cy="documentos-da-proposta"]').should("be.visible").click();
        cy.contains("Selecione uma opção").should("be.visible").click();
        cy.get('[data-cy="carta-de-apresentacao"]').click();
        cy.get('[data-cy="documentoPropostaAnexo-upload"]').selectFile('cypress/fixtures/carta.pdf', {force: true});

        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Aceita o termo de aceite", () => {
      cy.fixture("submeter-proposta").then((dados) => {

        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="finalizacao"]').click();
        cy.get('[data-cy="termo-de-aceite"]').click();
        cy.get('[data-cy="termo-de-aceite-aceito-box"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Completa a seção de visualização com dados válidos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        
        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="finalizacao"]').click();
        cy.get('[data-cy="visualizacao-da-proposta"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(300);
      });
    });

    it("Verifica se existe pendências e submete proposta", () => {
      cy.fixture("submeter-proposta").then((dados) => {

        cy.get('[data-cy="propostas-edital-fusao-nuclear"]').click();
        cy.get('[data-cy="menu-verificar-pendencias"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.contains("Submeter proposta").click();
        cy.get('[data-cy="sim-continuar-button"]').click();
        cy.get('[data-cy="confirmar-button"]').click();
        cy.wait(300);
      });
    });

  });
});