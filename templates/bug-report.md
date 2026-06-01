# Como Descrever um Bug Report no Git

Este guia define o padrão de descrição para issues de bug. O objetivo é garantir que qualquer pessoa do time consiga entender e reproduzir o defeito sem precisar pedir informações adicionais.

---

## Estrutura padrão

```
US: US-XX: [nome da user story]
CT: CT-XX 

Comportamento esperado
[O que deveria acontecer, baseado nas regras de negócio]

Comportamento atual
[O que realmente acontece, seja específico, inclua mensagens de erro se houver]

Passos para reproduzir
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

Ambiente
[Ex: Homologação v2.3.1]

Severidade
[Crítica / Alta / Média / Baixa]

Evidências
[Link ou anexo de print, vídeo ou log]
```

---

## Título da issue

O título é a primeira coisa que o time lê. Deve deixar claro **onde** o problema ocorre e **qual** é o problema.

|❌ Vago|✅ Descritivo|
|-|-|
|"Botão não funciona"|"Campo 'Responsável' lista membros com convite recusado na etapa de Atividades"|
|"Erro na listagem"|"Filtro de status não remove itens arquivados na tela de Propostas"|

**Formato sugerido:** `[Tela / Componente] — [descrição objetiva do problema]`

---

## Campos da descrição

### US e CT

Referencie a user story sendo testada e o caso de teste vinculado.

---

### Comportamento esperado

Descreva o que **deveria** acontecer.

> Ex: \*"O campo 'Responsável' deve listar apenas membros com status de convite 'Aceito', conforme regra da etapa de Atividades."\*

---

### Comportamento atual

Descreva o que **realmente acontece**. Se houver mensagem de erro, copie o texto exato.

> Ex: *"Membros com status de convite 'Recusado' continuam sendo exibidos como opção no campo 'Responsável'."\*

---

### Passos para reproduzir

Lista numerada com as ações para chegar ao bug. Seja específico, inclua dados usados e o passo exato onde o problema aparece.

```
1. Acessar o menu "Criar Proposta"
2. Avançar até a etapa "Membros"
3. Adicionar um pesquisador à proposta
4. Fazer o pesquisador recusar o convite
5. Acessar a etapa "Atividades"
6. Clicar no campo "Responsável"  ← bug ocorre aqui
```

---

### Ambiente

Informe onde o bug foi encontrado.

> Ex: `Homologação v2.3.1` ou `Produção v2.3.1 / Chrome 122 / Windows 11`

---

### Severidade

|Severidade|Quando usar|
|-|-|
|**Crítica**|Sistema inoperante, perda de dados, sem contorno|
|**Alta**|Funcionalidade principal comprometida|
|**Média**|Existe contorno, mas afeta o uso|
|**Baixa**|Impacto visual ou pequeno desvio|

---

### Evidências

Anexe pelo menos uma evidência. Quanto mais claro o visual, menos tempo o desenvolvedor gasta entendendo o contexto.

* Screenshot da tela com o problema
* Gravação de tela (especialmente para bugs de fluxo)
* Log de erro (console, rede ou backend)

---

## Exemplo completo

**Título:** Campo "Responsável" lista membros com convite recusado na etapa de Atividades

---

**US:** US-13: Preencher atividades  
**CT:** CT-001

**Comportamento esperado**  
O campo "Responsável" deve listar apenas membros com status de convite "Aceito", conforme regra da etapa de Atividades.

**Comportamento atual**  
Membros com status de convite "Recusado" continuam sendo exibidos como opção no campo "Responsável".

**Passos para reproduzir**

1. Acessar o menu "Criar Proposta"
2. Avançar até a etapa "Membros"
3. Adicionar um pesquisador à proposta
4. Fazer o pesquisador recusar o convite
5. Acessar a etapa "Atividades"
6. Clicar no campo "Responsável"

**Ambiente**  
Homologação v2.3.1

**Severidade**  
Alta

**Evidências**  
[screenshot-responsavel.png]

---

## Checklist antes de abrir a issue

* [ ] O título identifica onde e qual é o problema
* [ ] O comportamento esperado está baseado em critério de aceite ou regra de negócio
* [ ] O comportamento atual descreve o desvio de forma objetiva
* [ ] Os passos são suficientes para outra pessoa reproduzir o bug
* [ ] O ambiente está preenchido
* [ ] A severidade foi classificada
* [ ] Há pelo menos uma evidência anexada

