# Padrões de Branches, Commits, Pull Requests e Testes

Este documento define os padrões adotados pelo grupo para organização do repositório, nomenclatura de branches, mensagens de commit, Pull Requests e estrutura dos testes automatizados com Cypress.

## 1. Branch principal

A branch principal do repositório é:

```txt
main
```

A branch `main` deve representar a versão estável do trabalho.

Alterações não devem ser feitas diretamente na `main`. Toda mudança deve ser realizada em uma branch específica e integrada por meio de Pull Request.

## 2. Fluxo de trabalho

O fluxo padrão do repositório é:

```txt
main -> branch de trabalho -> Pull Request -> revisão -> merge na main
```

Antes de iniciar uma nova alteração, a branch `main` local deve ser atualizada:

```bash
git checkout main
git pull origin main
```

Em seguida, deve ser criada uma branch específica para a tarefa:

```bash
git checkout -b tipo/descricao-curta
```

Após finalizar a alteração, a branch deve ser enviada para o GitHub:

```bash
git push -u origin tipo/descricao-curta
```

A integração com a `main` deve ocorrer apenas após abertura, revisão e aprovação de um Pull Request.

## 3. Padrão de branches

As branches devem seguir o formato:

```txt
tipo/descricao-curta
```

Regras gerais:

- usar letras minúsculas;
- não usar acentos;
- não usar espaços;
- separar palavras com hífen;
- usar nomes objetivos;
- indicar claramente o propósito da alteração.

Tipos permitidos:

| Tipo | Finalidade |
|---|---|
| `test/` | Criação ou alteração de testes Cypress, fixtures e arquivos de teste |
| `fix/` | Correção de erro em teste, seletor, fixture ou configuração |
| `chore/` | Configuração, dependências ou organização do projeto |
| `refactor/` | Reorganização de código sem alteração de comportamento |
| `docs/` | Documentação técnica do repositório |

Exemplos:

```txt
test/completar-cadastro
test/submeter-proposta
test/fixtures
fix/seletores-cypress
fix/login-cypress
chore/configuracao-cypress
docs/padroes-git
```

## 4. Padrão de commits

As mensagens de commit devem seguir o formato:

```txt
tipo(escopo): descricao curta
```

Regras gerais:

- escrever em português;
- usar letras minúsculas;
- não finalizar com ponto;
- indicar a alteração de forma objetiva;
- evitar mensagens genéricas;
- evitar commits grandes com alterações não relacionadas.

Tipos permitidos:

| Tipo | Finalidade |
|---|---|
| `test` | Criação ou alteração de testes Cypress, fixtures e arquivos de teste |
| `fix` | Correção de erro |
| `chore` | Configuração, dependências ou organização |
| `refactor` | Reorganização de código sem alteração funcional |
| `docs` | Documentação técnica do repositório |
| `style` | Ajustes de formatação sem alteração funcional |

Escopos recomendados:

```txt
cadastro
proposta
fixtures
cypress
config
seletores
upload
login
padroes
```

Exemplos válidos:

```bash
git commit -m "docs(padroes): adiciona padrao de branches commits e prs"
```

```bash
git commit -m "test(cadastro): cria teste de completar cadastro"
```

```bash
git commit -m "test(cadastro): adiciona preenchimento da secao endereco"
```

```bash
git commit -m "test(cadastro): adiciona preenchimento de dados academicos"
```

```bash
git commit -m "test(proposta): cria teste de submissao de proposta"
```

```bash
git commit -m "test(proposta): adiciona fluxo de localizacao do edital"
```

```bash
git commit -m "test(proposta): adiciona preenchimento da secao caracterizacao"
```

```bash
git commit -m "test(fixtures): adiciona dados para completar cadastro"
```

```bash
git commit -m "test(fixtures): adiciona dados para submissao de proposta"
```

```bash
git commit -m "fix(seletores): corrige seletor do botao salvar perfil"
```

```bash
git commit -m "fix(login): ajusta comando customizado de autenticacao"
```

```bash
git commit -m "chore(config): adiciona dependencias do cypress"
```

```bash
git commit -m "refactor(cypress): reorganiza comandos customizados"
```

