# Plano de Testes de Usabilidade

### Login
  Passos para teste:
   - Ter uma conta registrada no sistema
   - Preencher os campos de E-mail e Senha na aplicação
   - Clicar em Login
     
  Resultados esperados: 
   - O usuário é logado com sucesso.
     
  Caso alternativo:
  
  Usuário digita informações incompatíveis com o cadastrado:
   - O sistema retorna mensagem de erro.
     
### Cadastro
  Passos para teste:
   - Preencher os campos de E-mail, Nome, Senha e Confirmar Senha na aplicação.
   - Clicar em Registrar.
     
  Resultados esperados: 
   - O usuário é cadastrado com sucesso.
     
  Caso alternativo:
  
  Usuário cadastra com o E-mail de um usuário previamente cadastrado:
  
   - Já possui um usuário cadastrado com o E-mail informado
   - O sistema retorna uma mensagem de erro.

  Usuário tenta cadastrar com senhas diferentes:
   - O sistema retorna uma mensagem de erro.

### Esqueci minha senha?
   Passos para teste:
   - Preencher os campos de E-mail.
   - Clicar em recuperar senha.
     
  Resultados esperados: 
   - O usuário recebe um E-mail para redefinição de senha.
     
  Caso alternativo:
  
  Usuário informa um E-mail não cadastrado:
  
   - O usuário não receberá o E-mail.


