<!-- CABEÇALHO -->
<div id="readme-top" align="center">
    <h1>
       👥 Users Crud 👥
    </h1>
    <p>
        <a href="#%EF%B8%8F-sobre-o-projeto">Sobre o Projeto</a> •
        <a href="#-Endpoints">Funcionalidades</a> •
        <a href="#%EF%B8%8F-instalação">Instalação</a> •
        <a href="#-utilização">Utilização</a> •
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

<!-- INSTALAÇÃO -->

## ⚙️ Instalação

> Este projeto requer que o [Git](https://git-scm.com/), o [Node.js](https://nodejs.org/en/) e o [Docker](https://www.docker.com/) estejam instalados em sua máquina.

- Faça o fork desse repositório.

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

- Adicione o arquivo `.env` na raiz do projeto e configure suas variáveis de ambiente seguindo o modelo do arquivo `.env.example`):

```dotenv
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database
JWT_SECRET=your_secret_key
```

- Inicie o contêiner docker referente ao banco de dados PostgreSQL de acordo com as configurações do arquivo `docker-compose.yml`:

```Bash
$ docker-compose up
```

- Execute as _migrations_ para criar as tabelas no banco de dados:

```Bash
$ yarn typeorm migration:run
```

- Execute a aplicação:

```Bash
$ yarn dev
```

Pronto! A aplicação, agora, estará sendo executada através na rota https://localhost:3000/.

<!-- UTILIZAÇÃO -->

## 🚀 Utilização

> Para utilizar a aplicação, é necessário o uso de uma API Client, como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download).

Verifique a [documentação](https://kenmarcos.github.io/users-crud_nodejs/) da API.

<!-- TECNOLOGIAS -->

## 🛠️ Tecnologias

Para o desenvolvimento desse projeto, as seguintes ferramentas foram utilizadas:

- **[Node.js](https://nodejs.org/)**
- **[Express.js](https://expressjs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[TypeORM](https://typeorm.io/)**
- **[Docker](https://www.docker.com/)**
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)**
- **[JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)**
- **[Yup](https://www.npmjs.com/package/yup)**

## 👨‍💻 Autor

<img style="border-radius: 15%;" src="https://gitlab.com/uploads/-/system/user/avatar/8603970/avatar.png?width=400" width=70 alt="author-profile-picture"/>

Marcos Kenji Kuribayashi

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/marcos-kuribayashi/) [![Gmail Badge](https://img.shields.io/badge/-marcosken13@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:marcosken13@gmail.com)

---

Desenvolvido por Marcos Kenji Kuribayashi 😉