Exemplos inválidos:

```txt
teste
arrumei
mudancas
final
agora vai
coisas
commit do grupo
atualizacao
```

## 5. Pull Requests

Todo Pull Request deve ser aberto para a branch `main`.

As Pull Requests serão revisadas e aprovadas por `@miguelpaullo` ou `@reihashiokaa`.

O título do Pull Request deve seguir o mesmo padrão das mensagens de commit:

```txt
tipo(escopo): descricao curta
```

Exemplos:

```txt
test(cadastro): adiciona teste de completar cadastro
```

```txt
test(proposta): adiciona fluxo de submissao de proposta
```

```txt
fix(seletores): corrige seletores instaveis no cadastro
```

```txt
docs(padroes): adiciona padrao de uso do git
```

## 6. Modelo de descrição de Pull Request

Todo Pull Request deve seguir o modelo abaixo:

```md
## O que foi feito

Descreva objetivamente as alterações realizadas.

## Arquivos alterados

- 
- 
- 

## Como testar

1. 
2. 
3. 

## Evidências

Informe o resultado da execução local, prints, logs ou observações relevantes.

## Observações

Inclua pendências, limitações ou pontos que exigem atenção na revisão.
```

## 7. Critérios de revisão

Antes da aprovação de um Pull Request, devem ser verificados os seguintes pontos:

- a branch segue o padrão definido;
- os commits seguem o padrão definido;
- os arquivos estão nas pastas corretas;
- o código está legível;
- o teste está coerente com o fluxo solicitado;
- os nomes dos blocos `describe`, `context` e `it` são claros;
- as fixtures estão organizadas;
- não há dados reais ou sensíveis;
- não há arquivos desnecessários;
- a descrição do Pull Request informa como testar;
- não há conflitos com a branch `main`.

## 8. Padrão dos testes Cypress

Os testes devem seguir o mesmo padrão estrutural do teste de exemplo existente no repositório, `criar-conta.cy.ts`.

A estrutura padrão deve utilizar:

- `describe` para agrupar o fluxo principal;
- `context` para agrupar o cenário ou conjunto de cenários relacionados;
- `it` para representar um comportamento específico esperado;
- `cy.fixture()` para carregar dados de teste;
- comandos customizados já existentes em `cypress/support/commands.ts`, quando aplicável;
- `beforeEach` para ações repetidas entre testes, como login e navegação inicial;
- comentários apenas quando forem necessários para esclarecer fluxos complexos.

## 9. Organização dos testes obrigatórios

Os testes obrigatórios devem ser criados nos seguintes arquivos:

```txt
cypress/e2e/completar-cadastro.cy.ts
cypress/e2e/submeter-proposta.cy.ts
```

As fixtures principais devem ser criadas em:

```txt
cypress/fixtures/completar-cadastro.json
cypress/fixtures/submeter-proposta.json
```

Arquivos utilizados em upload também devem ficar em:

```txt
cypress/fixtures/
```

## 10. Padrão para `completar-cadastro.cy.ts`

Arquivo:

```txt
cypress/e2e/completar-cadastro.cy.ts
```

Fixture:

```txt
cypress/fixtures/completar-cadastro.json
```

Estrutura base:

```ts
import { toCyString } from "../helpers/kebab.helper";

describe("Completar cadastro do usuário", () => {
  context("Completar cadastro com dados válidos", () => {
    beforeEach(() => {
      cy.visit("/");

      cy.fixture("completar-cadastro").then((dados) => {
        cy.typeLogin(dados.login.email, dados.login.senha);
        cy.get('[data-cy="user-menu"]').should("be.visible");
      });
    });

    it("Teste para preenchimento da seção Endereço", () => {
      cy.fixture("completar-cadastro").then((dados) => {
        // fluxo da seção Endereço
      });
    });

    it("Teste para preenchimento da seção Dados Acadêmicos", () => {
      cy.fixture("completar-cadastro").then((dados) => {
        // fluxo da seção Dados Acadêmicos
      });
    });

    it("Teste para preenchimento da seção Dados Profissionais", () => {
      cy.fixture("completar-cadastro").then((dados) => {
        // fluxo da seção Dados Profissionais
      });
    });

    it("Teste para envio da seção Documentos Pessoais", () => {
      cy.fixture("completar-cadastro").then((dados) => {
        // fluxo da seção Documentos Pessoais
      });
    });
  });
});
```

