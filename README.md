# Front-end Projeto X

Documentação de ferramentas e de usabilidade do repositório.


## Instalação
Após clonar o repositório instale as dependências e rode o projeto
```bash
  npm install
  npm start
```
É utilizado formatadores de código como Prettier e ESLint para melhorar qualidade do código. É recomendável adicionar essas configurações ao seu settings.json do VScode para que o código seja formatado automaticamente entre outras vantagens de desenvolvimento e para acompanhar o padrão do projeto corretamente.

Segue as configurações abaixo:
```json
"javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "javascript.validate.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
  "[javascript]": {
    "editor.suggestSelection": "recentlyUsed",
    "editor.suggest.showKeywords": false,
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "emmet.includeLanguages": {
    "django-html": "html",
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "editor.codeActionsOnSave": {

    "source.fixAll.eslint": "explicit",
    "source.fixAll": "explicit"
  },
  "git.enableSmartCommit": true,
  "eslint.validate": [
      {
          "language": "javascript",
          "autoFix": true,
      },
      {
          "language": "javascriptreact",
          "autoFix": true,
      },
  ],
```

## Extensões e outras dependências
Para utilizar das configurações já feitas na seção anterior será necessário instalar essas extensões ao seu VS Code

* ESLint
* editorconfig for VS Code
* Prettier - Code formatter
## Pastas e arquivos do projeto
Explicação dos arquivos do projeto Next
### _app.tsx
O Next.js usa o arquivo app para inicializar as páginas. Sendo assim, conseguimos sobescrever ou controlar essa inicialização. No projeto, foi utilizadar para definir as variaveis de cores padrão e estilos globais. Para saber mais, [clique aqui](https://nextjs.org/docs/pages/building-your-application/routing/custom-app).
### _document.tsx
O Next.js usa o arquivo document para atualizar as tags `<html>` e `<body>`. Sendo assim, conseguimos sobescrever ou controlar essas tags. Para saber mais, [clique aqui](https://nextjs.org/docs/pages/building-your-application/routing/custom-document).


