# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Atualmente a demanda por soluções a respeito da mobilidade pública têm aumentado e com isso o uso de bicicletas elétricas compartilhadas se tornou uma realidade na vida das pessoas. Com isso, precificar corretamente os valores de aluguel de bicicletas compartilhadas é necessário para que o produto tenha competitividade no mercado e possa também atender de maneira justa à todos os usuários.

Uma das principais maneiras de abordar a precificação é faze-la por meio da precificação baseada em custos. A partir disso é possível que o usuário controle o valor final e consiga observar sua margem de lucro. 

Este é um produto que tem como público alvo gestores e empresas que necessitem de um sistema de precificação para bicicletas elétricas compartilhadas. 



## Personas

Gabriel Arruda nasceu em São Paulo e é formado em Administração na USP com mestrado em Universidade de Cambridge na Inglaterra, é solteiro e sempre está em busca de formas mais sustentáveis para se locomover em uma metrópole. Trabalha em uma ONG que busca reduzir a emissão de carbono no mundo, buscando financiamento para o incentivar formas de se locomover mais saudáveis e sustetáveis ao redor do mundo.

Marcela Dutra é formada em economia pela UFMG, atualmente mora em Nova Iorque, iniciou sua carreira como bancária e após alguns anos passou a trabalhar com mercado financeiro em um escritório internacioal de uma maiores financeiras do mundo. Devido a insfraestrutura nova iorquina, se locomove apenas por bicicletas elétricas e reduziu para zero o consumo com veículos a combustão.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:


|EU COMO... `PERSONA`           | QUERO/PRECISO ... `FUNCIONALIDADE`                      |PARA ... `MOTIVO/VALOR`                                         |
|-------------------------------|---------------------------------------------------------|----------------------------------------------------------------|
|Eu como Marcela Dutra          | preciso cadastrar receitas                              |calcular precificação                                           |
|Eu como Gabriel Arruda         | cadastrar despesas variáveis                            |permitir o cadastro de despesas variáveis                       |
|Eu como Gabriel Arruda         | cadastrar despesas fixas                                |calcular precificação                                           |
|Eu como Marcela Dutra          | cadastrar premissas                                     |calcular precificação                                           |
|Eu como Gabriel Arruda         | processo de geração de preços                           |calcular os preços e lucros                                     |
|Eu como Marcela Dutra          | preciso cadastrar impostos                              |calcular precificação                                           |
|Eu como Marcela Dutra          | preciso cadastrar investimentos                         |calcular precificação                                           |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                       | Prioridade |
|------|--------------------------------------------------------------|------------|
|RF-001| Cadastrar Despesas Fixas                                     |  ALTA      | 
|RF-002| Cadastrar Despesas Variáveis                                 |  ALTA      |
|RF-003| Processo de geração de preços                                |  ALTA      |
|RF-004| Cadastro de Premissas                                        |  ALTA      |
|RF-005| Cadastro de Receitas                                         |  MÉDIA     |
|RF-005| Cadastro de Investimentos                                    |  MÉDIA     |
|RF-005| Cadastro de Impostos                                         |  MÉDIA     |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                             |Prioridade |
|-------|-------------------------------------------------------|--------|
|RNF-001| Redução de carbono                                    |  MÉDIA | 
|RNF-002| Design amigável                                       |  ALTA  |

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Primeira versão será lançada apenas Web               |
|02| Primeira versão não será criada com filtros de preço  |

