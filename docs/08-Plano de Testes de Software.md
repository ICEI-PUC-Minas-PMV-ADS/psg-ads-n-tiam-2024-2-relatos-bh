# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

1 - LOGAR: As informações pertinentes para testes são somente email e senha, ou seja, se eles não corresponderem ao banco. Para o teste de login foram feitos os testes de logar com senha errada, logar com email errado. Os testes para nosso RF003 nos retornaram codigo 200 para sucesso com um body satisfatorio e informações corretas. Para erros tivemos o retorno 400 que no body nos contou que as credenciais de login estavam incorretas

## Ferramentas de Testes
1 - POSTMAN