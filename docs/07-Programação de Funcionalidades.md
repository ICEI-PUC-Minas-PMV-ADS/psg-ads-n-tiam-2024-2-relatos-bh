# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

RF003 foi desenvolvido utilizando o banco de dados NoSql FireBase que possui diversas funcionalidades que pode facilitar e ajudar na produção desta funcionalidade.
Pode ser testado a partir desta URL -> https://relatabh.azurewebsites.net/auth/login, pode-se ultilizar o postman para isto utilizando o metodo POST, o body deve serguir o seguinte modelo:

| {                           |
|   "email": "string",        |
|   "password": "string",     |
|   "returnSecureToken": true,|
|   "name": "string"          |
| }                           |

Para testes, foi criado um user no banco de dados, que pode ser logado com o seguinte body: 

| {                                 |
|   "email": "UserTester@gmail.com",|
|   "password": "TesterPass24",     |
|   "returnSecureToken": true,      |
|   "name": "User Tester"           |
| }                                 |