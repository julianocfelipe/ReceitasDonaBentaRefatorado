# Changelog

Todas as mudanças notáveis para este projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-05-27

### Adicionado

- Conversão para TypeScript: Reescrita completa do código para utilizar TypeScript, proporcionando maior segurança de tipos e melhor manutenção.
- Organização de pastas: Estrutura reorganizada com separação clara entre components, screens, types e arquivos de configuração. (`assets`, `components`, `screens/Login`, `types`).
- Configuração de navegação básica.
- Configuração do TypeScript: Inclusão do arquivo tsconfig.json para configurar o compilador TypeScript.
- Ponto de entrada index.ts: Criação de um ponto de entrada centralizado para a aplicação.
- Adição de Linters para verificação de erros no código.

### Alterado

- Refatoração de componentes: Melhoria na estrutura e legibilidade dos componentes existentes, promovendo reutilização e coesão.
- Atualização de dependências: Inclusão e atualização de bibliotecas essenciais para o funcionamento do projeto no `package.json`.

### Removido

- Código JavaScript antigo: Remoção de arquivos e trechos de código obsoletos em JavaScript, substituídos por implementações em TypeScript.
- Banco de dados local (db.js): Eliminação do arquivo db.js, com a intenção de adotar soluções mais robustas para gerenciamento de dados.

### Corrigido

- Corrigido bugs por o código estar como dependencias antigas.

---

## [1.0.0] - 2025-05-27 (Data de Lançamento Inicial)

### Adicionado

- Configuração inicial do projeto React Native com TypeScript.
- Estrutura de pastas básica (`assets`, `components`, `screens/Login`, `types`).
- Funcionalidade de tela de Login inicial (apenas UI, sem lógica de autenticação).
- Configuração de navegação básica.
- Primeiro commit das receitas Dona Benta em formato de dados (JSON, TS, etc.).
