<!-- CABEÇALHO -->
<div id="readme-top" align="center">
    <h1>
       👥 Users Crud 👥
    </h1>
    <p>
        <a href="#%EF%B8%8F-sobre-o-projeto">Sobre o Projeto</a> •
        <a href="#-funcionalidades">Funcionalidades</a> •
        <a href="#-layout">Layout</a> •
        <a href="#%EF%B8%8F-instalação">Instalação</a> •
        <a href="#%EF%B8%8F-tecnologias">Tecnologias</a> •
        <a href="#-autor">Autor</a>
    </p>
</div>

<!-- SOBRE O PROJETO -->

## 🖥️ Sobre o Projeto

> Projeto desenvolvido como parte das atividades do curso da Kenzie Academy Brasil.

Esse projeto consiste em uma aplicação back-end com um CRUD básico de usuários.

O objetivo do desenvolvimento desse projeto era praticar e aprimorar as habilidades em Node.js, Express.js e TypeORM.

Esse serviço possui uma API REST integrada a um banco de dados PostegreSQL.

Através dessa aplicação, um usuário pode se cadastrar, fazer login, atualizar seus dados, listar todos os usários cadastrados e remover um usuário.

<!-- ENDPOINTS -->

## 💡 Endpoints

| Método | Endpoint       | Responsabilidade                                                                                        |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------- |
| POST   | /users         | Cria um usuário                                                                                         |
| POST   | /login         | Gera um token JWT recebendo email e password no corpo da requisição como JSON.                          |
| GET    | /users         | Lista todos os usuários                                                                                 |
| GET    | /users/profile | Retorna os dados do usuário logado (usuário a qual pertence o token que será necessário neste endpoint) |
| PATCH  | /users         | /<uuid> Atualiza os dados de um usuário                                                                 |
| DELETE | /users         | /<uuid> Deleta usuários do banco                                                                        |

<!-- LAYOUT -->

## 🎨 Layout

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Screenshot_Dashboard.png/800px-Screenshot_Dashboard.png?20190516105902" width=500>

  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Screenshot_Dashboard.png/800px-Screenshot_Dashboard.png?20190516105902" width=500>

  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Screenshot_Dashboard.png/800px-Screenshot_Dashboard.png?20190516105902" width=500>
</p>

<!-- INSTALAÇÃO -->

## ⚙️ Instalação

- Faça o fork desse repositório

- Abra o terminal e clone o repositório:

```Bash
$ git clone git@github.com:<your_user>/users-crud_nodejs.git
```

- Entre no diretório do projeto:

```Bash
$ cd users-crud_nodejs
```

- Instale as dependências:

```Bash
$ yarn install
```

- Adicione o arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
NEXT_PUBLIC_API_URL=https://api.example.com/
.
.
.
```

- Execute a aplicação:

```Bash
$ yarn start
```

Pronto! A aplicação, agora, pode ser acessada através da rota https://localhost:3000/.

<!-- TECNOLOGIAS -->

## 🛠️ Tecnologias

Para o desenvolvimento desse projeto, as seguintes ferramentas foram utilizadas:

- **[React.js](https://pt-br.reactjs.org/)**
- **[Next.js](https://nextjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
  .
  .
  .

## 👨‍💻 Autor

<img style="border-radius: 15%;" src="https://gitlab.com/uploads/-/system/user/avatar/8603970/avatar.png?width=400" width=70 alt="author-profile-picture"/>

Marcos Kenji Kuribayashi

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/marcos-kuribayashi/) [![Gmail Badge](https://img.shields.io/badge/-marcosken13@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:marcosken13@gmail.com)

---

Desenvolvido por Marcos Kenji Kuribayashi 😉
