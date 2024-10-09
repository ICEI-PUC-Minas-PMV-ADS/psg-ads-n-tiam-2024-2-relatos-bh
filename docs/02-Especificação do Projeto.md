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

1. Ana Beatriz, 32 anos, Professora

Ana é uma professora de ensino fundamental que mora em um bairro movimentado de Belo Horizonte. Ela utiliza o Relatos BH para relatar problemas como buracos nas ruas e falta de iluminação em áreas ao redor da escola onde trabalha. Ana é ativa em redes sociais e busca soluções rápidas e eficazes para melhorar a segurança e a qualidade de vida em sua comunidade. Ela valoriza um aplicativo intuitivo que permita reportar problemas com facilidade, utilizando seu smartphone.

2. Carlos Silva, 45 anos, Empresário

Carlos é um empresário que possui uma pequena empresa de tecnologia e reside em um bairro com infraestrutura antiga. Ele está preocupado com problemas como o acúmulo de lixo e o estado precário das calçadas. Carlos usa o Relatos BH para reportar esses problemas e também para verificar se os problemas relatados por outros usuários estão sendo resolvidos. Ele tem um bom conhecimento técnico e aprecia funcionalidades avançadas, como o acompanhamento do status dos relatos.

3. Juliana Martins, 27 anos, Estudante de Engenharia

Juliana é uma estudante de engenharia civil que reside em uma área universitária. Ela utiliza o Relatos BH para relatar problemas relacionados à infraestrutura, como postes quebrados e sinalização inadequada. Juliana está muito envolvida com sua comunidade acadêmica e utilizaria o aplicativo para colaborar com colegas e grupos de interesse em projetos de melhorias urbanas. Ela valoriza a capacidade do aplicativo de anexar fotos e vídeos sem que isso afete o seu próprio telefone.

4. Roberto Ferreira, 50 anos, Funcionário Público

Roberto é um funcionário público que trabalha em uma agência governamental e vive em um bairro com muitos problemas de descarte inadequado de entulhos e velhos veículos. Ele usa o Relatos BH para relatar questões que afetam a acessibilidade e a sua sáude, como carros esquecidos, lixo e esgoto a céu aberto, fiação de poste caida. Roberto tem um conhecimento razoável em tecnologia e valoriza um aplicativo que seja fácil de usar e que ofereça informações claras de que outros problemas relatados não são falsos.

5. Mariana Souza, 38 anos, Coordenadora de ONG

Mariana, formada em psicologia e se considera perfectionista .Coordena uma ONG que trabalha com projetos de revitalização urbana e inclusão social. Ela  monitorara problemas relatados por moradores e integra essas informações em seus projetos. Mariana  procura um aplicativo que permita a visualizações de problemas e facilite a colaboração com a comunidade e as autoridades locais. Ela valoriza o contato com a sua comunidade para quem tanto trabalha. 

6. Paulo Henrique, 40 anos, Motorista de Aplicativo

Paulo é motorista de aplicativo e enfrenta problemas diários com a infraestrutura urbana, como buracos nas ruas e sinalização inadequada. Ele usa o Relatos BH para reportar esses problemas e garantir que sejam resolvidos, visando melhorar a segurança para ele e seus passageiros. Paulo busca um aplicativo simples e rápido de usar, que permita enviar relatórios enquanto está em movimento. 


## Histórias de Usuários

### História 1 - Como usuário, desejo poder visualizar um mapa dinâmico onde eu possa visualizar os problemas apontados pelos outros usuários de uma forma prática e rápida, por região que estou visualizando no mapa no momento. Isso me deixara visualizar os problemas com facilidade.

### História 2 - Como morador de um bairro onde ocorre diversos problemas, eu quero poder inserir diversos problemas no aplicativo e poder visualizar as minhas contribuições, para que eu possa entender melhor quais problemas já foram relatados por mim.

### História 3 - Eu como Pedro, quero poder editar os meus relatos(fotos, descrição, tipo e até a localização), as vezes na correria do dia a dia eu posso ter colocado alguma informação errada e gostaria de alterar. Ajudaria inclusive a não ceder informações falsas.

### História 4 - Eu como Gabriel, quero poder ter um perfil onde posso editar minha foto e meu nome para as pessoas saberem que foi eu quem fiz os relatos e assim ajudar minha comunidade.

### História 5 - Como utilizador do sistema, gostaria que tivesse um filtro dos relatos que já foram feitos para que eu não ficasse vageando entre os mais de mil relatos e achar o que me interesa visualizar no momento.

### História 6 - Eu como funcionário público, desejo saber quais áreas tiveram mais relatos e que isso possa me auxiliar na identificação dos problemas na cidade e assim provisionar soluções práticas rapidamente.

### História 7 - Eu como Arthur, quero poder avaliar se algum relato foi feito corretamente, pois se não, quero avaliar que esse relato está errado e até saia da plataforma. Assim, posso garantir se as informações estão sendo inseridas corretamente.

### História 8 - Eu como Vitor, quero poder inserir os meus relatos a partir de onde estou no momento, podendo tirar uma foto já pelo app para poder subi-la pra não ficar tirando fotos e depois indo no app para subir.

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
|RF-014| Permitir que os usuários avaliem outros relatios com um like/deslike | MÉDIA |
|RF-015| Permitir que os usuários avaliem outros relatios com um like/deslike | MÉDIA |
|RF-016| Ao tirar uma foto de um problema a partir da câmera, o sistema deve pegar a localização atual e auto completar no campo de localização | MÉDIA |
|RF-017| Permitir que o usuário selecione no mapa o local desejado para o registro do novo relato | MÉDIA |
|RF-018| Permitir que o usuário adicione a foto da galeria ao registrar um novo relato | MÉDIA |
|RF-019| Permitir que o usuário tire uma foto da câmera ao registrar um novo relato | MÉDIA |
|RF-020| Permitir que os usuários avaliem outros relatios com um like/deslike | MÉDIA |
|RF-021| Emitir um relatório de tarefas no mês   | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-009| Fazer uma splash screen com a logo da Relatos BH toda vez que o usuário entrar no app | BAIXA |
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| A inicialização do aplicativo deve ser de no máximo 3 segundos | MÉDIA |
|RNF-004| O aplicativo deve dar suporte para tema claro/escuro | BAIXA |

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

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

| Recurso Necessário  | (R$) |
| ------------- | ------------- |
| Recursos humanos  | 260.000,00  |
| Hardware  | 5.000,00  |
| Rede  | 2.000,00  |
| Software  | 4.500.00  |
| Serviços  | 6.000.00  |
| Total  | 277.500,00  |
