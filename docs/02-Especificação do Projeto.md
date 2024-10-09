# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Nesta seção da documentação, abordaremos a definição do problema e a ideia de solução a partir da perspectiva do usuário. A especificação do projeto será composta pelas seguintes partes:

1- Diagrama De Personas
2- História de Usuários
3- Modelagem do Processo de Negócios
4- Análise da Situação Atual
5- Descriação Geral Da Proposta
6- Indicadores de Desempenho
7- Requisitos Funcionais e Não Funcionais
8- Restrições Do Projeto
9- Diagrama de casos de Uso
10- Gerenciamento geral do projeto

## 1- Personas

1. Ana Beatriz, 32 anos, Professora (Morador Ativo)

Ana é uma professora de ensino fundamental que mora em um bairro movimentado de Belo Horizonte. Ela utiliza o Relatos BH para relatar problemas como buracos nas ruas e falta de iluminação em áreas ao redor da escola onde trabalha. Ana é ativa em redes sociais e busca soluções rápidas e eficazes para melhorar a segurança e a qualidade de vida em sua comunidade. Ela valoriza um aplicativo intuitivo que permita reportar problemas com facilidade, utilizando seu smartphone.

2. Carlos Silva, 45 anos, Empresário (Usuário engajado)

Carlos é um empresário que possui uma pequena empresa de tecnologia e reside em um bairro com infraestrutura antiga. Ele está preocupado com problemas como o acúmulo de lixo e o estado precário das calçadas. Carlos usa o Relatos BH para reportar esses problemas e também para verificar se os problemas relatados por outros usuários estão sendo resolvidos. Ele tem um bom conhecimento técnico e aprecia funcionalidades avançadas, como o acompanhamento do status dos relatos.

3. Juliana Martins, 27 anos, Estudante de Engenharia (Pessoa engajada em causas sociais)

Juliana é uma estudante de engenharia civil que reside em uma área universitária. Ela utiliza o Relatos BH para relatar problemas relacionados à infraestrutura, como postes quebrados e sinalização inadequada. Juliana está muito envolvida com sua comunidade acadêmica e utilizaria o aplicativo para colaborar com colegas e grupos de interesse em projetos de melhorias urbanas. Ela valoriza a capacidade do aplicativo de anexar fotos e vídeos sem que isso afete o seu próprio telefone.

4. Roberto Ferreira, 50 anos, Funcionário Público (Pessoa envolvida no transito)

Roberto é um funcionário público que trabalha em uma agência governamental e vive em um bairro com muitos problemas de descarte inadequado de entulhos e velhos veículos. Ele usa o Relatos BH para relatar questões que afetam a acessibilidade e a sua sáude, como carros esquecidos, lixo e esgoto a céu aberto, fiação de poste caida. Roberto tem um conhecimento razoável em tecnologia e valoriza um aplicativo que seja fácil de usar e que ofereça informações claras de que outros problemas relatados não são falsos.

5. Mariana Souza, 38 anos, Coordenadora de ONG (Pessoa engajada em causas sociais)

Mariana, formada em psicologia e se considera perfectionista .Coordena uma ONG que trabalha com projetos de revitalização urbana e inclusão social. Ela  monitorara problemas relatados por moradores e integra essas informações em seus projetos. Mariana  procura um aplicativo que permita a visualizações de problemas e facilite a colaboração com a comunidade e as autoridades locais. Ela valoriza o contato com a sua comunidade para quem tanto trabalha. 

6. Paulo Henrique, 40 anos, Motorista de Aplicativo (Pessoa envolvida no transito)

Paulo é motorista de aplicativo e enfrenta problemas diários com a infraestrutura urbana, como buracos nas ruas e sinalização inadequada. Ele usa o Relatos BH para reportar esses problemas e garantir que sejam resolvidos, visando melhorar a segurança para ele e seus passageiros. Paulo busca um aplicativo simples e rápido de usar, que permita enviar relatórios enquanto está em movimento. 


## Histórias de Usuários