---

## 11. Padrão para `submeter-proposta.cy.ts`

Arquivo:

```txt
cypress/e2e/submeter-proposta.cy.ts
```

Fixture:

```txt
cypress/fixtures/submeter-proposta.json
```

Estrutura base:

```ts
import { toCyString } from "../helpers/kebab.helper";

describe("Submissão de proposta", () => {
  context("Submissão de proposta com dados válidos", () => {
    beforeEach(() => {
      cy.visit("/");

      cy.fixture("submeter-proposta").then((dados) => {
        cy.typeLogin(dados.login.email, dados.login.senha);
        cy.get('[data-cy="user-menu"]').should("be.visible");
      });
    });

    it("Teste para localização do edital e criação da proposta", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        // fluxo de localização do edital e criação da proposta
      });
    });

    it("Teste para preenchimento da seção Caracterização", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        // fluxo da seção Caracterização
      });
    });

    it("Teste para preenchimento da seção Coordenação", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        // fluxo da seção Coordenação
      });
    });

    it("Teste para preenchimento da seção Apresentação", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        // fluxo da seção Apresentação
      });
    });

    it("Teste para preenchimento da seção Anexos", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        // fluxo da seção Anexos
      });
    });

    it("Teste para verificação de pendências e submissão da proposta", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        // fluxo de finalização, verificação de pendências e submissão
      });
    });
  });
});
```

---

## 12. Padrão para fixtures

As fixtures devem ficar em:

```txt
cypress/fixtures/
```

Fixtures principais:

```txt
completar-cadastro.json
submeter-proposta.json
```

Arquivos usados em upload também devem ficar em `cypress/fixtures/`.

Exemplos de nomes:

```txt
documento-pessoal-teste.pdf
comprovante-teste.pdf
anexo-proposta-teste.pdf
```

Padrão de organização recomendado para fixture de cadastro:

```json
{
  "login": {
    "email": "",
    "senha": ""
  },
  "endereco": {},
  "dadosAcademicos": {},
  "dadosProfissionais": {},
  "documentosPessoais": {}
}
```

Padrão de organização recomendado para fixture de proposta:

```json
{
  "login": {
    "email": "",
    "senha": ""
  },
  "edital": {},
  "caracterizacao": {},
  "coordenacao": {},
  "apresentacao": {},
  "anexos": {},
  "finalizacao": {}
}
```

---

## 13. Padrão para arquivos de upload

Arquivos usados em upload devem possuir nomes claros e finalidade identificável.

Exemplos:

```txt
documento-pessoal-teste.pdf
comprovante-teste.pdf
anexo-proposta-teste.pdf
```

Os arquivos devem ser armazenados em:

```txt
cypress/fixtures/
```

## 14. Checklist antes de abrir Pull Request

Antes de abrir um Pull Request, verificar:

```txt
[ ] A branch segue o padrão definido
[ ] Os commits seguem o padrão definido
[ ] Os arquivos estão nas pastas corretas
[ ] O código segue o padrão do teste de exemplo
[ ] Os blocos describe, context e it estão claros
[ ] As fixtures necessárias foram criadas ou atualizadas
[ ] Não há dados reais ou sensíveis
[ ] Não há arquivos desnecessários
[ ] O teste foi executado ou revisado localmente
[ ] A descrição do Pull Request informa como testar
```

## 15. Comandos úteis

Atualizar a branch principal:

```bash
git checkout main
git pull origin main
```

Criar uma branch:

```bash
git checkout -b test/completar-cadastro
```

Verificar alterações:

```bash
git status
```

Adicionar arquivos:

```bash
git add .
```

Criar commit:

```bash
git commit -m "test(cadastro): adiciona preenchimento da secao endereco"
```

Enviar branch:

```bash
git push -u origin test/completar-cadastro
```

Voltar para a branch principal:

```bash
git checkout main
```

Atualizar a branch principal após merge:

```bash
git pull origin main
```