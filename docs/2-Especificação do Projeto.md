# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Atualmente a demanda por soluções a respeito da mobilidade pública têm aumentado e com isso o uso de bicicletas elétricas compartilhadas se tornou uma realidade na vida das pessoas. Com isso, precificar corretamente os valores de aluguel de bicicletas compartilhadas é necessário para que o produto tenha competitividade no mercado e possa também atender de maneira justa à todos os usuários.

Uma das principais maneiras de abordar a precificação é faze-la por meio da precificação baseada em custos. A partir disso é possível que o usuário controle o valor final e consiga observar sua margem de lucro. 

Este é um produto que tem como público alvo gestores e empresas que necessitem de um sistema de precificação para bicicletas elétricas compartilhadas. Empresas como Green e Yellow tiveram grande adesão popular ao entragem no mercado de bicicletas compartilhadas. Entretanto, por conta de diversos problemas associados à depredação de patrimônio e pouca margem de lucro não puderam precificar corretamente para ter o retorno adequado...




## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|CTO Startup            | monitorar o preço dos concorrentes            | manter os preços mais competitivos           |
|-----------------------|-----------------------------------------------|----------------------------------------------|
|Usuário do sistema     | Visualizar/Analisar  preço dos concorrentes   | Melhor competitividade                       |
|Usuário do sistema     | Cadastro de preço                             | Permitir que possa ser cadastrado preços     |
|Usuário do sistema     | Importação de preços                          | Permitir que possa ser cadastrado preços     |
|Administrador          | Cadastrar permissões de usuário               | Cadastrar permissões de usuário              |
|Administrador          | Criar filtro para composição do preço         | Personalizar a composição de cálculo do preço|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                       | Prioridade |
|------|--------------------------------------------------------------|------------|
|RF-001| Permitir que o administrador cadastre preço                  |  ALTA      | 
|RF-002| Permitir que o administrador exclua preço                    |  ALTA      |
|RF-003| Permitir que o administrador edite preço                     |  ALTA      |
|RF-004| Permitir que o usuário crie filtros de preço                 |  MÉDIA     |
|RF-005| Permitir que o usuário crie relatórios de preço              |  MÉDIA     |
|RF-006| Permitir que o administrador importe preço                   |  BAIXO     |
|RF-007| Permitir que o administrador monitore os preços concorrentes |  MÉDIA     |

### Requisitos não Funcionais

|ID     | Descrição do Requisito                             |Prioridade |
|-------|-------------------------------------------------------|--------|
|RNF-001| Cadastro de preços em modo offline                    | MÉDIA  | 
|RNF-002| Autenticação dos usuários                             |  BAIXA |
|RNF-002| Design responsivo                                     |  ALTA |

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Primeira versão será lançada apenas Android           |
|02| Primeira versão não será criada com filtros de preço  |

