# 🤖 Gerador de Questões para Revisão de ADS

## 📖 Descrição

O Gerador de Questões para Revisão de ADS é uma aplicação web que utiliza Inteligência Artificial através da API OpenRouter para gerar questões de revisão sobre conteúdos relacionados ao curso de Análise e Desenvolvimento de Sistemas.

O usuário informa um tema de estudo e o sistema gera automaticamente questões de múltipla escolha, gabarito e explicações das respostas, auxiliando na preparação para provas e avaliações.

---

## 🎯 Objetivo

Auxiliar estudantes de Análise e Desenvolvimento de Sistemas na revisão de conteúdos acadêmicos por meio da geração automática de questões utilizando modelos de linguagem (LLM).

---

## 🛠 Tecnologias Utilizadas

* Node.js
* Express.js
* OpenRouter API
* HTML5
* CSS3
* JavaScript
* Dotenv
* CORS

---

## 📂 Estrutura do Projeto

```text
atividade-openrouter-express/
│
├── package.json
├── server.js
├── .env
│
└── public/
    └── index.html
```

---

## ⚙️ Instalação

Clone ou baixe o projeto.

Instale as dependências:

```bash
npm install
```

---

## 🔑 Configuração da Chave da API

Crie um arquivo chamado `.env` na raiz do projeto:

```env
OPENROUTER_API_KEY=sua_chave_aqui
```

Substitua `sua_chave_aqui` pela chave gerada em sua conta OpenRouter.

---

## ▶️ Executando a Aplicação

Inicie o servidor:

```bash
npm start
```

Após iniciar, o terminal exibirá:

```text
Servidor rodando em http://localhost:3000
```

Abra o navegador e acesse:

```text
http://localhost:3000
```

---

## 🚀 Como Utilizar

1. Abra a aplicação no navegador.
2. Digite um tema relacionado à área de ADS.
3. Clique no botão **Gerar Questões**.
4. Aguarde a resposta da Inteligência Artificial.

### Exemplos de temas

* API REST
* Banco de Dados
* Docker
* AWS
* Estrutura de Dados
* Programação Orientada a Objetos
* Redes de Computadores

---

## 🔄 Funcionamento

1. O usuário informa um tema.
2. A aplicação envia a solicitação para a API local.
3. O servidor consulta o modelo de linguagem através da OpenRouter.
4. A Inteligência Artificial gera:

   * 5 questões de múltipla escolha;
   * 4 alternativas por questão;
   * gabarito;
   * explicação resumida das respostas.
5. O resultado é exibido na tela.

---

## 📋 Exemplo de Entrada

```text
API REST
```

## 📋 Exemplo de Saída

```text
Questão 1
...

Questão 2
...

Questão 3
...

Questão 4
...

Questão 5
...

Gabarito
1-A
2-C
3-B
4-D
5-A

Explicações
...
```

---

## 👩‍💻 Autora

Rafaela Martins

Projeto desenvolvido para a disciplina de Fundamentos de Inteligência Artificial do curso de Análise e Desenvolvimento de Sistemas.
