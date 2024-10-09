# Arquitetura da Solução


Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de Classes TIAM - RELATA BH](https://github.com/user-attachments/assets/7e16bc97-b19e-4f79-8834-705caa4147ca)


## Modelo ER

![Captura de tela 2024-10-05 195648](https://github.com/user-attachments/assets/387bf077-262e-4fa3-a8b4-83519d3d559d)


O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

![Captura de tela 2024-10-06 155244](https://github.com/user-attachments/assets/9b47c1ba-8e6e-42b1-bf3d-387122454e32)


O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

ASP.NET Core API:
A API ASP.NET Core será fundamental para gerenciar toda a lógica de back-end do aplicativo. Ela receberá as fotos e descrições enviadas pelos usuários e os dados de geolocalização (para marcar o local dos problemas no mapa). Além disso, gerenciará as requisições relacionadas ao cadastro de perfis de usuários, autenticação e autorizações. Essa API também pode integrar-se com serviços externos, como mapas ou notificações push para manter os usuários atualizados.
Frameworks e Bibliotecas:
Entity Framework Core (EF Core):
O EF Core será muito útil para armazenar as informações relacionadas aos problemas reportados e perfis de usuários em um banco de dados relacional. Cada foto, descrição e localização enviada pode ser registrada em tabelas no banco, permitindo que os administradores da cidade acessem relatórios e organizem os dados para resolver os problemas reportados. O EF Core simplificará o processo de mapeamento desses dados entre o aplicativo e o banco de dados.

JWT (JSON Web Token):
O JWT será crucial para garantir a segurança do aplicativo, principalmente para o gerenciamento de perfis de usuários. Ele permitirá autenticar os usuários de forma segura, sem a necessidade de sessões no servidor. Quando um usuário fizer login, ele receberá um token JWT que será usado para autenticação nas requisições subsequentes (por exemplo, ao enviar fotos ou visualizar problemas anteriores). Isso também permitirá que o aplicativo diferencie as permissões entre um usuário comum e administradores da cidade que podem revisar os problemas.

IDEs de Desenvolvimento:
Visual Studio:
O Visual Studio será a ferramenta principal para desenvolver a API do aplicativo. Ele fornece um ambiente completo para escrever, depurar e testar o código da aplicação. A integração com o .NET e o EF Core simplifica a criação de modelos, controladores e serviços, essenciais para a API. Também é útil para configurar e testar a base de dados, além de integrar serviços de autenticação e APIs de terceiros (como serviços de geolocalização).

Visual Studio Code (VS Code):
O VS Code será usado para edições rápidas de código, scripts de configuração e testes de endpoints da API. É útil para configurar arquivos JSON, editar scripts de banco de dados ou trabalhar em pequenos ajustes na lógica da aplicação.

Ferramentas:
Postman:
Postman será essencial para testar as interações entre o aplicativo e a API. Ele permitirá que você simule as requisições que o app fará, como o envio de fotos, descrições e localização dos problemas, além do gerenciamento de perfis de usuários. Você poderá garantir que cada endpoint da API está funcionando corretamente, que as autenticações estão seguras, e que os dados enviados estão sendo processados de maneira correta.
Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

![image](https://github.com/user-attachments/assets/ce118d5f-535f-452d-9905-56d9815330db)




## Hospedagem

Azure via FTP

Será ultizado a conta Azure disponibilizada pela instituição,  onde a aplicação será hospedada. Durante esse processo, o Azure fornece um endereço FTP, um nome de usuário e uma senha, que será usada para se conectar ao servidor.

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
