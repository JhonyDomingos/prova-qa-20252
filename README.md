# Projeto QA - Testes Automatizados com Cypress

Este projeto contém testes automatizados E2E (End-to-End) para o site do Governo da Paraíba utilizando Cypress e Cucumber.

## 📋 Pré-requisitos

- Node.js (versão 24 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd prova-qa-20252
```

2. Instale as dependências:
```bash
npm install
```

## 🧪 Executando os Testes

### Modo Interativo (Interface Gráfica)

Para abrir o Cypress Test Runner em modo interativo:

```bash
npx cypress open
```

Depois:
1. Clique em "E2E Testing"
2. Escolha o navegador
3. Selecione os testes que deseja executar

### Modo Headless (Linha de Comando)

Para executar todos os testes em modo headless:

```bash
npx cypress run
```

Para executar um teste específico:

```bash
npx cypress run --spec "cypress/e2e/feature/01-acesso-pagina-inicial.feature"
```


## 🧩 Funcionalidades Testadas
### Site que foi o alvo dos testes https://paraiba.pb.gov.br/
### 1. Acesso à Página Inicial
- Validação do carregamento da página
- Verificação do logo do site
- Aceite de cookies

### 2. Navegação pelo Menu
- Abertura do menu hamburguer
- Navegação pelas opções do menu

### 3. Conheça a Paraíba
- Visualização da seção de vídeos
- Verificação dos vídeos do YouTube
- Validação dos iframes

### 4. Redes Sociais
- Verificação dos links das redes sociais
- Validação das URLs:
  - Facebook
  - Instagram
  - Twitter
  - YouTube

## 🛠️ Tecnologias Utilizadas

- **Cypress**: Framework de testes E2E
- **Cucumber**: BDD (Behavior Driven Development)
- **cypress-cucumber-preprocessor**: Integração Cypress + Cucumber

## 📝 Escrevendo Novos Testes

1. Crie um arquivo `.feature` em `cypress/e2e/feature/`
2. Escreva os cenários em Gherkin (português)
3. Implemente os steps em `cypress/e2e/steps/`

Exemplo de cenário:
```gherkin
# language: pt

Funcionalidade: Minha Nova Funcionalidade
  Como um usuário
  Eu quero testar algo
  Para garantir que funciona

  Cenário: Teste simples
    Dado que eu acesso "https://exemplo.com"
    Quando eu clico em "Botão"
    Então eu devo ver "Mensagem de sucesso"
```

## 🐛 Troubleshooting

### Erro: "Step implementation missing"
- Verifique se o step está implementado em `cypress/e2e/steps/`
- Certifique-se de que o texto do step corresponde exatamente ao definido no `.feature`

### Erro: "support file missing"
- Verifique se existe o arquivo `cypress/support/e2e.js`
- Execute `npm install` novamente

### Erro: "Cannot read properties of undefined"
- Adicione `Cypress.on('uncaught:exception', () => false)` no arquivo de steps
- Isso previne que erros JavaScript da página quebrem os testes

## 👤 Autor
- Gabriel Marques
- Jhonatan Domingos