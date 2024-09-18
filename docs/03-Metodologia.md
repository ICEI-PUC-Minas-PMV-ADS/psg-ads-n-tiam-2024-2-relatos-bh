
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 
Nota: Vide documento modelo do estudo de caso "Portal de Notícias" e defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `develop`: versão de desenvolvimento do software
- `develop-promotion`: versão de desenvolvimento candidata para seguir para produção

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `bug`: uma funcionalidade encontra-se com problemas e será corrigida no ambiente de desenvolvimento
- `feature`: uma nova funcionalidade precisa ser introduzida
- `hotfix`: uma funcionalidade encontra-se com problemas e será corrigida no ambiente de produção

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

- Gerencia de tag: As tags serão geradas sempre que a branch ´main´ receber atualizações. 
    - Utilizaremos o [versionamento semântico](https://semver.org/lang/pt-BR/) para gerar tags e atubuir a versão do aplicatico.
- Gerencia de merge & commit:
    - Commits direto na `main` não serão permitidos.
    - A pull requests para a `main` precisará de ao menos dois approves para ser mergeada.
- Branches:
    - As branches derivarão de develop e main para a maior parte dos casos
- Issues:
    - Features e Hotfixes serão as branches padrão para o issues.

Utilizaremos o GitFlow para realizar o gerenciamento de branches. Uma vez que a branch `main` será o reflexo de produção e a branch `develop` conterá as funcionalidades desenvolvidas na sprint atual.

![image](https://github.com/user-attachments/assets/8dca0b32-9683-44e8-80df-0f3eb0fe0a7f)


## Gerenciamento de Projeto

### Divisão de Papéis

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:

- Scrum Master: Gustavo Soares;
- Product Owner: Gabriel Santos;
- Equipe de Desenvolvimento: João Lucas, Armintas Fernande, Arthur Trindade, Matheus Roberto;
- Equipe de Design: Leandro Augusto.

### Processo

Faremos reuniões **semanais** para reporte de status e alinhamento entre os times. 
As sprints terão duração de **2 semanas**.

O gerenciamento do projeto seguirá o seguinte fluxo:

![image](https://github.com/user-attachments/assets/4b95a407-682f-4181-b05e-d342ef13e97e)

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.

### Ferramentas

As ferramentas empregadas no projeto são:

Gerencia de codigo e projeto

![image](https://github.com/user-attachments/assets/03c680e7-b092-4445-bf37-7584f6ecc4ad)

![image](https://github.com/user-attachments/assets/d6e9c017-dd56-403a-83b7-41ee6bda07cc)


- [Visual Studio Code](https://code.visualstudio.com/) Editor de código.
- [Discord](https://discord.com/)/[WhatsApp](https://web.whatsapp.com/) Ferramentas de comunicação
- [Excalidraw](https://excalidraw.com/)/[Figma](https://figma.com/) Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
