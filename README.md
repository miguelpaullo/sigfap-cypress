# Cypress SIGFAP - Testes Automatizados

# Link para Issues e Repositório

* [REPOSITÓRIO](https://github.com/miguelpaullo/sigfap-cypress)
* [ISSUES](https://github.com/miguelpaullo/sigfap-cypress/issues)

## Sobre o Projeto

Este repositório contém a implementação dos testes automatizados E2E (End-to-End) desenvolvidos para o sistema Novo SIGFAP utilizando o framework Cypress.

O trabalho foi desenvolvido como atividade prática da disciplina de Verificação, Validação e Testes (VV&T), com o objetivo de automatizar fluxos críticos do sistema e validar funcionalidades sob a perspectiva do usuário final.

---

# Funcionalidades Automatizadas

## 1. Criar Conta

Arquivo:

```text
cypress/e2e/criar-conta.cy.ts
```

Fluxo automatizado:

* Acessar a tela de cadastro.
* Preencher os dados pessoais.
* Informar credenciais de autenticação.
* Aceitar os termos de uso.
* Finalizar o cadastro.

Resultado esperado:

* Conta criada com sucesso.

---

## 2. Completar Cadastro

Arquivo:

```text
cypress/e2e/completar-cadastro.cy.ts
```

Fluxo automatizado:

* Realizar login.
* Acessar a área de perfil.
* Preencher endereço.
* Preencher dados acadêmicos.
* Preencher dados profissionais.
* Realizar upload dos documentos pessoais.
* Salvar as informações.

Resultado esperado:

* Perfil completamente preenchido.

---

## 3. Submeter Proposta

Arquivo:

```text
cypress/e2e/submeter-proposta.cy.ts
```

Fluxo automatizado:

* Realizar login.
* Localizar o edital "Edital 2026-0001 Sig Cypress".
* Criar uma nova proposta.
* Preencher a seção Caracterização.
* Preencher a seção Coordenação.
* Preencher a seção Apresentação.
* Realizar upload dos anexos.
* Validar pendências.
* Submeter a proposta.

Resultado esperado:

* Proposta submetida com sucesso.

---

# Estrutura do Projeto

```text
cypress/
├── e2e/
│   ├── criar-conta.cy.ts
│   ├── completar-cadastro.cy.ts
│   └── submeter-proposta.cy.ts
│
├── fixtures/
│   ├── criar-conta.json
│   ├── completar-cadastro.json
│   ├── submeter-proposta.json
│   └── arquivos-utilizados-nos-uploads
│
├── support/
│   ├── commands.ts
│   └── e2e.ts
```

---

# Pré-requisitos

Instalar:

* Git
* Node.js
* pnpm
* Visual Studio Code (opcional)

Verificar versões:

```bash
git --version
node --version
npm --version
pnpm --version
```

---

# Instalação

Clone o repositório:

```bash
git clone <https://github.com/miguelpaullo/sigfap-cypress>
```

Acesse a pasta:

```bash
cd sigfap-cypress
```

Instale as dependências:

```bash
pnpm install
```

Caso necessário:

```bash
pnpm add cypress --save-dev
pnpm add -D change-case remove-accents
pnpm add cypress-real-events
```

---

# Executando os Testes

Abrir o Cypress:

```bash
pnpm cypress open
```

Ou executar em modo headless:

```bash
pnpm cypress run
```

---

# Configuração dos Dados

Os dados utilizados pelos testes estão localizados na pasta:

```text
cypress/fixtures
```

Antes da execução, verifique:

* Usuário utilizado no login.
* Dados de cadastro.
* Dados da proposta.
* Arquivos utilizados para upload.

---

# Observações Importantes

## Teste de Submissão de Proposta

O teste de submissão de proposta depende do estado atual do usuário informado na fixture.

Para que a automação execute corretamente:

* O usuário não deve possuir uma proposta previamente submetida para o edital "Edital 2026-0001 Sig Cypress".
* Caso exista uma proposta em andamento ou já submetida, o comportamento esperado do fluxo poderá ser alterado.

---

# Limitações Conhecidas

Durante o desenvolvimento foi identificada a necessidade de geração dinâmica dos dados utilizados nas fixtures.

Entretanto, a implementação de uma estratégia de randomização automática dos dados não foi concluída.

Consequências:

* Os testes utilizam dados fixos.
* Determinados cenários podem falhar caso os dados já existam no ambiente.
* Pode ser necessário atualizar manualmente os arquivos JSON antes de novas execuções.

Uma melhoria futura seria implementar geração automática de:

* E-mails únicos;
* CPFs válidos aleatórios;
* Títulos de proposta únicos;
* Dados dinâmicos para evitar conflitos entre execuções.

---

# Tecnologias Utilizadas

* Cypress
* TypeScript
* Node.js
* pnpm

---


# Equipe de Desenvolvimento

Os testes automatizados deste projeto foram desenvolvidos pela equipe:

* Beatriz Vieira Gomes
* Giovana Muhl
* Isabela Garcia
* Maria Eduarda da Silva de Macedo
* Miguel Paulo Rodrigues de Macedo
* Reinaldo Hashioka

---

**Universidade Federal de Mato Grosso do Sul (UFMS)**
Faculdade de Computação (FACOM)

Disciplina: Verificação, Validação e Testes de Software (VV&T)

Projeto: Automação de Testes E2E do Novo SIGFAP utilizando Cypress.