### História 1 - Como usuário, desejo visualizar um mapa dinâmico onde eu possa visualizar os problemas apontados pelos outros usuários de uma forma prática e rápida, por região que estou visualizando no mapa no momento. Isso me deixara visualizar os problemas com facilidade.

### História 2 - Como morador de um bairro onde ocorre diversos problemas, eu quero relatar problemas e visualizar as minhas contribuições, para que eu possa entender melhor quais problemas já foram relatados por mim.

### História 3 - Eu como usuário final, posso editar os meus relatos(fotos, descrição, tipo e até a localização), as vezes na correria do dia a dia eu posso ter colocado alguma informação errada e gostaria de alterar. Ajudaria inclusive a não ceder informações falsas.

### História 4 - Eu como usuário final, quero poder ter um perfil onde posso editar minha foto e meu nome para as pessoas saberem que foi eu quem fiz os relatos e assim ajudar minha comunidade.

### História 5 - Como utilizador do sistema, gostaria que tivesse um filtro dos relatos que já foram feitos para que eu não ficasse vageando entre os mais de mil relatos e achar o que me interesa visualizar no momento.

### História 6 - Eu como funcionário público, desejo saber quais áreas tiveram mais relatos e que isso possa me auxiliar na identificação dos problemas na cidade e assim provisionar soluções práticas rapidamente.

### História 7 - Eu como usuário final, quero poder avaliar se algum relato foi feito corretamente, pois se não, quero avaliar que esse relato está errado e até saia da plataforma. Assim, posso garantir se as informações estão sendo inseridas corretamente.

### História 8 - Eu como usuário final, quero poder inserir os meus relatos a partir de onde estou no momento, podendo tirar uma foto já pelo app para poder subi-la pra não ficar tirando fotos e depois indo no app para subir.

### História 9 - Eu como primeiro usuário do sistemas, gostaria de fazer meu cadastro no app por apps como o google para facilitar o processo de cadastro.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre relatos  | ALTA | 
|RF-002| Permitir o cadastro de usuários   | ALTA |
|RF-003| Disponibilizar visualmente um mapa para o cliente visualizar a região   | ALTA |
|RF-004| Permitir que o usuário faça modificações nos relatos dele mesmo   | MÉDIA |
|RF-005| Permitir que o usuário visualize os relatos que ele mesmo fez em seu perfil    | MÉDIA |
|RF-006| Permitir que o usuário exclua o próprio relato | MÉDIA |
|RF-007| O perfil do usuário deverá conter os relatos feitos por ele | MÉDIA |
|RF-008| Dispor os relatos no mapa interativo para que o usuário possa ver | ALTA |
|RF-010| A tela inicial deverá conter um botão clicável para acessar a tela de MAPA  | ALTA |
|RF-011| A tela inicial deverá conter um botão clicável para acessar a tela para ADICIONAR NOVO RELATO  | ALTA |
|RF-012| A tela inicial deverá conter um botão clicável para acessar a tela de PERFIL  | ALTA |
|RF-013| Permitir que o sistema tenha um filtro, para filtrar os relatos por categoria | ALTA |
|RF-014| Permitir que os usuários avaliem outros relatos com um like/deslike | MÉDIA |
|RF-015| Ao tirar uma foto de um problema a partir da câmera, o sistema deve pegar a localização atual e auto completar no campo de localização | MÉDIA |
|RF-016| Permitir que o usuário selecione no mapa o local desejado para o registro do novo relato | MÉDIA |
|RF-017| Permitir que o usuário adicione a foto da galeria ao registrar um novo relato | MÉDIA |
|RF-018| Permitir que o usuário tire uma foto da câmera ao registrar um novo relato | MÉDIA |
|RF-019| Emitir um relatório de tarefas no mês   | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos Android e IOS | ALTA | 
|RNF-002| O sistema deve ser protegido contra acesso não autorizado | ALTA |
|RNF-003| Fazer uma splash screen com a logo da Relatos BH toda vez que o usuário entrar no app | BAIXA |
|RNF-004| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-005| A inicialização do aplicativo deve ser de no máximo 3 segundos | MÉDIA |
|RNF-006| O aplicativo deve dar suporte para tema claro/escuro | BAIXA |
|RNF-007| O sistema deve ser fácil de usar e entender e seguir padrões de usabilidade consolidadas no mercado | ALTA |
|RNF-008| O sistema deve estar disponível quando necessário | ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Todo novo relato feito pelo usuário deve conter 01(uma) ou mais fotos do problema       |
|03| Todo novo relato feito pelo usuário deve conter uma descrição do problema       |
|04| Todo novo relato feito pelo usuário deve conter a localização do problema      |
|05| O projeto não deverá ser feito por terceiros|


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 


|  |                                              |
|--|-------------------------------------------------------|
|![Use case diagram - Page 1 (1)](https://github.com/user-attachments/assets/cac71766-8af7-43bf-9791-5c55df28bbef)|![Use case diagram - Page 1 (2)](https://github.com/user-attachments/assets/867a3085-d198-4822-8913-ca7e5c8fc816)|
|![Use case diagram - Page 1 (3)](https://github.com/user-attachments/assets/8cf1e8df-01bb-4c03-8fb0-5c164960abb5)|![Use case diagram - Page 1 (4)](https://github.com/user-attachments/assets/963fd5ee-4850-4e54-88df-531a7f1f28a4)|
|![Use case diagram - Page 1 (5)](https://github.com/user-attachments/assets/979a3533-076f-4544-8513-72c97b3be8f3)|![Use case diagram - Page 1 (6)](https://github.com/user-attachments/assets/770ca55d-0e98-4a4a-a354-6455540f86f6)|
|![Use case diagram - Page 1 (7)](https://github.com/user-attachments/assets/8c6d8299-4464-4311-8877-ca831caeba64)|![Use case diagram - Page 1 (8)](https://github.com/user-attachments/assets/b6afaa37-dc01-4ed5-8bcc-e285d5726d37)|
|![Use case diagram - Page 1 (9)](https://github.com/user-attachments/assets/22711ea3-ac77-44b3-b128-4eddc4a2e816)|![Use case diagram - Page 1 (10)](https://github.com/user-attachments/assets/87351d68-9065-447c-9c24-ae4743222101)|
|![Use case diagram - Page 1 (11)](https://github.com/user-attachments/assets/bd81fd31-f26b-4458-97d5-b49cb32d3ead)
||


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O tempo de entrega das tarefas será mensurado a partir do momento em que uma tarefa foi selecionada para desenvolvimento até o momento em que a funcionalidade chegar em produção. Dessa forma o diagrama a seguir fornece uma estimativa máxima em dias desde o primeiro step até a entrega em produção 

![image](https://github.com/user-attachments/assets/1c3800ef-e6b9-45a7-b84c-abf900ae00d4)

O cronograma de atividades do projeto seguirá a seguinte **estimativa**. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![image](https://github.com/user-attachments/assets/f086ff1f-719c-4629-8a9c-dfbfa7ea11cc)



## Gerenciamento de Equipe

Chegamos a um acordo de que todos irão mexer no backend e frontend da aplicação. Porém dividimos o grupo em dois times: time 1 e time 2. Inicialmente, o time 1 ficará responsavél por desenvolver atividades relacionadas ao backend e dar suporte nos testes manuais do frontend. Já o time 2 ficará reponsável pelas atividades do frontend e dará suporte nos testes manuais do backend. Quando chegarmos na metade do nosso roadmap, iremos fazer a troca de responsabilidade dos times. Time 1 ficará responsável pelo frontend e o time 2 pelo backend.
Para melhor entendimento, segue um diagrama das reponsabilidades de cada time.

![image](https://github.com/user-attachments/assets/6d019954-2930-4922-b283-8f3d4257bcdb)




## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

| Recurso Necessário  | (R$) |
| ------------- | ------------- |
| Recursos humanos  | 100.000,00  |
| Hardware  | 5.000,00  |
| Rede  | 2.000,00  |
| Software  | 4.500.00  |
| Serviços  | 6.000.00  |
| Total  | 117.500,00  |
